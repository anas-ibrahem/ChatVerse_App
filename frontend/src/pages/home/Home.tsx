import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import MsgContainer from '../../components/messagecontainer/MsgContainer';
import { SidebarProvider, useSidebar } from '../../context/SidebarContext';
import { FaArrowRight } from "react-icons/fa";

import isMobile from 'is-mobile'; // Importing isMobile

const Home: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="relative flex
        sm:w-[1000px]
        md:w-3/4
        w-11/12
        h-3/4
        sm:h-[550px]
        rounded-lg overflow-hidden bg-gray-400 bg-clip-padding 
        backdrop-filter backdrop-blur-lg bg-opacity-5 shadow-md">
        
        <HomeContent />
      </div>
    </SidebarProvider>
  );
};

const HomeContent: React.FC = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  const isMobileScreen = isMobile();

  return (
    <>
      {/* Sidebar */}
      <div className={`${isCollapsed ? 'hidden' : 'block'} sm:w-[400px] w-[200px]`}>
        <SideBar />
      </div>

      {/* Toggle button */}
      <FaArrowRight
        onClick={toggleSidebar}
        className={`opacity-50 rotate-180 cursor-pointer absolute bottom-16 transition-all duration-300 z-10  rounded-full text-white sm:h-[35px] sm:w-[35px]
          h-[20px] w-[20px]
          ${isCollapsed ? 'rotate-0 left-4' : isMobileScreen ? 'left-[210px]' : 'left-[414px]'}`} 
      />

      {/* Message container */}
      <div className="flex-grow">
        <MsgContainer />
      </div>
    </>
  );
};

export default Home;
