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
      starred: [],
      isFetching: false
    }
  }

  getGitHubApi (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({
        isFetching: true
      })
      fetch(this.getGitHubApi(value), {
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
                },
                repos: [],
                starred: []
              })
            })
            .finally(() => {
              this.setState({
                isFetching: false
              })
            })
        })
    }
  }

  showRepos (type) {
    return (e) => {
      const username = this.state.userinfo.login
      fetch(this.getGitHubApi(username, type))
        .then((response) => {
          response.json()
            .then((result) => {
              this.setState({
                [type]: result.map((repo) => {
                  return {
                    name: repo.name,
                    link: repo.html_url
                  }
                })
              })
            })
        })
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      isFetching={this.state.isFetching}
      handleSearch={(e) => { this.handleSearch(e) }}
      showRepos={this.showRepos('repos')}
      showStarred={this.showRepos('starred')} />
  }
}

export default App
