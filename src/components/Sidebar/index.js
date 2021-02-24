import React from 'react'
import {SidebarContainer, SidebarLink, SidebarWrapper, SidebarMenu, Icon, CloseIcon} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
   return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
            <CloseIcon />
         </Icon>
         <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink to='about'>About</SidebarLink>
               <SidebarLink to='projects'>Projects</SidebarLink>
               <SidebarLink to='work experience'>Work Experience</SidebarLink>
               <SidebarLink to='contact'>Contact</SidebarLink>
            </SidebarMenu>
         </SidebarWrapper>
      </SidebarContainer>
   );
};

export default Sidebar
