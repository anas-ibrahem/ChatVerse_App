import { FaSearch } from "react-icons/fa";


function SearchBar() {
  return (
    <form className="flex items-center gap-2 sm:w-full w-52">
    <input
      type="text"
      placeholder="Search.."
      className="input input-bordered rounded-full sm:w-full w-32 ">
      </input>
      <button type="submit" className="btn btn-circle bg-sky-500 text-white ">
        <FaSearch className="w-4 h-4 outline-none" />
      </button>
    </form>
  )
}

export default SearchBar
