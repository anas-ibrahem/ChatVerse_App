import SearchBar from "./SearchBar"
import Chats from "./Chats"
import LogOutButton from "./LogOutButton"

const SideBar = () => {
  return (
    <div className="p-4 border-r border-slate-500 flex flex-col sm:w-full w-52 ">
         <SearchBar />
         <div className="divider p-2 m-0"></div>
         <Chats />
         <LogOutButton/>
    </div>
  )
}

export default SideBar
