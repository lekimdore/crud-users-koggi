import { AppShell, Burger, Flex, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FC } from 'react';

import Icon from '../atoms/icon';
import EletcolLogo from '../icons/EletcolLogo/WhiteLogo';
import Sidebar from './Sidebar/NavLinks';
import Navbar from './Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 65 }}
      navbar={{ width: 180, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header
        style={{
          backgroundColor: '#124191',
        }}
      >
        <Flex align="center" gap={'50px'} mt={15}>
          <Flex justify="start" align="center" gap={'md'}>
            <Burger
              opened={opened}
              onClick={toggle}
              size="md"
              ml={10}
              color="#fff"
            />
            <Title order={2} style={{ color: '#fff' }}>
              Koggi App
            </Title>
          </Flex>
        </Flex>
      </AppShell.Header>

      <AppShell.Navbar p="md" style={{ backgroundColor: '#124191' }}>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default Layout;
