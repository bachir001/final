
import React from 'react';
import styles from './sidebar.module.css';

import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

function Navbardash() {
    return (
        <div
            className={styles.sidebar}
        >
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a
                        href="/"
                        className="text-decoration-none"
                        style={{ color: 'inherit' }}
                    >
                        Sidebar
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink style={{ textDecoration: "none" }} exact to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Profile </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink style={{ textDecoration: "none" }} exact to="/shops" activeClassName="activeClicked">
                            <CDBSidebarMenuItem ><i class="fas fa-cogs"></i>shops</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink style={{ textDecoration: "none" }} exact to="/users" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="table">users</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink style={{ textDecoration: "none" }} exact to="/analytics" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">
                                Analytics
                            </CDBSidebarMenuItem>
                        </NavLink>



                        <NavLink
                            style={{ textDecoration: "none" }}
                            exact
                            to="/hero404"
                            target="_blank"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="exclamation-circle">
                                404 page
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>


            </CDBSidebar>
        </div>
    )
}

export default Navbardash





