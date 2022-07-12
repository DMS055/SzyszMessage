import React from 'react'
import Cookies from 'universal-cookie';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from 'stream-chat-react';

const SideBar = () => (
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1'>
      <div className='icon1__inner'>
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </div>
    </div>
  </div>
)

const ChannelListContainer = () => {
  return (
    <>
      <SideBar />
    </>
  )
}

export default ChannelListContainer