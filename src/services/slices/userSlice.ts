import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  TLoginData,
  TRegisterData,
  forgotPasswordApi,
  getUserApi,
  loginUserApi,
  logoutApi,
  registerUserApi,
  resetPasswordApi,
  updateUserApi
} from '../../utils/burger-api';
import { deleteCookie, getCookie, setCookie } from '../../utils/cookie';
import { TUser } from '../../utils/types';

type TResetPasswordData = {
  password: string;
  token: string;
};

interface UserState {
  user: TUser | null;
  isAuthChecked: boolean;
  isResetPasswordRequested: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isAuthChecked: false,
  isResetPasswordRequested: false,
  loading: false,
  error: null
};

const saveTokens = (accessToken: string, refreshToken: string) => {
  setCookie('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (data: TRegisterData) => {
    const response = await registerUserApi(data);
    saveTokens(response.accessToken, response.refreshToken);
    return response.user;
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (data: TLoginData) => {
    const response = await loginUserApi(data);
    saveTokens(response.accessToken, response.refreshToken);
    return response.user;
  }
);

export const forgotPassword = createAsyncThunk(
  'user/forgotPassword',
  async (email: string) => {
    await forgotPasswordApi({ email });
    return true;
  }
);

export const resetPassword = createAsyncThunk(
  'user/resetPassword',
  async (data: TResetPasswordData) => {
    await resetPasswordApi(data);
    return true;
  }
);

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const response = await getUserApi();
  return response.user;
});

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (data: Partial<TRegisterData>) => {
    const response = await updateUserApi(data);
    return response.user;
  }
);

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  await logoutApi();
  deleteCookie('accessToken');
  localStorage.removeItem('refreshToken');
});

export const checkUserAuth = createAsyncThunk(
  'user/checkUserAuth',
  async () => {
    const accessToken = getCookie('accessToken');

    if (!accessToken) {
      return null;
    }

    try {
      const response = await getUserApi();
      return response.user;
    } catch {
      deleteCookie('accessToken');
      localStorage.removeItem('refreshToken');
      return null;
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserError: (state) => {
      state.error = null;
    },
    resetPasswordRequestFlag: (state) => {
      state.isResetPasswordRequested = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка регистрации';
        state.isAuthChecked = true;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка входа';
        state.isAuthChecked = true;
      })

      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
        state.isResetPasswordRequested = true;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message || 'Ошибка запроса восстановления пароля';
      })

      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
        state.isResetPasswordRequested = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка сброса пароля';
      })

      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка получения пользователя';
        state.isAuthChecked = true;
      })

      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка обновления пользователя';
      })

      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthChecked = true;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка выхода';
      })

      .addCase(checkUserAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkUserAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthChecked = true;
      })
      .addCase(checkUserAuth.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthChecked = true;
      });
  }
});

export const { clearUserError, resetPasswordRequestFlag } = userSlice.actions;
export default userSlice.reducer;
