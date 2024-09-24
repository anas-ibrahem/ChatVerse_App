import { TbLogout2 } from "react-icons/tb";

interface LogOutButtonProps {
  loading: boolean;
}

const LogOutButton = ({ loading }: LogOutButtonProps) => {
  return (
    <div 
      className={`flex items-center m-auto cursor-pointer 
        ${loading ? 'text-gray-400' : 'hover:text-gray-200'}`}
      onClick={loading ? undefined : () => console.log("Logout clicked")} 
    >
      <TbLogout2 className={`w-6 h-6 ${loading ? 'text-gray-400' : ''}`} />
      <span className={`ml-2 ${loading ? 'text-gray-400' : ''}`}> 
        LogOut
      </span>
    </div>
  );
};

export default LogOutButton;
