import Messages from "./Messages.tsx";
import MessageInput from "./MessageInput";
import { GiAstronautHelmet } from "react-icons/gi";
import useChat from "../../zustand/useChat";
import { useAuthContext } from "../../context/AuthContext";

// TODO fix responsevity


const MsgContainer = () => {
  const {selectedChat} = useChat();

  return (
    <div className="md:min-w-[450px] flex flex-col sm:h-[450px] md:h-[550px] sm:max-h-full max-h-Custscreen ">
        {selectedChat ? (        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className="label-text">To</span>{" "}
              <span className="text-gray-800 font-bold">{selectedChat.fullname}</span>
          </div>
          
          <Messages/>
          <MessageInput/>

        </>): <WelcomePage />}
    </div>
  )
}

export default MsgContainer;



const WelcomePage = () => { 

const {authUser} = useAuthContext();

return (
  <div className="flex items-center justify-center w-full h-full">
    <div className = "px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex 
     flex-col items-center gap-2" >
      <h1>Welcome {authUser?.fullname} !</h1>
      <p>Start Exploring The ChatVerse</p> 
      {/* TODO color the Chat verse */}
      <p>Click on a chat to start messaging</p>
      <GiAstronautHelmet className="w-10 h-10 sm:w-40 sm:h-40" />
    </div>
  </div>
)

}
