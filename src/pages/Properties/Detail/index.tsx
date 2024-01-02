import React from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetail = () => {
  const { id } = useParams();
  return <div>PropertyDetail:{id}</div>;
};

export default PropertyDetail;
