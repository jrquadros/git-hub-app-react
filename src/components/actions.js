'use strict'

import React, { PropTypes } from 'react'

const Actions = ({ showRepos, showStarred }) => (
  <div className='actions'>
    <button onClick={showRepos}>Ver repositórios</button>
    <button onClick={showStarred}>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  showRepos: PropTypes.func,
  showStarred: PropTypes.func
}

export default Actions
