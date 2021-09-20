import React from 'react';
import PropTypes from 'prop-types';

const Job = ({className, title, contactType, country, city}) => {
return (

    <div>
      <p>{className}</p>
      <p>{title}</p>
      <p>{contactType}</p>
      <p>{country}</p>
      <p>{city}</p>
    </div>

  );
}

Job.propTypes = {
    title: PropTypes.string.isRequired,
};



export default Job;
