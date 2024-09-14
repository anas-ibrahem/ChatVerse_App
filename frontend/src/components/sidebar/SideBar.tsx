import SearchBar from "./SearchBar";
import Chats from "./Chats";
import LogOutButton from "./LogOutButton";
import useLogout from "../../hooks/useLogout";

const SideBar = () => {
  const { logout, loading } = useLogout();

  return (
    <div className="p-4 border-r border-slate-500 flex flex-col sm:w-full w-52">
      <SearchBar />
      <div className="divider p-2 m-0"></div>
      <Chats />
      <button 
        className={`w-1 ${loading ? 'cursor-wait' : 'cursor-pointer'}`}
        onClick={logout}>
        <LogOutButton loading={loading} />
      </button>
    </div>
  );
};

export default SideBar;
