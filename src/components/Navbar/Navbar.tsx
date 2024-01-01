import { Link } from 'react-router-dom';

import { Button, Col, Flex, Row } from 'antd';

import { appLogo } from '@/assets';

const Navbar = () => {
  return (
    <nav className="wrapper">
      <Row align="middle">
        <Col md={20}>
          <Flex gap={72} align="center">
            <img src={appLogo} alt="logo" />
            <ul className="navbar-list">
              <li>
                <Link to={`contacts/1`}>Home</Link>
              </li>
              <li>
                <Link to={`contacts/2`}>Search In Offers</Link>
              </li>
              <li>
                <Link to={`contacts/2`}>About Us</Link>
              </li>
              <li>
                <Link to={`contacts/2`}>Our Team</Link>
              </li>
            </ul>
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
