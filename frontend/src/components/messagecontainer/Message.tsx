// import {useState} from 'react'

// const [message, setMessage] = useState('');

function Message() {
  return (
        <div className="chat chat-end ">
        <div className="chat-image avatar">
        <div className="w-10 rounded-full ">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://avatar.iran.liara.run/public/boy?username=HoHo101" />
        </div>
        </div>
    <div className="chat-bubble bg-blue-600 text-white">Istroy the Sith, not join them.</div>
    <div className="chat-footer opacity-80">12:09</div>
</div>
  )
}

export default Message
