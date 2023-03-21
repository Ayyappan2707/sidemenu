import { useState, useEffect } from "react";
// import { baseURL } from "../services/baseURL";
import axios from "axios";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from "react-router-dom";

const SideMenu = () => {

    const [ menuList, setMenuList ] = useState([]);

    useEffect(() => {
        getMenuList();
    }, []);
    
    const getMenuList = () => {
        // It's getting CROS origin so I'm using local json call
        // baseURL.get(`treemenu.json`)
        // .then((res) => {
        //     console.log(res)
        //     setMenuList(res.data.data);
        // })
        // .catch((err) => {
        //     console.log(err)
        // });

        axios.get(`./treemenu.json`)
        .then((res) => {
            setMenuList(res.data);
        })
        .catch((err) => {
            console.log(err)
        });

    }

    return(
        <Sidebar className="cus-height">
            <Menu
                menuItemStyles={{
                button: ({ level, active, disabled }) => {
                        return {
                            color: active ? '#ffffff' : undefined,
                            backgroundColor: active ? '#408E91' : undefined,
                            "&:hover": {
                                backgroundColor: "#408E91 !important",
                                color: "#ffffff !important"
                            },
                        };
                    },
                }}
            >
                <MenuItem component={<Link to="/" />} active={window.location.pathname === "/"}>
                    Dashboard
                </MenuItem>
                { (menuList || []).map(({label, nodes, ...rest}, index) => { 
                    return (
                        <SubMenu key={`menu${index}`} label={label}>
                        { (nodes || []).map(({label, nodes, ...rest}, index) => {
                            return (
                                <SubMenu key={`submenu${index}`} label={label}>
                                { (nodes || []).map(({label, ...rest}, index) => (
                                    <MenuItem component={<Link to={`/${label}`} />} active={window.location.pathname === `/${label}`} key={`supsubmenu${index}`}> { label } </MenuItem>
                                ))}
                                </SubMenu>
                            )
                        })}
                        </SubMenu>
                    )}) 
                }
            </Menu>
        </Sidebar>
    );
}

export default SideMenu;