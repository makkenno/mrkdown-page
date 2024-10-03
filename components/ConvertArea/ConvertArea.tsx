'use client';

import { ChangeEvent, FC, useCallback, useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';
import { ActionIcon, Flex, Textarea } from '@mantine/core';
import classes from './Textarea.module.css';

const slackifyMarkdown = require('slackify-markdown');

const useConvertMrkdwn = () => {
  const [state, setState] = useState({ markdown: '', mrkdwn: '' });
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setState({ ...state, markdown: e.currentTarget.value });
    },
    [state, setState]
  );
  const handleClick = useCallback(() => {
    const mrkdwn = slackifyMarkdown(state.markdown);
    setState({ ...state, mrkdwn });
  }, [state, setState]);
  return { markdownText: state.markdown, mrkdwn: state.mrkdwn, handleChange, handleClick };
};

export const ConvertArea: FC = () => {
  const { markdownText, mrkdwn, handleChange, handleClick } = useConvertMrkdwn();
  return (
    <Flex gap="md" flex={1}>
      <Textarea
        classNames={{
          input: classes.input,
          root: classes.root,
        }}
        resize="vertical"
        value={markdownText}
        onChange={handleChange}
      />
      <Flex align={'center'}>
        <ActionIcon onClick={handleClick}>
          <IconArrowRight />
        </ActionIcon>
      </Flex>
      <Textarea
        classNames={{
          input: classes.input,
          root: classes.root,
        }}
        value={mrkdwn}
      />
    </Flex>
  );
};
