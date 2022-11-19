import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useTheme } from 'styled-components';
import { devices } from '../../Shared/globalConstants';
import { SearchIcon } from '../../Shared/Icons';
import { HeaderText } from '../../Shared/Styled/MiscellaneousStyled';
import SvgStyled from '../../Shared/Styled/SvgStyled';
import { ExploreSideBarDiv, SearchBar, SearchInput, Widget } from './styled';

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
        <Widget>
          <HeaderText isBold={true}>
            What&apos;s happening
          </HeaderText>
          <p>fsdf</p>
          <p>fsdf</p>
          <p>fsdf</p>
          <p>fsdf</p>
          <p>fsdf</p>
        </Widget>
      </ExploreSideBarDiv>
  );
};

export default ExploreSideBar;
