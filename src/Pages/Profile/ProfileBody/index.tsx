import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavigationTabButton from '../../../Shared/Components/NavigationTabButton'
import { FlexContainer } from '../../../Shared/Styled/MiscellaneousStyled'
import Likes from './Likes'
import Media from './Media'
import Tweets from './Tweets'
import WithReplies from './WithReplies'


const ProfileBody: React.FC<{}> = () => {
  return (
    <FlexContainer isVertical={true}>
      <FlexContainer isVertical={false}>
        <NavigationTabButton text='Tweets' isActive={false} path={''}/>
        <NavigationTabButton text='Tweets & Replies' isActive={false} path={'with_replies'}/>
        <NavigationTabButton text='Media' isActive={false} path={'media'}/>
        <NavigationTabButton text='Likes' isActive={false} path={'likes'}/>
      </FlexContainer>
      <FlexContainer isVertical={true}>
        <Routes>
          <Route index element={<Tweets/>}/>
          <Route path="/with_replies" element={<WithReplies/>}/>
          <Route path="/media" element={<Media/>}/>
          <Route path="/likes" element={<Likes/>}/>
        </Routes>
      </FlexContainer>
    </FlexContainer>
  )
}

export default ProfileBody