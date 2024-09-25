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
        h-[90vh]
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
      <div className={`${isCollapsed ? 'hidden' : 'block'} sm:w-[400px] w-full`}>
        <SideBar />
      </div>

      {/* Toggle button */}
      <FaArrowRight
        onClick={toggleSidebar}
        className={`opacity-50 rotate-180 cursor-pointer absolute ms:top-1 top-2 transition-all duration-300 z-10 
          rounded-full text-white sm:h-[32px] sm:w-[32px]
          h-[20px] w-[20px]
          hover:opacity-100 hover:shadow-lg hover:scale-110 transition-all
          ${isCollapsed ? 'rotate-0 left-1' : isMobileScreen ? 'left-[78vw]' : 'left-[406px]'}`} 
      />


      {/* Message container */}
      <div className={`${!isCollapsed && isMobileScreen ? 'hidden' : 'block'} flex-grow`}>
        <MsgContainer />
      </div>
    </>
  );
};

export default Home;
