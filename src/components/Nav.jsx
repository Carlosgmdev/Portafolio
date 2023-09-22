// Nav.js
import React from 'react';
import { scrollToSection } from '../js/utils';

const Nav = () => {

  return (
    <nav className="hidden md:flex flex-row gap-10 ">
      <a className='cursor-pointer' onClick={() => scrollToSection('about')}>Acerca de mí</a>
      <a className='cursor-pointer' onClick={() => scrollToSection('formations')}>Formaciones</a>
      <a className='cursor-pointer' onClick={() => scrollToSection('skills')}>Habilidades</a>
      <a className='cursor-pointer' onClick={() => scrollToSection('projects')}>Proyectos</a>
    </nav>
  );
};

export default Nav;
