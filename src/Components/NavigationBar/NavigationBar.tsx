import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavigationDiv, TweetButton } from './styled';
import {
  BookmarksIcon,
  CreateTweetIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  NotificationIcon,
  ProfileIcon,
  SearchIcon,
  ThemeIcon,
  TwitterIcon,
} from '../../Shared/Icons';
import { useTheme } from 'styled-components';
import NavigationButton from './NavigationButton';
import { devices } from '../../Shared/globalConstants';
import SvgStyled from '../../Shared/Styled/SvgStyled';
import ProfileButton from './ProfileButton/ProfileButton';
import { LinkStyled, Spacer } from '../../Shared/Styled/MiscellaneousStyled';

const NavigationBar: React.FC<{}> = () => {
  const theme = useTheme();

  const isDesktop = useMediaQuery({ query: devices.desktop });
  const isLaptop = useMediaQuery({ query: devices.laptop});

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
      <LinkStyled to={'/home'}>
        <NavigationButton
          text={'Home'}
          icon={<HomeIcon />}
          hoverColor={theme.font.primary}
          iconColor={theme.font.primary}
        />
      </LinkStyled>
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
      <LinkStyled to={'/messages'}>
        <NavigationButton
          text={'Messages'}
          icon={<MessagesIcon />}
          hoverColor={theme.font.primary}
          iconColor={theme.font.primary}
        />
      </LinkStyled>
      <LinkStyled to={'/bookmarks'}>
        <NavigationButton
          text={'Bookmarks'}
          icon={<BookmarksIcon />}
          hoverColor={theme.font.primary}
          iconColor={theme.font.primary}
        />
      </LinkStyled>
      <LinkStyled to={'/lists'}>
        <NavigationButton
          text={'Lists'}
          icon={<ListsIcon />}
          hoverColor={theme.font.primary}
          iconColor={theme.font.primary}
        />
      </LinkStyled>
      <LinkStyled to={'/profile'}>
        <NavigationButton
          text={'Profile'}
          icon={<ProfileIcon />}
          hoverColor={theme.font.primary}
          iconColor={theme.font.primary}
        />
      </LinkStyled>
      <LinkStyled to={'/theme'}>
        <NavigationButton
          text={'Theme'}
          icon={<ThemeIcon />}
          hoverColor={theme.font.primary}
          iconColor={theme.font.primary}
        />
      </LinkStyled>
      <LinkStyled to={'/compose/tweet'}>
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
