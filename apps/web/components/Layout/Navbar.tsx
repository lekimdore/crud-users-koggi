import { Anchor, Breadcrumbs } from '@mantine/core';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  const capitalizeLinks = true;

  const mappedItems = pathNames.map((link, index) => {
    let href = `/${pathNames.slice(0, index + 1).join('/')}`;
    let itemLink = capitalizeLinks
      ? link[0].toUpperCase() + link.slice(1, link.length)
      : link;
    return (
      <Anchor href={href} key={index}>
        {itemLink}
      </Anchor>
    );
  });

  return (
    <>
      <Breadcrumbs separator=">" mt={'xs'}>
        {mappedItems}
      </Breadcrumbs>
    </>
  );
};

export default Navbar;
