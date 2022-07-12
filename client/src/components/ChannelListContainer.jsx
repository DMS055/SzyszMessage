import React from 'react'
import Cookies from 'universal-cookie';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

const SideBar = () => (
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </div>
    </div>
  </div>
)

const Header = () => (
  <div className='channel-list__header'>
    <p className='channel-list__header__text'>SzyszMessage</p>
  </div>
)

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
      <div className='channel-list__list__wrapper'>
        <Header />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              {... listProps}
              type="team"
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="team"
            />
          )}
        />
      </div>
    </>
  )
}

export default ChannelListContainer