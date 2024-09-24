import Chat from './Chat';
import useGetChats from '../../hooks/useGetChats';
import Loader from '../Loader';

function Chats() {
  const { loading, chats } = useGetChats();

  return (
    <div className="px-1 flex-1 flex flex-col h-full scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent overflow-y-auto">
      {/* Render chats */}
      {chats.length > 0 ? (
        chats.map((chat) => (
          <Chat key={chat.id} chat={chat} />
        ))
      ) : (
        <div className="flex justify-center items-center h-full text-center">
          <p className="text-gray-500">No chats available.</p>
        </div>
      )}
      {/* Loader displayed while fetching chats */}
      {loading && (
        <div className="flex justify-center items-center h-16">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default Chats;
