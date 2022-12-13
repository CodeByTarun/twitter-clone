import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavigationDiv, TweetButton } from './styled';
import {
  BookmarksIcon,
  BookmarksIconActive,
  CreateTweetIcon,
  ExploreIcon,
  HomeIcon,
  HomeIconActive,
  ListsIcon,
  MessagesIcon,
  MessagesIconActive,
  NotificationIcon,
  ProfileIcon,
  ProfileIconActive,
  SearchIcon,
  ThemeIcon,
  TwitterIcon,
} from '../../Shared/Icons';
import styled, { useTheme } from 'styled-components';
import NavigationButton from './NavigationButton';
import { devices } from '../../Shared/globalConstants';
import SvgStyled from '../../Shared/Styled/SvgStyled';
import ProfileButton from './ProfileButton/ProfileButton';
import {
  HeaderText,
  LinkStyled,
  Spacer,
} from '../../Shared/Styled/MiscellaneousStyled';
import { NavLink, useLocation } from 'react-router-dom';

const NavigationLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    ${HeaderText} {
      font-weight: bold;
    }
  }
`;

const NavigationBar: React.FC<{}> = () => {
  const theme = useTheme();
  const location = useLocation();

  const isDesktop = useMediaQuery({ query: devices.desktop });
  const isLaptop = useMediaQuery({ query: devices.laptop });

  return (
    <NavigationDiv>
      <LinkStyled to={'/home'}>
        <NavigationButton
          text={''}
          icon={<TwitterIcon />}
          hoverColor={theme.colors.accent}
          iconColor={theme.colors.accent}
          padding={'0.7rem'}
        />
      </LinkStyled>
      <NavigationLink to={'/home'}>
        {({ isActive }) => (
          <NavigationButton
            text={'Home'}
            icon={isActive ? <HomeIconActive /> : <HomeIcon />}
            hoverColor={theme.font.primary}
            iconColor={theme.font.primary}
          />
        )}
      </NavigationLink>
      <NavigationButton
        text={'Explore'}
        icon={isLaptop ? <ExploreIcon /> : <SearchIcon />}
        hoverColor={theme.font.primary}
        iconColor={theme.font.primary}
      />
      <NavigationButton
        text={'Notifications'}
        icon={<NotificationIcon />}
        hoverColor={theme.font.primary}
        iconColor={theme.font.primary}
      />
      <NavigationLink to={'/messages'}>
        {({ isActive }) => (
          <NavigationButton
            text={'Messages'}
            icon={isActive ? <MessagesIconActive /> : <MessagesIcon />}
            hoverColor={theme.font.primary}
            iconColor={theme.font.primary}
          />
        )}
      </NavigationLink>
      <NavigationLink to={'/bookmarks'}>
        {({ isActive }) => (
          <NavigationButton
            text={'Bookmarks'}
            icon={isActive ? <BookmarksIconActive /> : <BookmarksIcon />}
            hoverColor={theme.font.primary}
            iconColor={theme.font.primary}
          />
        )}
      </NavigationLink>
      <NavigationButton
        text={'Lists'}
        icon={<ListsIcon />}
        hoverColor={theme.font.primary}
        iconColor={theme.font.primary}
      />
      <NavigationLink to={'/profile'}>
        {({ isActive }) => (
          <NavigationButton
            text={'Profile'}
            icon={isActive ? <ProfileIconActive /> : <ProfileIcon />}
            hoverColor={theme.font.primary}
            iconColor={theme.font.primary}
          />
        )}
      </NavigationLink>
      <LinkStyled to={'/theme'} state={{ background: location }}>
        <NavigationButton
          text={'Theme'}
          icon={<ThemeIcon />}
          hoverColor={theme.font.primary}
          iconColor={theme.font.primary}
        />
      </LinkStyled>
      <LinkStyled to={'/compose/tweet'} state={{ background: location }}>
        <TweetButton>
          {isDesktop ? (
            'Tweet'
          ) : (
            <SvgStyled color={theme.font.primary}>
              <CreateTweetIcon />
            </SvgStyled>
          )}
        </TweetButton>
      </LinkStyled>
      <Spacer />
      <ProfileButton />
    </NavigationDiv>
  );
};

export default NavigationBar;
