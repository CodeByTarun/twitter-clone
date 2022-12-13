import React from 'react';
import styled, { css } from 'styled-components';
import { SecondaryText, Text } from '../../Styled/MiscellaneousStyled';

const UsernameContainer = styled.div<{ isRow: boolean; isHeader: boolean }>`
  ${(p) =>
    !p.isRow &&
    css`
      width: 100%;
    `}
  display: table;
  table-layout: fixed;
  flex-direction: ${(p) => (p.isRow ? 'row' : 'column')};

  ${Text} {
    ${(p) =>
      p.isRow &&
      css`
        display: table-cell;
      `}
    ${(p) =>
      p.isHeader &&
      css`
        font-size: 1.25rem;
      `}  
      ${(p) =>
      p.isHeader &&
      css`
        line-height: 1.6rem;
      `}  
      white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${SecondaryText} {
    padding-left: ${(p) => (p.isRow ? '0.5rem' : 0)};
    margin-top: ${(p) => (p.isRow ? 0 : '0.1rem')};
    ${(p) =>
      p.isHeader &&
      css`
        font-size: 0.8rem;
      `}
    ${(p) =>
      p.isHeader &&
      css`
        line-height: 1.1rem;
      `}
  } ;
`;

interface UsernameProps {
  isRow?: boolean;
  isHeader?: boolean;
  primaryText?: string;
  secondaryText: string;
}

export const Username: React.FC<UsernameProps> = ({
  isRow = true,
  isHeader = false,
  primaryText = '',
  secondaryText,
}) => {
  return (
    <UsernameContainer isRow={isRow} isHeader={isHeader}>
      <Text isBold={true}>
        {primaryText !== '' ? primaryText : 'CodeByTarun'}
      </Text>
      <SecondaryText isBold={false}>{secondaryText}</SecondaryText>
    </UsernameContainer>
  );
};
