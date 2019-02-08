'use strict'

import React, { Component } from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Search />
        <UserInfo />
        <Actions />

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
