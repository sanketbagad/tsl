import React from 'react';
import { Breadcrumbs, Link as MuiLink, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/system';

const CustomLink = styled(MuiLink)(({ theme }) => ({
  fontSize: '1.4rem',
  color: '#605E5C',
  '&[aria-current="page"]': {
    color: 'red',
  },
}));

const BreadCrumb = ({ items }) => {
  const location = useLocation();

  const handleClick = (item) => {
    console.log(`Clicked on ${item.text}`);
  };

  const breadcrumbItems = items.map((item) => {
    const isCurrentItem = item.href === location.pathname;
    return (
      <CustomLink
        key={item.href}
        color="inherit"
        to={item.href}
        component={Link}
        onClick={() => handleClick(item)}
        aria-current={isCurrentItem ? 'page' : undefined}
      >
        {item.text}
      </CustomLink>
    );
  });

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbItems}
    </Breadcrumbs>
  );
};

export default BreadCrumb;