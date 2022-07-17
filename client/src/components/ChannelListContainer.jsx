import React from 'react'
import Cookies from 'universal-cookie';
import { ChannelList, useChatContext } from 'stream-chat-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './';

const cookies = new Cookies();

const SideBar = ({ logout }) => (
  <div className='channel-list__sidebar'>
    <div className='channel-list__sidebar__icon1' onClick={logout}> 
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
  const logout = () => {
    cookies.remove('token');
    cookies.remove("userId");
		cookies.remove("username");
		cookies.remove("fullName");
		cookies.remove("avatarURL");
    cookies.remove("hashedPassword");
		cookies.remove("phoneNumber");

    window.location.reload();
  }

  return (
    <>
      <SideBar logout={logout} />
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
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList
              {... listProps}
              type="message"
            />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview
              {...previewProps}
              type="message"
            />
          )}
        />
      </div>
    </>
  )
}

export default ChannelListContainer