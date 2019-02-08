'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars1.githubusercontent.com/u/40250538?v=4' />
    <h1 className='username'>
      <a href='http://github.com/jrquadros'>jrquadros</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: 4</li>
      <li>Seguidires: 12</li>
      <li>Seguindo: 12</li>
    </ul>
  </div>
)

export default UserInfo
