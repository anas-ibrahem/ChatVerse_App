import { useAuthContext } from "../../context/AuthContext";
import  useChat  from "../../zustand/useChat";

function Message({message}: {message: Message}) {

  const {selectedChat}  = useChat();
  const {authUser} = useAuthContext();
  const fromMe = message.senderId === authUser?.id;
  const chatClass = fromMe ? "chat chat-end" : "chat chat-start";
  const chatImage = fromMe ? authUser.profilePic : selectedChat?.profilePic;

  return (
        <div className={`${chatClass}`}>
        <div className="chat-image avatar">
        <div className="w-10 rounded-full ">
      <img
        alt="Tailwind CSS chat bubble component"
        src={chatImage} />
        </div>
        </div>
    <div className="chat-bubble bg-blue-600 text-white">{message.text}</div>
    <div className="chat-footer opacity-80">{message.time}</div>
  </div>
  )
  
}

export default Message
