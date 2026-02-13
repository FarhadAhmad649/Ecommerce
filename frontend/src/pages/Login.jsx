import React, { useState } from 'react'

function Login() {

  const [currentState, setCurrentState] = useState('Login')

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center justify-center h-screen gap-6">
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
            className="border-[1.5px] border-gray-400 px-2 py-1"
            type="text"
            name="name"
            placeholder="Name"
          />
        )}

        <input
          className="border-[1.5px] border-gray-400 px-2 py-1"
          type="text"
          name="email"
          placeholder="Email"
        />

        <input
          className="border-[1.5px] border-gray-400 px-2 py-1"
          type="text"
          name="password"
          placeholder="Password"
        />

        <div className="">
          {currentState === "Login" ? (
            <div className="flex justify-between">
              <p>Forgot your password?</p>
              <p
                onClick={() => setCurrentState("Sign UP")}
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
        <button className="px-8 py-2 bg-black text-sm text-gray-100 hover:bg-gray-700 active:bg-black">
          {currentState === "Login" ? "Login" : "Sign Up"}
        </button>
      </div>
    </form>
  );
}

export default Login