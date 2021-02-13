import React, { useState, useEffect } from 'react';
import { Login } from './components/Auth/Login';
import { Home } from './components/Auth/Home';
function App(){
    const [sessionToken, setSessionToken] = useState('');

    useEffect(() => {
        if (localStorage.getItem('token')){
            setSessionToken(localStorage.getItem('token'));
        }
    }, [])

    const updateToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
    }

    const clearToken = () => {
      localStorage.clear();
      setSessionToken('');
    }

    const protectedViews = () => {
      return (sessionToken === localStorage.getItem('token') ? <Home logout={clearToken} token={sessionToken} />
      : <Login updateToken={updateToken} />)
    }
    return (
        <div>
            {protectedViews()}
        </div>
    )
}

export default App;
