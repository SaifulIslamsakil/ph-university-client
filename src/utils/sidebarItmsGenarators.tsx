import { NavLink } from "react-router-dom";
import { TSidebarItems, TUserPath } from "../interface";


const sidebarItmsGenarators = (path :TUserPath[], role : string) => {
    const siderbarItems = path.reduce((acc: TSidebarItems[], item) => {
        if (item.path && item.name) {
            acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>
            })
        }
        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map((child) => ({
                    key: child.name,
                    label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>
                }))
            })
        }

        return acc
    }, [])
    return siderbarItems
};

export default sidebarItmsGenarators;