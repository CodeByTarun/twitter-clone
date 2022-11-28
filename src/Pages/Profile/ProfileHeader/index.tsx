import React from 'react'
import styled from 'styled-components'

const ProfileHeaderContainer = styled.div`
    
`

export const ProfileHeader: React.FC<{}> = () => {
    return (
        <ProfileHeaderContainer>

        </ProfileHeaderContainer>
    )
}

// Things to consider
// There is a max height
// This height shrinks when the window gets small
// only the header photo and profile photo shrink
// aspect ratio of 3 for the header photo 