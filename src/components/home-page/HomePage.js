import React from 'react';
import './home-page-styles.css';

function HomePage(props) {
  return (
    <main className="home-page">
      <h1>Home-page</h1>
      <div className='home-page__menu'>
        <section className="home-page__menu-item">
          <section className="home-page__content">
            <h3 className='home-page__title'>Художественная литература</h3>
            <span className='home-page__subtitle'>Перейти в каталог</span>
          </section>
        </section>
        <section className="home-page__menu-item">
          <section className="home-page__content">
            <h3 className='home-page__title'>Образование</h3>
            <span className='home-page__subtitle'>Перейти в каталог</span>
          </section>
        </section>
        <section className="home-page__menu-item">
          <section className="home-page__content">
            <h3 className='home-page__title'>Психология</h3>
            <span className='home-page__subtitle'>Перейти в каталог</span>
          </section>
        </section>
        <section className="home-page__menu-item">
          <section className="home-page__content">
            <h3 className='home-page__title'>Наука и техника</h3>
            <span className='home-page__subtitle'>Перейти в каталог</span>
          </section>
        </section>
        <section className="home-page__menu-item">
          <section className="home-page__content">
            <h3 className='home-page__title'>Религия</h3>
            <span className='home-page__subtitle'>Перейти в каталог</span>
          </section>
        </section>
        <section className="home-page__menu-item">
          <section className="home-page__content">
            <h3 className='home-page__title'>Медицина</h3>
            <span className='home-page__subtitle'>Перейти в каталог</span>
          </section>
        </section>
      </div>
    </main>
  );
}

export default HomePage;