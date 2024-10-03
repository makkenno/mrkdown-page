'use client';

import { FC } from 'react';
import { AppShell } from '@mantine/core';

export const Template: FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <AppShell padding="md">
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
