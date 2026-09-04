import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { servicePageBySlug } from '../../data/servicePages';
import ServicePage from '../../components/ServicePage/ServicePage';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicePageBySlug[slug];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return <ServicePage key={slug} data={service} />;
};

export default ServiceDetail;
