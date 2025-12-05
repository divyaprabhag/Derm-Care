// // src/context/AuthContext.jsx
// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token') || null);

//   useEffect(() => {
//     if (token) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       // try to fetch current user
//       axios.get('http://localhost:5000/api/auth/me')
//         .then(res => setUser(res.data.user))
//         .catch(() => {
//           localStorage.removeItem('token');
//           delete axios.defaults.headers.common['Authorization'];
//           setToken(null);
//           setUser(null);
//         });
//     } else {
//       delete axios.defaults.headers.common['Authorization'];
//       setUser(null);
//     }
//   }, [token]);

//   const login = (tokenValue, userObj) => {
//     localStorage.setItem('token', tokenValue);
//     axios.defaults.headers.common['Authorization'] = `Bearer ${tokenValue}`;
//     setToken(tokenValue);
//     setUser(userObj || null);
//   };

//   const logout = () => {
//     localStorage.removeItem('token');
//     delete axios.defaults.headers.common['Authorization'];
//     setToken(null);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, token, login, logout, isAuthenticated: !!token }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };





// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // fetch current user from backend
      axios.get('http://localhost:5000/api/auth/me')
        .then(res => {
          setUser(res.data.user);
          localStorage.setItem('user', JSON.stringify(res.data.user));
        })
        .catch(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          delete axios.defaults.headers.common['Authorization'];
          setToken(null);
          setUser(null);
        });
    } else {
      delete axios.defaults.headers.common['Authorization'];
      setUser(null);
      localStorage.removeItem('user');
    }
  }, [token]);

  const login = (tokenValue, userObj) => {
    localStorage.setItem('token', tokenValue);
    localStorage.setItem('user', JSON.stringify(userObj));
    axios.defaults.headers.common['Authorization'] = `Bearer ${tokenValue}`;
    setToken(tokenValue);
    setUser(userObj || null);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated: !!user,
        isAdmin: user?.role === 'admin', // helper to quickly check admin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
