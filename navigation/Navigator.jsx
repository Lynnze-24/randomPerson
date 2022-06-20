import React,{useState} from 'react'
import Dashboard from '../screens/Dashboard';
import Login from '../screens/Login';


const Navigator = ({mock=false}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(mock);
    const logout = ()=> setIsLoggedIn(false);
    const login = ()=> setIsLoggedIn(true);

    return (
       <>
       {isLoggedIn ?(<Dashboard logout={logout} />) 
                   : <Login login={login}/> }
       </>
    )
}

export default Navigator;
