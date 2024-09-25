import Messages from "./Messages.tsx";
import MessageInput from "./MessageInput";
import { GiAstronautHelmet } from "react-icons/gi";
import useChat from "../../zustand/useChat";
import { useAuthContext } from "../../context/AuthContext";



const MsgContainer = () => {
  const { selectedChat } = useChat();

  return (
    <div className="flex flex-col h-full">
      {selectedChat ? (
        <>
          <div className="bg-slate-500 ml-12 px-4 py-2 mb-2 rounded-bl-xl">
            <span className="label-text">To</span>{" "}
            <span className="text-gray-800 font-bold">{selectedChat.fullname}</span>
          </div>

          <div className="flex-grow overflow-y-auto">
            <Messages />
          </div>

          <div className="flex-shrink-0">
            <MessageInput />
          </div>
        </>
      ) : (
        <WelcomePage />
      )}
    </div>
  );
};


export default MsgContainer;


const WelcomePage = () => { 
  const { authUser } = useAuthContext();

  return (
    <div className="flex items-center justify-center h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex 
      flex-col items-center gap-2">
        <h1>Welcome {authUser?.fullname} !</h1>
        <p>Start Exploring The <span className="text-blue-500 font-bold">
            <span className="text-purple-500">C</span>hatVerse
          </span>
        </p> 
        <p>Click on a chat to start messaging</p>
        <GiAstronautHelmet className="w-20 h-20 sm:w-40 sm:h-40" />
      </div>
    </div>
  );
};
