import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import Resume from '../../Tom_Keech_Resume.pdf';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Home
      </a>
      <a href="#section1" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        About
        </a>
      <a href={Resume} tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Resume
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Projects
      </a>
      <a href="/" tabIndex={tabIndex}>
        <span aria-hidden="true"></span>
        Contact
        </a>
    </StyledMenu>
    
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;