'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  showRepos,
  showStarred
}) => (
  <div className='app'>
    <Search
      handleSearch={handleSearch}
      isDisabled={isFetching} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions
      showRepos={showRepos}
      showStarred={showStarred} />}
    {!!repos.length && <Repos
      repos={repos}
      className='repos'
      title='Repositórios:' />}

    {!!starred.length && <Repos
      className='starred'
      title='Favoritos'
      repos={starred}
    />}
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
