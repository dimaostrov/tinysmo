import React from 'react';
import { Navbar, NavbarNav, NavbarLink, Icon, Input, Button } from '@front10/landing-page-book/dist/components';
import { Link } from 'react-router-dom';

const linkItems = [
  {
    title: ' About',
    link: '/about',
    icon: 'fa fa-book'
  },
  {
    title: ' Portfolio',
    link: '/portfolio',
    icon: 'fa fa-tasks'
  },
  {
    title: ' Chatbots',
    link: '/chatbots',
    icon: 'fa fa-comment'
  },
  {
    title: ' Contact',
    link: '/contact',
    icon: 'fa fa-at'
  }
];

const buttonize = (link) =>
  <NavbarLink>
    <Link to={link.link} style={{ textDecoration: 'none', color: 'white' }}>

      <i className={link.icon} />
      {link.title}

    </Link>
  </NavbarLink>


const Nav = (props) => {
  return (
    <Navbar expand="md" fixed>
      <NavbarNav>
        <NavbarLink>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Icon className="mr-1"
              icon="fa fa-grav" />
            Dima Ostrov
          </Link>
        </NavbarLink>
      </NavbarNav>
      <NavbarNav alignItems="right">
        {linkItems.map(link => buttonize(link))}
      </NavbarNav>
    </Navbar>

  );
}


export default Nav;