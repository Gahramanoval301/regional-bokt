import { ourServices } from '@/data/OurServices';
import React from 'react'
import ServiceCard from './ServiceCard';

const OurServices = () => {
  return (
    <div className="section-gap mt-12">
      <h3 className="section-title text-center">Xidmətlərimiz</h3>
      <div className="grid max-[450px]:grid-cols-1  grid-cols-2 gap-5 lg:grid-cols-4">
        {ourServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default OurServices