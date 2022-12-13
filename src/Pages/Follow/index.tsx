import React from 'react'
import { NavigationTabButton } from '../../Components';
import Header from '../../Shared/Components/Header';

const Follow: React.FC<{}> = () => {
  return (
    <Header headerText='CodeByTarun' subHeaderText='@CodeByTarun' backButtonLink={'/profile'} tabs={
        [<NavigationTabButton key={'followers'} text={'Followers'} path={'/profile/followers'} isActive={false}/>, 
        <NavigationTabButton key={'following'} text={'Following'} path={'/profile/following'} isActive={false}/>]
    }/>
  )
}

export default Follow;