import React, { useLayoutEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';
import { ProfilePhoto } from '..';
import { GifIcon, ImageIcon } from '../../Icons';
import { IconButton, Spacer } from '../../Styled/MiscellaneousStyled';
import SvgStyled from '../../Styled/SvgStyled';
import {
  AttachmentOptions,
  Container,
  Row,
  TweetBox,
  TweetButton,
  TweetInput,
  TweetLimit,
} from './styled';

const ICON_PADDING = '0.45rem';

export const ComposeTweet: React.FC<{}> = () => {
  const theme = useTheme();
  const [tweet, setTweet] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleTweetChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    setTweet(event.target.value);
  }

  useLayoutEffect(() => {
    if (textareaRef?.current != null) {
      textareaRef.current.style.height = '3rem';
      textareaRef.current.style.height = `${Math.max(
        textareaRef.current.scrollHeight,
        16
      )}px`;
    }
  }, [tweet]);

  return (
    <Container>
      <ProfilePhoto />
      <TweetBox>
        <TweetInput
          maxLength={300}
          ref={textareaRef}
          placeholder="What's happening?"
          onChange={handleTweetChange}
        />
        <Row>
          <AttachmentOptions>
            <IconButton padding={ICON_PADDING} hoverColor={theme.colors.accent}>
              <SvgStyled color={theme.colors.accent}>
                <ImageIcon />
              </SvgStyled>
            </IconButton>
            <IconButton padding={ICON_PADDING} hoverColor={theme.colors.accent}>
              <SvgStyled color={theme.colors.accent}>
                <GifIcon />
              </SvgStyled>
            </IconButton>
          </AttachmentOptions>
          <Spacer />
          {tweet.length > 200 && <TweetLimit>{tweet.length} / 300</TweetLimit>}
          <TweetButton disabled={tweet === ''}>Tweet</TweetButton>
        </Row>
      </TweetBox>
    </Container>
  );
};
