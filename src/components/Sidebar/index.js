import React from "react";
// import Navbar from "../Navbar"
// import Sidebar from "../Sidebar"
import {SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarLink, SidebarMenu, SidebarRoute} from "./SidebarElements"

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            {/* <Navbar /> */}
            {/* <Sidebar /> */}
            <Icon isOpen={isOpen} onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Sardine Bread</SidebarLink>
                <SidebarLink to="/">Coconut Bread</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar;