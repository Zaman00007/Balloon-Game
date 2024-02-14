import React, { useEffect, useState } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import Game from './Game'; 

const PrivateRoute = ({ path, exact }) => {
  const token = Cookies.get('token');
  const history = useHistory();
  const [admin, setAdmin] = useState(false);

  const verifyAdmin = async () => {
    try {
      const response = await fetch('http://localhost:8800/admin/checkAdmin', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        history.push('/Unauthorized');
      } else {
        setAdmin(true);
      }
    } catch (error) {
      console.error('Error verifying admin:', error);
      history.push('/Unauthorized');
    }
  };

  useEffect(() => {
    if (!token) {
      history.push('/Unauthorized');
    }
  })

  return token ? (
    <Route path={path} exact={exact}>
        <Game />
    </Route>
  ) : (
    <Redirect to="/Unauthorized" />
  );
};

export default PrivateRoute;
