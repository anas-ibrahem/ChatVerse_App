export default function Chat() {
  return (
    <div className="flex flex-col">
    <div className="flex gap-3 items-center hover:bg-sky-500  px-2 cursor-pointer rounded-2xl
    "> 
        <div className="avatar online py-1 "> 
            {/* TODO online and offline status */}
            <div className="w-14">
                <img src="https://avatar.iran.liara.run/public/boy?username=HoHo101" /> 
                {/* TODO user image */}
            </div>
        </div>

        <div className="flex flex-col flex-1">
            <div className="flex gap-3 justify-between">
                <p className="font-bold text-gray-200">Anas Hima</p> 
                {/*TODO user name */}
            </div>
        </div>
       </div>
            <div className="divider m-0 px-3"></div>
   </div>
  )
}
