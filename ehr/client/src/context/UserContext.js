import { createContext, useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Routes
} from 'react-router-dom';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');
    const [isAuth, setIsAuth] = useState('');
    const [isAdmin, setIsAdmin] = useState('');
    const [roles, setRoles] = useState('');
    const [error, setError] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [userID, setUserID] = useState('');
    const [user, setUser] = useState({
      id: 0,
      fName: "",
      lName: "",
      email: "",
      roles: 0
    })

    const [login, setLogin] = useState({
      email: '',
      password: ''
    })

    useEffect(() => {
      checkLogin();
    }, []);

    const checkLogin = () => {
      let isAuth = sessionStorage.getItem("accessToken");
      let user = JSON.parse(sessionStorage.getItem("user"));
      if(isAuth){
          setUser({...user, [user.name]: user.value });
          setIsAuth("true");
          setRoles(user.roles);
      };
  }; 
    return (
        <UserContext.Provider value={{
            user, setUser,
            currentUser, setCurrentUser,
            error, setError,
            errorMsg, setErrorMsg,
            login, setLogin,
            roles, setRoles,
            isAuth, setIsAuth,
            isAdmin, setIsAdmin,
            userID, setUserID
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;