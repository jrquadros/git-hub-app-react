'use strict'

import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <div className='app'>
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

        <div className='actions'>
          <button>Ver repositórios</button>
          <button>Ver favoritos</button>
        </div>

        <ul className='repos'>
          <h2>Repositórios</h2>
          <li><a href=''>Nome do repositório</a></li>
          <li><a href=''>Nome do repositório</a></li>
        </ul>

        <ul className='starred'>
          <h2>Favoritos</h2>
          <li><a href=''>Nome do repositório</a></li>
          <li><a href=''>Nome do repositório</a></li>
        </ul>
      </div>
    )
  }
}

export default App
