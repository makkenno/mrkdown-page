import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'mrkdwn converter',
  description: 'markdown to mrkdwn',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="/mochi.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
