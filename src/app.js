'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import fetch from 'node-fetch'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      fetch(`https://api.github.com/users/${value}`, {
        method: 'get'
      })
        .then((response) => {
          response.json()
            .then((result) => {
              this.setState({
                userinfo: {
                  username: result.name,
                  avatar: result.avatar_url,
                  login: result.login,
                  repos: result.public_repos,
                  followers: result.followers,
                  following: result.following
                }
              })
              console.log(result)
              console.log(result.login)
            })
        })
    }
    console.log('KeyCode:', keyCode)
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => { this.handleSearch(e) }} />
  }
}

export default App
