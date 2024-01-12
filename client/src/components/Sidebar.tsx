import menuIcon from "./../assets/icons/menu.png";
import dashboardIcon from "./../assets/icons/menu 1.png";
import chatIcon from "./../assets/icons/menu 2.png";
import reservationIcon from "./../assets/icons/menu 3.png";
import villaIcon from "./../assets/icons/menu 4.png";
import closeIcon from "./../assets/icons/close.png"
import logo from "./../assets/logo.png";

import { useRef, useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";

// type Sidebar = {

// }

type CurrentRouteRef = {
    dashboard: boolean;
    chat: boolean;
    villaManagement: boolean;
    reservationSchedule: boolean;
}

type MenuType = {
    // name: string;
    sidebarStatus: "opened" | "closed";
    // icon: string;
    routePath: "/dashboard" | "/chat" | "/reservation-schedule" | "/villa-management" | string;
}

export function Sidebar() {
    const [sidebarStatus, setSidebarStatus] = useState<"opened" | "closed">("closed");
    
    const routePath = useRouter().history.location.pathname;

    return (
        <aside  className={`sidebar sidebar-${sidebarStatus}`}>
            
            {
                sidebarStatus === "opened" ? (
                    <div  className={`navigations navigations-${sidebarStatus}`}>
                        <img  src={logo} 
                              className="sidebar-logo"
                              />

                        <img  src={closeIcon} 
                              className="menu-icon"

                              onClick={() => {
                                  setSidebarStatus("closed");
                              }}
                              />
                    </div>
                ) : (
                    <div  className={`navigations navigations-${sidebarStatus}`}>
                        <img    src={menuIcon} 
                                className="menu-icon"

                                onClick={() => {
                                    setSidebarStatus("opened");
                                }}
                                />
                    </div>
                )
            }
            
            <nav  className={`menus menus-${sidebarStatus}`}>
                <Menu   sidebarStatus={sidebarStatus}
                        routePath={routePath}
                        />
            </nav>
        </aside>
    );
}

function Menu({ sidebarStatus, routePath }: MenuType) {
    const currentRouteRef = useRef<CurrentRouteRef>({
        dashboard: false,
        chat: false,
        villaManagement: false,
        reservationSchedule: false,
    });
    
    const routeMap = {
        "/dashboard": { dashboard: true },
        "/chat": { chat: true },
        "/reservation-schedule": { reservationSchedule: true },
        "/villa-management": { villaManagement: true },
        "/villa-management/create-new-villa": { villaManagement: true },
    };
    
    currentRouteRef.current = {
        ...currentRouteRef.current,
        ...routeMap[routePath]
    };

    return (
        <>
        <Link to="/dashboard">
            <div  className={`menu dashboard-${currentRouteRef.current.dashboard}`}>

            <img    src={dashboardIcon} 
                    className={`menu-icon dashboard-icon-${currentRouteRef.current.dashboard}`}
                    />
            
            {
                sidebarStatus === "opened" &&
                <h4  className="label-regular menu-label">
                    Dashboard
                </h4>
            }
            </div>
        </Link>

        <Link to="/chat">
            <div  className={`menu chat-${currentRouteRef.current.chat}`}>

            <img    src={chatIcon} 
                    className={`menu-icon chat-icon-${currentRouteRef.current.chat}`}
                    />
            
            {
                sidebarStatus === "opened" &&
                <h4  className="label-regular menu-label">
                    Chat
                </h4>
            }
            </div>
        </Link>

        <Link to="/reservation-schedule">
            <div  className={`menu reservation-schedule-${currentRouteRef.current.reservationSchedule}`}>

            <img    src={reservationIcon} 
                    className={`menu-icon reservation-schedule-icon-${currentRouteRef.current.reservationSchedule}`}
                    />
            
            {
                sidebarStatus === "opened" &&
                <h4  className="label-regular menu-label">
                    Reservation schedule
                </h4>
            }
            </div>
        </Link>

        <Link to="/villa-management">
            <div  className={`menu villa-management-${currentRouteRef.current.villaManagement}`}>

            <img    src={villaIcon} 
                    className={`menu-icon villa-management-icon-${currentRouteRef.current.villaManagement}`}
                    />
            
            {
                sidebarStatus === "opened" &&
                <h4  className="label-regular menu-label">
                    Villa management
                </h4>
            }
            </div>
        </Link>
        </>

    );
}