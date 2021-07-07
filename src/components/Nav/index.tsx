import React from 'react'
import Link from 'next/link'
import { List } from './style'
const Nav = () => {
  return (
    <List>
      <li>
        <Link href="/">
          <a>Deu no poste hoje</a>
        </Link>
      </li>
      <li>
        <Link href="/week">
          <a>Resultados da semana</a>
        </Link>
      </li>
      <li>
        <Link href="/palpite">
          <a>Palpite</a>
        </Link>

        </li>
      <li>
        <Link href="/futebol">
          <a>Futebol</a>
        </Link>
      </li>
      <li>
        <Link href="/historia">
          <a>O jogo do bicho</a>
        </Link>
        </li>
    </List>
  )
}

export default Nav
