import { MantineProvider } from '@mantine/core';
import React, { FC } from 'react';
import theme from '../theme';
import { StoreProvider } from '@shared/client-store';

interface Props {
  children: React.ReactNode;
}

const RootProvider: FC<Props> = ({ children }) => (
  <StoreProvider>
    <MantineProvider theme={theme}>{children}</MantineProvider>
  </StoreProvider>
);

export default RootProvider;
