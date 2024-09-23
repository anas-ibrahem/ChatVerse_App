import useChat from "../../zustand/useChat";
import { useSocketContext } from "../../context/SocketContext";

export default function Chat({chat}: {chat: Chat}) {

    

    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(chat.id);

    const {setSelectedChat , selectedChat} = useChat();
    let isSelected = selectedChat?.id === chat.id;

    return (
    <div className="flex flex-col">
    <div className={`flex gap-3 items-center  px-2 cursor-pointer rounded-2xl
        ${isSelected  ? 'bg-sky-700' :  `hover:bg-slate-500`}
    `}
        // TODO add Animation on Selecting Chat Consider Gradient
        onClick={() => setSelectedChat(chat)}
    > 
        <div className={`avatar py-1 ${isOnline ? 'online' : 'offline'}`}> 
            <div className="w-14">
                <img src= {chat.profilePic} />
            </div>
        </div>

        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">{chat.fullname}</p> 
            </div>
        </div>
       </div>
            <div className="divider m-0 px-3"></div>
   </div>
  )
}
