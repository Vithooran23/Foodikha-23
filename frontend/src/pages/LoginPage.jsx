import React, { useEffect} from 'react'
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import Login from "../components/Login/Login";
// import SuggestedProduct from '../components/Products/SuggestedProduct';




const LoginPage = () => {
  // const navigate = useNavigate();
  // const { isAuthenticated } = useSelector((state) => state);

  // useEffect(() => {
  //   if(isAuthenticated === true){
  //     navigate("/");
  //   }
  // }, [])
  
  return (
    <div>
        <Login />
    </div>
  )
}

export default LoginPage;