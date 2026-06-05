import { BurgerConstructorElementUI } from '@ui';
import type { Meta, StoryObj } from '@storybook/react';
<<<<<<< HEAD
=======
import { totalmem } from 'os';
>>>>>>> main

const meta = {
  title: 'Example/BurgerConstructorElement',
  component: BurgerConstructorElementUI,
<<<<<<< HEAD
  tags: ['autodocs'],
  parameters: {
=======
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
>>>>>>> main
    layout: 'fullscreen'
  }
} satisfies Meta<typeof BurgerConstructorElementUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultElement: Story = {
  args: {
    ingredient: {
      _id: '111',
      id: '222',
      name: 'Булка',
<<<<<<< HEAD
      type: 'main',
=======
      type: 'top',
>>>>>>> main
      proteins: 12,
      fat: 33,
      carbohydrates: 22,
      calories: 33,
      price: 123,
      image: '',
      image_large: '',
<<<<<<< HEAD
      image_mobile: '',
      handleClose: () => {}
=======
      image_mobile: ''
>>>>>>> main
    },
    index: 0,
    totalItems: 1,
    handleMoveUp: () => {},
    handleMoveDown: () => {},
    handleClose: () => {}
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> main
