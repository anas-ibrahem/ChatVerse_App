import Message from "./Message.tsx"
import useGetMessages from "../../hooks/useGetMessages.tsx";
import Loader from "../Loader.tsx"
import useListenMessages from "../../hooks/useListenMessages.tsx";
import React from "react";
import useChatScroll from "../../hooks/useChatScoll.tsx";

function Messages() {
  const { loading, messages } = useGetMessages();
  useListenMessages();

  const ref = useChatScroll(messages) as React.MutableRefObject<HTMLDivElement>;

  return (
    <div
      className="px-4 flex-1 h-full scrollbar-thin scrollbar-thumb-purple-200 
      scrollbar-track-transparent overflow-y-auto" 
      ref={ref}
    >
      {!loading && messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}

      {loading && (
        <div className="flex justify-center items-center h-full">
          <Loader />
        </div>
      )}

      {!loading && messages.length === 0 && (
        <div className="flex justify-center text-center items-center h-full">
          <p className="text-gray-500">Send a first message ✨</p>
        </div>
      )}
    </div>
  );
}



export default Messages;