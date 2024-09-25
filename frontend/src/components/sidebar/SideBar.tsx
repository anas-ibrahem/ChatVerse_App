import SearchBar from "./SearchBar";
import Chats from "./Chats";
import LogOutButton from "./LogOutButton";
import useLogout from "../../hooks/useLogout";

const SideBar = () => {
  const { logout, loading } = useLogout();

  return (
    <div className={`p-4 border-r border-slate-500 flex flex-col h-full`}> 
       <SearchBar />
      <div className="divider p-2 m-0"></div>
      <div className="flex-grow overflow-y-auto"> 
        <Chats />
      </div>

      <button 
        className={`flex items-center justify-center mt-2 ${loading ? 'cursor-wait' : 'cursor-pointer'}`} 
        onClick={logout}
      >
        <LogOutButton loading={loading} />
      </button>
    </div>
  );
};

export default SideBar;
