import { TbLogout2 } from "react-icons/tb";

interface LogOutButtonProps {
  loading: boolean;
}

const LogOutButton = ({ loading }: LogOutButtonProps) => {
  return (
    <div className="mt-auto">
      <TbLogout2
        className={`w-6 h-6 text-white ${loading ? 'text-gray-400' : ' cursor-pointer hover:text-gray-400'}`}
      />
    </div>
  );
};

export default LogOutButton;
