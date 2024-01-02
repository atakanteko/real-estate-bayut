import React from 'react';
import { FaBath, FaBed } from 'react-icons/fa';
import { IoGridSharp } from 'react-icons/io5';
import { MdOutlineVerified } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Avatar, Card, Divider, Flex, Typography } from 'antd';

import millify from 'millify';

import { offersExampleImg } from '@/assets';
import { PropertyItemType } from '@/types/properties';
type PropertyItem = {
  propertyFeatures: PropertyItemType;
};

const PropertyItem = ({ propertyFeatures }: PropertyItem) => {
  console.log(propertyFeatures.externalID);
  return (
    <Link to={`${propertyFeatures.externalID}`} relative="route">
      <Card
        hoverable
        cover={
          <img
            alt="example"
            src={
              propertyFeatures.coverPhoto
                ? propertyFeatures.coverPhoto.url
                : offersExampleImg
            }
          />
        }
        className="offer-list-card-item"
      >
        <Flex vertical gap={5}>
          <Flex gap={4} align="center" justify="space-between">
            <Flex gap={4} align="center">
              {propertyFeatures.isVerified && (
                <Avatar
                  size="small"
                  icon={<MdOutlineVerified />}
                  style={{
                    backgroundColor: '#3de594',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                />
              )}
              <Typography.Text>
                <b>AED </b>
                {millify(propertyFeatures.price)}/
                {`${
                  propertyFeatures.rentFrequency &&
                  propertyFeatures.rentFrequency
                }`}
              </Typography.Text>
            </Flex>
            <Flex gap={4}>
              <Avatar size="small" src={propertyFeatures.agency?.logo?.url} />
            </Flex>
          </Flex>
          <Flex align="center" gap={10} style={{ color: '#57aff2' }}>
            <Flex align="center" gap={4}>
              <Typography.Text>{propertyFeatures.rooms}</Typography.Text>
              <FaBed />
            </Flex>
            <Divider type="vertical" style={{ backgroundColor: '#111' }} />
            <Flex align="center" gap={4}>
              <Typography.Text>{propertyFeatures.baths}</Typography.Text>
              <FaBath />
            </Flex>
            <Divider type="vertical" style={{ backgroundColor: '#111' }} />

            <Flex align="center" gap={4}>
              <Typography.Text>
                {millify(propertyFeatures.area)} sqft
              </Typography.Text>
              <IoGridSharp />
            </Flex>
          </Flex>
          <Typography.Title level={5}>
            {propertyFeatures.title.length > 30
              ? `${propertyFeatures.title.substring(0, 30)}...`
              : propertyFeatures.title}
          </Typography.Title>
        </Flex>
      </Card>
    </Link>
  );
};

export default PropertyItem;
