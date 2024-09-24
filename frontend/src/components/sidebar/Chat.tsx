import useChat from "../../zustand/useChat";
import { useSocketContext } from "../../context/SocketContext";
import isMobile from "is-mobile";

export default function Chat({ chat }: { chat: Chat }) {
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(chat.id);

  const { setSelectedChat, selectedChat } = useChat();
  let isSelected = selectedChat?.id === chat.id;

  return (
    <div className="flex flex-col">
      <div
        className={`flex gap-3 items-center px-2 mr-4 cursor-pointer rounded-2xl ${
          isSelected ? 'bg-sky-700' : `hover:bg-slate-500`
        }`}
        onClick={() => setSelectedChat(chat)}
      >
        <div className={`avatar py-1 ${isOnline ? 'online' : 'offline'}`}>
          <div className={`${isMobile() ? 'w-10' : 'w-14'}`}>
            <img src={chat.profilePic} alt={`${chat.fullname}'s profile`} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p
              className={`font-semibold text-gray-200 ${
                isMobile() ? 'text-sm' : 'text-base'
              }`}
              style={{ 
                overflowWrap: 'break-word', 
                whiteSpace: 'normal',
                wordBreak: 'break-all', // Force word breaking
              }}
            >
              {chat.fullname}
            </p>
          </div>
        </div>
      </div>
      <div className="divider m-0 px-3"></div>
    </div>
  );
}
