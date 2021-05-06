import React from 'react';
import './menu-item-styles.css';

function MenuItem({menuItem}) {
  return (
    <section className="home-page__menu-item" style={{backgroundColor: menuItem.backgroundColorHex}}>
      <section className="home-page__content">
        <h3 className='home-page__title'>{menuItem.title}</h3>
        <span className='home-page__subtitle'>Перейти в каталог</span>
      </section>
    </section>
  );
}

export default MenuItem;