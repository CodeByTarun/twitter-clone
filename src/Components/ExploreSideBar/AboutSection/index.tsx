import React from 'react';
import styled from 'styled-components';
import { SmallText } from '../../../Shared/Styled/MiscellaneousStyled';

const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1rem;

  ${SmallText}:nth-child(-n+6) {
    :hover {
      text-decoration: underline;
    }
  }

  ${SmallText} {
    padding-right: 0.75rem;
    padding-bottom: 0.25rem;
    user-select: none;
  }
`;

export const AboutSection: React.FC<{}> = () => {
  return (
    <AboutContainer>
      {AboutItems.map((item) => (
        <SmallText key={item}>{item}</SmallText>
      ))}
      <SmallText>© 2022 Twitter, Inc.</SmallText>
    </AboutContainer>
  );
};

const AboutItems = [
  'Terms of Service',
  'Privacy Policy',
  'Cookie Policy',
  'Accessibility',
  'Ads info',
  'More',
];
