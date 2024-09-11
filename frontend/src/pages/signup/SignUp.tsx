import { useState } from 'react';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

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
        <form>
    

          {/* FullName Field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Name</span>
            </label>
            <input type="text" placeholder="Enter your name -> ex: Anas Ibrahem" className="w-full input input-bordered h-12" />
          </div>

          {/* UserName Field */}
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input type="text" placeholder="Choose your username -> ex: anas-ibrahem" className="w-full input input-bordered h-12" />
          </div>


          {/* Password Field */}
          <div className="relative pb-1">
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full input input-bordered h-12"
              placeholder="Choose your password"
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


          {/* Confirm Password Field */}
          <div className="relative pb-1">
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full input input-bordered h-12"
              placeholder="Confirm your password"
            />

            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
             className=" w-16 text-center absolute right-3 top-16 transform -translate-y-1/2 px-3 py-1 bg-slate-800
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
                  type="radio"
                  name="gender"
                  value="male"
                  // checked={gender === "male"}
                  // onChange={handleGenderChange}
                  className="radio radio-primary "
                />
                <span className="ml-2">Male</span>
              </label>


              <label className="flex items-center pl-3">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  // checked={gender === "female"}
                  // onChange={handleGenderChange}
                  className="radio radio-secondary"
                />
                <span className="ml-2">Female</span>
              </label>


        </div>
      </div>

          {/* Login Link */}
          <a href="/login" className="text-sm text-center text-gray-500 hover:text-gray-400">
            Already a ChatVerser ? Login !
            </a>


          {/* Submit Button */}
          <button type="submit" className="w-full btn btn-primary mt-4">
            Submit
          </button>



        </form>
      </div>
    </div>
  );
};

export default SignUp;