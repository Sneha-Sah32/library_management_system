// import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const login = (token) => {
//     localStorage.setItem("token", token);
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     navigate("/");
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // ✅ restore login after refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (token && savedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // ✅ LOGIN
  const login = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));

    setIsLoggedIn(true);
    setUser(userData);
  };

  // ✅ LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setIsLoggedIn(false);
    setUser(null);

    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);