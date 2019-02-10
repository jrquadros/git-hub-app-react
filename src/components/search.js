'use strict'

import React from 'react'
import Fetch from 'node-fetch'
// import Ajax from '@fdaciuk/ajax'

const Search = () => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário'
      onKeyUp={(e) => {
        const value = e.target.value
        const keyCode = e.which || e.keyCode
        const ENTER = 13

        if (keyCode === ENTER) {
          Fetch(`https://api.github.com/users/${value}`, {
            method: 'get'
          })
            .then((response) => {
              response.json()
                .then((result) => {
                  console.log(result)
                  console.log(result.login)
                })
            })
        }

        /*  if (keyCode === ENTER) {
          Ajax().get(`https://api.github.com/users/${value}`)
            .then((result) => {
              console.log(result)
            })
        } */

        console.log('KeyCode:', keyCode)
      }} />
  </div>
)

export default Search
