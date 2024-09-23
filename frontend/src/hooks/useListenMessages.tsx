import {useEffect} from 'react';
import {useSocketContext} from '../context/SocketContext';
import useChat from '../zustand/useChat';

export default function useListenMessages() {

    const {socket} = useSocketContext();
    const {messages , setMessages} = useChat();

    useEffect(() => {
        socket?.on('newMessage', (message) => {
            setMessages([...messages, message]);
        });
    }, [socket, messages, setMessages]);


};