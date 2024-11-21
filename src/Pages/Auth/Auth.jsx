import React, { useState,useContext } from 'react'
import Classes from './signUp.module.css'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import {auth} from '../../Utility/firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";
import {DataContext} from '../../Components/DataProvider/DataProvider'
import {Type} from "../../Utility/action.type"
import {ClipLoader} from 'react-spinners'

const Auth = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [loading, setLoading] = useState({
  signIn:false
,
signUp:false
})


const [{user}, dispatch] = useContext(DataContext)
const navigate = useNavigate();
const navStateData =useLocation();

// console.log(user);

const autHandler = async(e)=>{
e.preventDefault();
console.log(e.target.name);
if(e.target.name == "signin"){
//firebase auth
setLoading({...loading, signIn:true})
signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
  dispatch({
    type: Type.SET_USER,
    user:userInfo.user
  });
  setLoading({...loading, signIn:false})
  navigate(navStateData?.state?.redirect)
}).catch((err)=>{
  setError(err.message)
  setLoading({ ...loading, signIn: false });
})


}else{
  setLoading({ ...loading, signIn: true });
createUserWithEmailAndPassword(auth, email, password).then((userInfo)=>{
  setLoading({...loading, signIn:true})
    dispatch({
      type: Type.SET_USER,
      user: userInfo.user,
    });
    setLoading({ ...loading, signIn: false });
      navigate(navStateData?.state?.redirect);
}).catch((err)=>{
 setError(err.message);
 setLoading({ ...loading, signIn: false });
})
}

};
// console.log(password,email);



  return (
    <section className={Classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvruxfWml4A5uuAmnZrGMorEcgSw8NPjWvKA&s"
          alt="amazon logo"
        />
      </Link>

      {/* form */}
      <div className={Classes.login__container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding:"5px",
              textAlign:"center",
              color:"red",
              fontWeight:"bold",
            }}
            >
              {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={autHandler}
            name="signin"
            className={Classes.login__signInBottun}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              "Sign in"
            )}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to the Amazone Fake Clone Conditions of Use &
          sale. Please see our privacy Notice, our Cookies Notice and our
          interest-Based Ads Notice.
        </p>
        {/* create account btn */}
        <button
          type="submit"
          name="signup"
          onClick={autHandler}
          className={Classes.login__registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddinTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;
