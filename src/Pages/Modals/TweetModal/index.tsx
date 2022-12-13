import React from 'react';
import { ComposeTweet } from '../../../Shared/Components';
import ModalWrapper from '../ModalWrapper';

const TwitterModal: React.FC<{}> = () => {
  return (
    <ModalWrapper>
      <ComposeTweet/>
    </ModalWrapper>
  );
};

export default TwitterModal;
