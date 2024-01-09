import React from 'react';
import { useSearchParams } from 'react-router-dom';

import type { MenuProps } from 'antd';
import { Button, Col, Flex, Menu, Row } from 'antd';

import { appLogo } from '@/assets';
import { FilterActions } from '@/features';
import { useAppDispatch } from '@/hooks';

import { MenuItems } from './Container';
const Navbar = () => {
  const [current, setCurrent] = React.useState('home');
  const dispath = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'for-sale' || e.key === 'for-rent') {
      setCurrent(e.key);
      setSearchParams({ purpose: e.key });
      dispath(FilterActions.updateFilter({ name: 'purpose', value: e.key }));
      return;
    }
    setCurrent(e.key);
    setSearchParams();
    dispath(FilterActions.resetFilter());
  };

  return (
    <nav className="wrapper">
      <Row align="middle">
        <Col md={20}>
          <Flex gap={18} align="center">
            <img src={appLogo} alt="logo" />
            <Menu
              style={{ width: '100%' }}
              onClick={onClick}
              selectedKeys={[current]}
              mode="horizontal"
              items={MenuItems}
            />
          </Flex>
        </Col>
        <Col md={4}>
          <Flex justify="flex-end">
            <Button>Contact Us</Button>
          </Flex>
        </Col>
      </Row>
    </nav>
  );
};

export default Navbar;
