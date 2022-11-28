import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from 'styled-components';
import { devices } from '../../Shared/globalConstants';
import { SearchIcon } from '../../Shared/Icons';
import SvgStyled from '../../Shared/Styled/SvgStyled';
import { AboutSection } from './AboutSection';
import { DiscoverCard } from './DiscoverCard';
import { ExploreSideBarDiv, SearchBar, SearchInput } from './styled';
import UserFollowCard from './UserFollowCard';

const ExploreSideBar: React.FC<{}> = () => {

  const theme = useTheme();
  const isLaptop = useMediaQuery({ query: devices.laptop });

  if (!isLaptop) return null;

  return (
      <ExploreSideBarDiv>
        <SearchBar>
          <SvgStyled color={theme.font.secondary}>
            <SearchIcon/>
          </SvgStyled>
          <SearchInput type={'text'} placeholder="Search Twitter"/>
        </SearchBar>
        <DiscoverCard/>
        <UserFollowCard/>
        <AboutSection/>
        </ExploreSideBarDiv>
  );
};

export default ExploreSideBar;
