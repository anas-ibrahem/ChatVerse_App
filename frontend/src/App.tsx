import { Navigate, Route , Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import { useAuthContext } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";

function App() {
  const {	authUser , setAuthUser , isLoading} = useAuthContext();
  console.log("AUTHED USER"  , authUser);  //TODO remove this line
  if (isLoading) {  
    return (
      <div className="flex justify-center items-center h-screen">
          <Loader large={true} />
      </div>
    )
  }
  
  return (
    <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />} />
          <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <SignUp />} />
          <Route path="/login" element={authUser ? <Navigate to={"/"} /> : <Login />} />
        </Routes>
        <Toaster />
    </div>
  );
}

export default App;
