import SideBar from "../../components/sidebar/SideBar";
import MsgContainer from "../../components/messagecontainer/MsgContainer";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] 
    rounded-lg overflow-hidden bg-gray-400 bg-clip-padding 
    backdrop-filter backdrop-blur-lg bg-opacity-5 shadow-md">
      <SideBar /> 
      {/* TODO make the sidebar responsive using a button show and hide */}
      <MsgContainer />
    </div>
  )
}

export default Home;