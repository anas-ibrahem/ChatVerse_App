import Chat from './Chat'
import useGetChats from '../../hooks/useGetChats'
import Loader from '../Loader';

function Chats() {

  const {loading, chats} = useGetChats();

  return (
    <div className="flex flex-col scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent overflow-y-scroll">
        {chats.map((chat) => (
            <Chat key={chat.id} chat={chat}/>
        ))}
        {loading && <Loader />} 
    </div>
  )
}

export default Chats
