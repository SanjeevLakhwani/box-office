import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
const Show = () => {
  const params = useParams();
  console.log(params);
  return <div>This is show page</div>;
};

export default Show;
