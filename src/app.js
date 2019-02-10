'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'jrquadros',
        repos: 12,
        followers: 12,
        following: 12
      },
      repos: [{
        name: 'repo1',
        link: '#'
      },
      {
        name: 'repo2',
        link: '#'
      }],
      starred: [{
        name: 'repo1',
        link: '#'
      },
      {
        name: 'repo2',
        link: '#'
      }]
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred} />
  }
}

export default App
