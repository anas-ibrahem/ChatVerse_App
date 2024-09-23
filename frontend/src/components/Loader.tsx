function Loader({large = false}) {
  return (
        <div className="flex justify-center ">
             <span className={`loading loading-infinity mx-auto ${large ? `h-20 w-20` : `h-12 w-12` } `}/>
         </div>
  )
}

export default Loader
