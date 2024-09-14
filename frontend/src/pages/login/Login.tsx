import { useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [data , setData] = useState({
    username : "",
    password : "",
  });

  const {loading , login} = useLogin();

  const handleLoginForm =  (e:React.FormEvent) => {
    e.preventDefault();
    login(data);
  }


  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="p-3 text-3xl font-semibold text-center text-blue-100">
          Hello 
          <span className="text-blue-500 font-bold">
            <span className="text-purple-500"> C</span>hatVerser
          </span>
          <span> !</span>
        </h1>
        <form onSubmit={handleLoginForm}>
    

          {/* UserName Field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
            disabled = {loading}
            onChange={(e) => setData({...data , username : e.target.value})}
            value={data.username} 
            type="text" placeholder="Enter your username -> ex: anas-ibrahem" className="w-full input input-bordered h-12" />
          </div>


          {/* Password Field */}
          <div className="relative pb-1">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              disabled = {loading}
              onChange={(e) => setData({...data , password : e.target.value})}
              value={data.password}
              type={showPassword ? "text" : "password"}
              className="w-full input input-bordered h-12"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className=" w-16 text-center absolute right-3 top-16 transform -translate-y-1/2 px-3 py-1 bg-slate-800
                rounded-md"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* SignUp Link */}
          <a href="/signup" className="text-sm text-center text-gray-500 hover:text-gray-400">
           New to ChatVerse ? Sign Up !
            </a>

          {/* Submit Button */}
          <button type="submit" className="w-full btn btn-primary mt-4" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>



        </form>
      </div>
    </div>
  );
};

export default Login;
