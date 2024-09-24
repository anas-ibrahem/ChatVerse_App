import { useAuthContext } from "../../context/AuthContext";
import useChat from "../../zustand/useChat";
import { useSidebar } from "../../context/SidebarContext";
import isMobile from 'is-mobile';

function Message({ message }: { message: Message }) {
  const { selectedChat } = useChat();
  const { authUser } = useAuthContext();
  const fromMe = message.senderId === authUser?.id;
  const chatClass = fromMe ? "chat chat-end" : "chat chat-start";
  const chatImage = fromMe ? authUser.profilePic : selectedChat?.profilePic;
  const { isCollapsed } = useSidebar();

  return (
    <div className={`chat ${chatClass}`}>
      <div className="chat-image avatar">
        <div className="w-5 sm:w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={chatImage} />
        </div>
      </div>

      <div
        className={`chat-bubble text-white text-sm sm:text-base
        ${fromMe ? 'bg-blue-800' : 'bg-slate-800'}
        `}
        style={{ maxWidth: '75%', overflowWrap: 'break-word', wordBreak: 'break-word' }}
      >
        {!isCollapsed && isMobile() ? '..' : message.text}
      </div>

      <div className="chat-footer opacity-80">
        {!isCollapsed && isMobile() ? ".." : message.time}
      </div>
    </div>
  );
}

export default Message;
