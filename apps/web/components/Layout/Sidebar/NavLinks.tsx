import { NavLink } from '@mantine/core';
import React from 'react';

const Sidebar = () => {
  return (
    <>
      <NavLink
        variant="subtle"
        label="Integración"
        active
        color="#fff"
        fw={600}
      />
      <NavLink variant="subtle" label="On Air" active color="#fff" fw={600} />
    </>
  );
};

export default Sidebar;
