import { BsSendFill } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

function MessageInput() {

  const {sendMessage} = useSendMessage();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    if (message === '') return;
    e.preventDefault();
    await sendMessage(message);
    setMessage('');
  }

  return (
    <form className = "px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type="text"
                   className="border text-sm rounded-lg block w-full p-2.5 
                  bg-gray-700 border-gray-600 text-white"
                    placeholder="Type a message.."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
            />
            {/* TODO make A loading spinner */}

        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
             <BsSendFill className="" />
		    </button>
        </div>
    </form>
  )
}

export default MessageInput
