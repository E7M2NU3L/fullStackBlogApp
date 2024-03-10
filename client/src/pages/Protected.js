import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CircularWithValueLabel from './Spinner';

const Protected = ({children, authentication = true}) => {
  const authStatus = useSelector((state) => state.auth.status)

  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  
  useEffect(() => {
    if (authentication && authStatus !== authentication){
      navigate('/api/v1/users/login');
    }
    else if (!authentication && authStatus !== authentication){
      navigate('/');
    }
    setLoader(false);
  }, [authStatus, navigate, authentication])
  return loader ? 
    <CircularWithValueLabel /> : <>
    {children}
  </>
}

export default Protected;