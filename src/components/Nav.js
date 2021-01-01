import React from 'react';
import { useLocation } from 'react-router-dom';

import { NavList, LinkStyled } from './Nav.styled';

const LINKs = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Nav = () => {
  return (
    <div>
      <NavList>
        {LINKs.map(item => (
          <li key={item.to}>
            <LinkStyled
              className={item.to === location.pathname ? 'active' : ''}
              to={item.to}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Nav;
