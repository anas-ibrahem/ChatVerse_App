import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import useChat from "../../zustand/useChat";
import useGetChats from "../../hooks/useGetChats";

function SearchBar() {
  const [search, setSearch] = useState("");
  const { selectedChat } = useChat();
  const {chats} = useGetChats();

  const handleSearch = (e: React.FormEvent) => {
    
    if (!search) return;
    e.preventDefault();

    const filteredChats = chats.filter((chat) =>
      chat.fullname.toLowerCase().includes(search.toLowerCase())
    );
    
  }

  return (
    <form className="flex items-center gap-2 sm:w-full w-52" onSubmit={handleSearch}>
    <input
      type="text"
      placeholder="Search.."
      className="input input-bordered rounded-full sm:w-full w-32 "
      value={search}
      onChange={(e) => setSearch(e.target.value)}/>
      <button type="submit" className="btn btn-circle bg-sky-500 text-white ">
        <FaSearch className="w-4 h-4 outline-none" />
      </button>
    </form>
  )
}

export default SearchBar
