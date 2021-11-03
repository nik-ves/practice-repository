import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false, // default value
});

export default AuthContext;
