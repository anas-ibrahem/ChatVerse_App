import { useEffect, useState } from 'react';
import useChat from '../zustand/useChat';
import toast from 'react-hot-toast';

function useGetMessages() {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedChat} = useChat();

    const getMessages = async () => {
        if (!selectedChat) return;
        setLoading(true);
        setMessages([]);

        try {
            const res = await fetch(`/api/messages/${selectedChat.id}`);
            const data = await res.json();
            if (res.ok) 
                setMessages(data);
            else
                throw new Error(data.message);

            }
            catch (error) {
                console.log(error);
                toast.error('Failed to Read Messages');
            }
            finally {
                setLoading(false);
            }
    }


    useEffect(() => {
        getMessages();
    }, [selectedChat]);
  

    return { loading, messages};
}

export default useGetMessages
