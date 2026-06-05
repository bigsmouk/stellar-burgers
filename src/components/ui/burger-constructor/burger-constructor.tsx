import React, { FC } from 'react';
import {
  Button,
  ConstructorElement,
  CurrencyIcon
} from '@zlden/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import { BurgerConstructorUIProps } from './type';
<<<<<<< HEAD
=======
import { TConstructorIngredient } from '@utils-types';
>>>>>>> main
import { BurgerConstructorElement, Modal } from '@components';
import { Preloader, OrderDetailsUI } from '@ui';

export const BurgerConstructorUI: FC<BurgerConstructorUIProps> = ({
  constructorItems,
  orderRequest,
  price,
  orderModalData,
  onOrderClick,
  closeOrderModal
}) => (
  <section className={styles.burger_constructor}>
    {constructorItems.bun ? (
      <div className={`${styles.element} mb-4 mr-4`}>
        <ConstructorElement
          type='top'
          isLocked
          text={`${constructorItems.bun.name} (верх)`}
          price={constructorItems.bun.price}
          thumbnail={constructorItems.bun.image}
        />
      </div>
    ) : (
      <div
        className={`${styles.noBuns} ${styles.noBunsTop} ml-8 mb-4 mr-5 text text_type_main-default`}
      >
        Выберите булки
      </div>
    )}
<<<<<<< HEAD

    <ul className={styles.elements}>
      {constructorItems.ingredients.length > 0 ? (
        constructorItems.ingredients.map((item, index) => (
          <BurgerConstructorElement
            ingredient={item}
            index={index}
            totalItems={constructorItems.ingredients.length}
            handleClose={item.handleClose}
            key={item.id}
          />
        ))
=======
    <ul className={styles.elements}>
      {constructorItems.ingredients.length > 0 ? (
        constructorItems.ingredients.map(
          (item: TConstructorIngredient, index: number) => (
            <BurgerConstructorElement
              ingredient={item}
              index={index}
              totalItems={constructorItems.ingredients.length}
              key={item.id}
            />
          )
        )
>>>>>>> main
      ) : (
        <div
          className={`${styles.noBuns} ml-8 mb-4 mr-5 text text_type_main-default`}
        >
          Выберите начинку
        </div>
      )}
    </ul>
<<<<<<< HEAD

=======
>>>>>>> main
    {constructorItems.bun ? (
      <div className={`${styles.element} mt-4 mr-4`}>
        <ConstructorElement
          type='bottom'
          isLocked
          text={`${constructorItems.bun.name} (низ)`}
          price={constructorItems.bun.price}
          thumbnail={constructorItems.bun.image}
        />
      </div>
    ) : (
      <div
        className={`${styles.noBuns} ${styles.noBunsBottom} ml-8 mb-4 mr-5 text text_type_main-default`}
      >
        Выберите булки
      </div>
    )}
<<<<<<< HEAD

=======
>>>>>>> main
    <div className={`${styles.total} mt-10 mr-4`}>
      <div className={`${styles.cost} mr-10`}>
        <p className={`text ${styles.text} mr-2`}>{price}</p>
        <CurrencyIcon type='primary' />
      </div>
      <Button
        htmlType='button'
        type='primary'
        size='large'
        children='Оформить заказ'
        onClick={onOrderClick}
      />
    </div>

    {orderRequest && (
<<<<<<< HEAD
      <Modal onClose={closeOrderModal} title='Оформляем заказ...'>
=======
      <Modal onClose={closeOrderModal} title={'Оформляем заказ...'}>
>>>>>>> main
        <Preloader />
      </Modal>
    )}

    {orderModalData && (
<<<<<<< HEAD
      <Modal onClose={closeOrderModal} title=''>
=======
      <Modal
        onClose={closeOrderModal}
        title={orderRequest ? 'Оформляем заказ...' : ''}
      >
>>>>>>> main
        <OrderDetailsUI orderNumber={orderModalData.number} />
      </Modal>
    )}
  </section>
<<<<<<< HEAD
);
=======
);
>>>>>>> main
