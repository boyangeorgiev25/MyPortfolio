import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'bx-code-alt',
      title: 'Web Development',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.'
    },
    {
      icon: 'bxs-paint',
      title: 'Graphic Design',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.'
    },
    {
      icon: 'bx-bar-chart-alt',
      title: 'Digital Marketing',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.'
    }
  ];

  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>

      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="services-box">
            <i className={`bx ${service.icon}`}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="btn">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;