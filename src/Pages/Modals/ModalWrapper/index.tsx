import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 100;
  top: 0;
  left: 0;
`;

interface ModalWrapperProps {
  children?: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children }) => {
  
  const navigate = useNavigate();
  const goBack = useCallback(() => navigate(-1), []);

  return <ModalBackground onClick={goBack}>{children}</ModalBackground>;
};

export default ModalWrapper;
