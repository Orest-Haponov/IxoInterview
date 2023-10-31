import React from 'react';
import { appRoutes } from '../../Router/constant';
import { useNavigate } from 'react-router';


const Header = () => {
  const navigate = useNavigate()

  const headerRoutes = [
    {
      path: appRoutes.pageOne,
      title: 'Page One'
    },
    {
      path: appRoutes.pageTwo,
      title: 'Page Two'
    },
    {
      path: appRoutes.pageThree,
      title: 'Page Three'
    },
  ]

  return (
    <ul style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      listStyleType: 'none',
      gap: '12px'
    }}>
      {headerRoutes.map((item, i) => (
        <li key={i} onClick={()=> navigate(item.path)}>{item.title}</li>
      ))}
    </ul>
  );
}
 
export default Header;