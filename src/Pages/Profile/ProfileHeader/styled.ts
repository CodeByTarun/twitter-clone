import styled from "styled-components";
import { hexToRGB } from "../../../helpers/Converters";
import { Button, FlexContainer, HeaderText, SecondaryText, Text } from "../../../Shared/Styled/MiscellaneousStyled";

export const ProfileContainer = styled(FlexContainer)`
    padding: 0.75rem 1rem 1rem 1rem;

    ${HeaderText} {
        padding-bottom: 0.4rem;
    }
`;

export const DescriptionText = styled(Text)`
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`;

export const HeaderPhotoContainer = styled.div`
    display: flex;
    padding-bottom: 33%;
    background-color: ${p => p.theme.colors.border};
`

export const ProfileAndEditContainer = styled.div`
    display: flex;
    position: relative;
    background-color: red;
    justify-content: space-between;
`

export const EditProfileButton = styled(Button)`
    border-width: 1px;
    border-style: solid;
    border-color: ${p => p.theme.font.primary};
    color: ${p => p.theme.font.primary};
    background: ${p => p.theme.colors.background};
    justify-self: flex-end;

    :hover {
    background-color: ${(props) => hexToRGB(props.theme.colors.border, 0.4)};
    }
`

export const LocationAndLinksContainer = styled(FlexContainer)`
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 0.5rem;

    ${SecondaryText} {
        padding-right: 1rem;
    }
`

export const FollowContainer = styled(FlexContainer)`
    flex-direction: row;
    font-size: 0.875em;

    ${SecondaryText} {
        padding-right: 1rem;
    }
`

