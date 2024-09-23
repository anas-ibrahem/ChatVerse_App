import { useState , useEffect} from "react";
import toast from "react-hot-toast";

function useGetChats() {
    const [loading , setLoading] = useState(false);
    const [chats , setChats] = useState<Chat[]>([]);

    useEffect(() => {
        // TODO for now it gets it's friend but it sould be dtied if theres like group chats
        const fetchChats = async () => {
            setLoading(true);
            try {
                const res = await fetch("api/messages/friends");
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.message);
                }
                setChats(data);
            } catch (error: any) {
                console.error(error);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }

        };

        fetchChats();

    }, []);

    return {loading , chats};
}

export default useGetChats;
