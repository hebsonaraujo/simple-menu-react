import React from 'react';
import Logo from '../Logo/Logo';
import Bar from '../Bar/Bar';
import { CommonProps } from '../../interfaces/CommonProps'
import './Header.css'
const Header: React.FC<CommonProps> = ({titles}) => {
  return (
    <header>
        <Logo/>
        <Bar titles={titles}/>
    </header>
  );
};

export default Header;
