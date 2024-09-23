import {useState} from 'react'
import useChat from '../zustand/useChat';
import {toast} from 'react-hot-toast';

function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const {selectedChat , setMessages , messages} = useChat();

    const sendMessage = async (body: string) => {
        if (!selectedChat) return;
        setLoading(true);

        try {
            const res = await fetch(`api/messages/send/${selectedChat.id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message: body})
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);

            setMessages([...messages, data]);

        } catch (error) {
            console.log(error);
            toast.error('Failed to Send Message');
        } finally {
            setLoading(false);
        }
    }

    return {loading, sendMessage};

}

export default useSendMessage
