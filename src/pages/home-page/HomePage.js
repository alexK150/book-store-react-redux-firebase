import React, {useState} from 'react';
import './home-page-styles.css';
import MenuItem from '../../components/menu-item/MenuItem';

function HomePage(props) {
  const [menuItems, setMenuItems] = useState([
    {
      'id': 1,
      'title': 'Классика',
      'backgroundColorHex': '#487eb0'
    },
    {
      'id': 2,
      'title': 'Образование',
      'backgroundColorHex': '#7f8fa6'
    },
    {
      'id': 3,
      'title': 'Религия',
      'backgroundColorHex': '#fbc531'
    },
    {
      'id': 4,
      'title': 'Психология',
      'backgroundColorHex': '#9c88ff'
    },
    {
      'id': 5,
      'title': 'Наука',
      'backgroundColorHex': '#487eb0'
    },
    {
      'id': 6,
      'title': 'Медицина',
      'backgroundColorHex': '#44bd32'
    },
  ])

  return (
    <main className="home-page">
      <h1>Home-page</h1>
      <div className='home-page__menu'>
        {menuItems.map(el => {
          return <MenuItem key={el.id} menuItem={el}/>
        })
        }
      </div>
    </main>
  );
}

export default HomePage;