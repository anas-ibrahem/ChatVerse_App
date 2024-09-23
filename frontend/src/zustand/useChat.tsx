import {create} from 'zustand';


interface ChatState {
    selectedChat: Chat | null;
    setSelectedChat: (chat: (Chat | null)) => void;
    messages: Message[];
    setMessages: (messages: Message[]) => void;
}

const useChat = create<ChatState>
((set) => ({
    selectedChat: null,
    setSelectedChat: (chat) => set({ selectedChat: chat }),
    messages : [],
    setMessages: (messages) => set({ messages : messages }),

}));

export default useChat;