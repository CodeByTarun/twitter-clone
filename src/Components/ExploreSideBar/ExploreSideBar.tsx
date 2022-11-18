import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { devices } from '../../Shared/globalConstants';
import { ExploreSideBarDiv } from './styled';

const ExploreSideBar: React.FC<{}> = () => {
  const isLaptop = useMediaQuery({ query: devices.laptop });

  if (!isLaptop) return null;

  return (
    <ExploreSideBarDiv>
      <p>helifdasdf</p>
    </ExploreSideBarDiv>
  );
};

export default ExploreSideBar;
