import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

import Logo from '../../../public/img/jogo.png';
import {HeaderContainer,WrapperImage} from './style';
import Nav from 'components/Nav';

const Header = () => {
  return (
    <>
    <HeaderContainer>
      <WrapperImage>
        <Link href="/">
      <Image
        src={Logo}
        alt="Picture of the author"
        objectPosition="center top"
      />
      </Link>
      </WrapperImage>
      <form action="">
        <input type="search" placeholder="Pesquisar"/>

      </form>
    </HeaderContainer>
      <Nav />
    </>
  );
};

export default Header;
