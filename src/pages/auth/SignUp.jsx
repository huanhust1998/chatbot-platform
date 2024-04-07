import { useState } from "react";
import { logo } from "../../assets/images";

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

export default function SignUp (){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigateTo = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập tại đây

        
    // Xử lý đăng nhập tại đây

    console.log(email)

    axios.post('http://localhost:3000/auth/login', {
      email: email,
      password: password
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Custom-Header': 'value'
      }
    })
    .then((response) => {
      // Xử lý response từ server
      console.log(response.data);
      navigateTo('/home');
    })
    .catch((error) => {
      // Xử lý lỗi
      console.error(error);
    });
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md px-10 rounded-2xl hover:shadow-2xl duration-300 w-[500px] h-[500px] flex justify-center items-center flex-col"
      >
        <div className="flex items-center justify-center gap-1 mb-10">
          <img src={logo} alt="logo" width={40} />
          <h1 className="text-16 font-bold">SignUp-Chatbot</h1>
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-6 w-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-between w-full">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

