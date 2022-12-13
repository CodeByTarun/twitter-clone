import React, { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { hexToRGB } from '../../../helpers/Converters';
import { CloseIcon } from '../../../Shared/Icons';
import { IconButton } from '../../../Shared/Styled/MiscellaneousStyled';
import SvgStyled from '../../../Shared/Styled/SvgStyled';

const ModalBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background-color: ${p => hexToRGB(p.theme.colors.modalBackground, 0.4)};
  z-index: 100;
  top: 0;
  left: 0;
`;

const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${p => p.theme.colors.background};
    min-width: 600px;
    max-height: min(90vh, 20rem);
    max-width: 80vw;
    position: relative;
    top: 5%;
    border-radius: ${p => p.theme.borderRadius};
    padding: 0.2rem;
`

const CloseButton = styled.div`
    height: 2rem;
    width: 100%;
    display: flex;
    margin: 0.5rem;
`

interface ModalWrapperProps {
  children?: React.ReactNode;
}

// TODO: modal container should scroll if height of window is too small

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children }) => {
  
    const theme = useTheme();
    const backgroundRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate();
  const goBack: React.MouseEventHandler<HTMLDivElement> = useCallback((e) =>  {
    console.log(e.target);
    if (e.target === backgroundRef.current) navigate(-1);
  }, []);


  return ( 
    <ModalBackground ref={backgroundRef} onClick={(e) => goBack(e)}>
        <ModalContainer>
            <CloseButton>
                <IconButton hoverColor={theme.font.primary} padding={'0.4rem'}>
                    <SvgStyled color={theme.font.secondary}>
                        <CloseIcon/>
                    </SvgStyled>
                </IconButton>
            </CloseButton>
            {children}
        </ModalContainer>
    </ModalBackground>
  )
};

export default ModalWrapper;
