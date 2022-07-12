import React from 'react'

const TeamChannelList = ({ children, error = false, loading, type }) => {
    if(error) {
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message">
                    Error, please try again shortly.
                </p>
            </div>
        ) : null
    }

    if (loading) {
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading">
                    Loading {type === 'team' ? 'channels' : 'messages'}...
                </p>
            </div>
        )
    }

  return (
    <div className='team-channel-list'>
        <div className="team-channel-list__header">
              <p className='team-channel-list__header__title'>
                {type === 'team' ? 'Channels' : 'Messages'}
              </p>
              {/*Channel add btn*/}
          </div>
          {children}
    </div>
  )
}

export default TeamChannelList