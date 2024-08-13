import React from 'react';
import splashLogo from "../../assets/images/splash.svg";
import SideNavDiv from "./SideNavDiv.jsx";
import dashboard from "../../assets/images/dashboard.svg";
import category from "../../assets/images/category.svg";
import orders from "../../assets/images/orders.svg";
import earnings from "../../assets/images/earningsNav.svg";
import users from "../../assets/images/usersNav.svg";
import groups from "../../assets/images/groups.svg";
import stat from "../../assets/images/stat.svg";
import notification from "../../assets/images/notifications.svg";
import roles from "../../assets/images/roles.svg";
import settings from "../../assets/images/settings.svg";
import logout from "../../assets/images/logout.svg";
import PropTypes from "prop-types";

const SideNav = ({setExpanded}) => {
    return (
        <div className="sideNav group/expand"
             onMouseEnter={() => setExpanded(true)}
             onMouseLeave={() => setExpanded(false)}>
            <nav className="flex flex-col items-center py-5">
                <div
                    className={`w-8 h-8 lg:w-32 lg:h-32 m-auto bg-[#007aff]`}
                    style={{
                        WebkitMask: `url(${splashLogo}) no-repeat center / contain`,
                        mask: `url(${splashLogo}) no-repeat center / contain`
                    }}
                ></div>
                <div className="sideNavDivContainer pt-5">
                    <div className="w-full">
                        <a href="/admin/entry/dashboard">
                            <SideNavDiv img={dashboard} text="Dashboard"/>
                        </a>
                        <a href="/admin/entry/category">
                            <SideNavDiv img={category} text="Category"/>
                        </a>
                        <SideNavDiv img={orders} text="Order Lists"/>
                        <SideNavDiv img={earnings} text="Earnings"/>
                        <SideNavDiv img={users} text="Users"/>
                        <SideNavDiv img={groups} text="Groups"/>
                        <SideNavDiv img={stat} text="Order Status"/>
                        <SideNavDiv img={notification} text="Notification"/>
                        <SideNavDiv img={roles} text="Roles"/>
                    </div>
                    <div className="w-full">
                        <SideNavDiv img={settings} text="Settings"/>
                        <SideNavDiv img={logout} text="Logout"/>
                    </div>
                </div>
            </nav>
        </div>
    );
};

SideNav.propTypes = {
    setExpanded: PropTypes.func.isRequired,
}
export default SideNav;