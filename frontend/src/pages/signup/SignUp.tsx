import React, { useEffect, useRef, useState } from 'react';
import useSignup from '../../hooks/useSignup';

const SignUp = () => {

  const [data, setData] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPass: "",
    gender: ""
  });

  const { loading, signup } = useSignup();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Refs for password and confirm password fields
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const setGender = (gender: "male" | "female") => {
    setData({ ...data, gender: gender });
  }

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    signup(data);
  }

  useEffect(() => {
    if (passwordInputRef.current) 
      passwordInputRef.current.focus();
  } , [showPassword]);

  useEffect(() => {
    if (confirmPasswordInputRef.current) 
      confirmPasswordInputRef.current.focus(); 
  } , [showConfirmPassword]);

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="p-3 text-3xl font-semibold text-center text-blue-100">
          Ready for
          <span className="text-blue-500 font-bold">
            <span className="text-purple-500"> C</span>hatVerse
          </span>
          <span> ?</span>
        </h1>
        <form onSubmit={handleSubmitForm}>

          {/* FullName Field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Name</span>
            </label>
            <input
              disabled={loading}
              onChange={(e) => setData({ ...data, fullname: e.target.value })}
              value={data.fullname} type="text"
              placeholder="Enter your name -> ex: Anas Ibrahem" className="w-full input input-bordered h-12" />
          </div>

          {/* UserName Field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              disabled={loading}
              onChange={(e) => setData({ ...data, username: e.target.value })}
              value={data.username} type="text"
              placeholder="Choose your username -> ex: anas-ibrahem" className="w-full input input-bordered h-12" />
          </div>

          {/* Password Field */}
          <div className="relative pb-1">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              ref={passwordInputRef} // Reference for the password field
              disabled={loading}
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              type={showPassword ? "text" : "password"}
              className="w-full input input-bordered h-12"
              placeholder="Choose your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="w-16 text-center absolute right-3 top-16 transform -translate-y-1/2 px-3 py-1 bg-slate-800
                rounded-md"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative pb-1">
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              ref={confirmPasswordInputRef} // Reference for the confirm password field
              disabled={loading}
              value={data.confirmPass}
              onChange={(e) => setData({ ...data, confirmPass: e.target.value })}
              type={showConfirmPassword ? "text" : "password"}
              className="w-full input input-bordered h-12"
              placeholder="Confirm your password"
            />

            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="w-16 text-center absolute right-3 top-16 transform -translate-y-1/2 px-3 py-1 bg-slate-800
                rounded-md"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Gender RadioButton */}
          <div className="pb-4">
            <label className="label p-2">
              <span className="text-base label-text">Gender</span>
            </label>
            <div className="pl-2 flex items-center space-x-4">
              <label className="flex items-center">
                <input
                  disabled={loading}
                  type="radio"
                  name="gender"
                  value="male"
                  className="radio radio-primary"
                  onChange={() => setGender("male")}
                />
                <span className="ml-2">Male</span>
              </label>

              <label className="flex items-center pl-3">
                <input
                  disabled={loading}
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={() => setGender("female")}
                  className="radio radio-secondary"
                />
                <span className="ml-2">Female</span>
              </label>
            </div>
          </div>

          {/* Login Link */}
          <a href="/login" className="text-sm text-center text-gray-500 hover:text-gray-400">
            Already a ChatVerser? Login!
          </a>

          {/* Submit Button */}
          <button type="submit" className="w-full btn btn-primary mt-4" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default SignUp;