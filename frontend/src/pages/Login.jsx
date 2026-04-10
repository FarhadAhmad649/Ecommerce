import React, { useContext, useEffect, useState } from 'react'
import NewsLetterBox from '../components/NewsLetterBox'
import { ShopContext } from '../context/ShopContext'
import {toast} from 'react-toastify'
import axios from 'axios'

function Login() {

  const [currentState, setCurrentState] = useState('Login')
  const {token, setToken, navigate, backendUrl} = useContext(ShopContext)

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    try {

      if(currentState === 'Sign Up'){

        const response = await axios.post(backendUrl + '/api/user/register', {name, email, password})

        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
          toast.success(response.data.message);

          setName('')
          setEmail('')
          setPassword('')

        }else{
          toast.error(response.data.message)
        }
      }else{
        const response = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success(response.data.message);

          setEmail("");
          setPassword("");
        } else {
          toast.error(response.data.message);
        }
      }
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center justify-center h-screen gap-6 mb-20"
      >
        <div className="flex gap-2 items-center">
          <h1 className="text-3xl prata-regular">
            {currentState === "Login" ? "Login" : "Sign Up"}
          </h1>
          <p className="w-8 h-[1.5px] bg-gray-600"></p>
        </div>

        <div className="flex flex-col gap-3 my-4 text-sm w-90">
          {currentState === "Login" ? (
            ""
          ) : (
            <input
              onChange={((e)=> setName(e.target.value))}
              value={name}
              className="border-[1.5px] border-gray-400 px-2 py-1"
              type="text"
              name="name"
              placeholder="Name"
            />
          )}

          <input
            onChange={((e)=> setEmail(e.target.value))}
            value={email}
            className="border-[1.5px] border-gray-400 px-2 py-1"
            type="text"
            name="email"
            placeholder="Email"
          />

          <input
            onChange={((e)=> setPassword(e.target.value))}
            value={password}
            className="border-[1.5px] border-gray-400 px-2 py-1"
            type="text"
            name="password"
            placeholder="Password"
          />

          <div className="">
            {currentState === "Login" ? (
              <div className="flex justify-between">
                <p>Doesn't have an account?</p>
                <p
                  onClick={() => setCurrentState("Sign Up")}
                  className="cursor-pointer underline"
                >
                  Click Here
                </p>
              </div>
            ) : (
              <div className="flex justify-between">
                <p>Already have an account?</p>
                <p
                  onClick={() => setCurrentState("Login")}
                  className="cursor-pointer underline"
                >
                  Login Here
                </p>
              </div>
            )}
          </div>
        </div>

        <div>
          <button type='submit' className="px-8 py-2 bg-black text-sm text-gray-100 hover:bg-gray-700 active:bg-black">
            {currentState === "Login" ? "Login" : "Sign Up"}
          </button>
        </div>
      </form>

      <NewsLetterBox />
    </div>
  );
}

export default Login