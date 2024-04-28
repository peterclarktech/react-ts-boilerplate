import { FC } from "react"
import { NavLink } from "react-router-dom"

type SidebarProps = {
    children?: React.ReactNode,
    title?: string,
    navlinks: Array<NavLinkItem>
}
export type NavLinkItem = {
    to: string,
    text: string
}
const Sidebar: FC<SidebarProps> = (props) => {
    const mapToLink = (navItem: NavLinkItem) => {
        return (
            <li>
            <NavLink className="font-bold hover:underline" to={navItem.to}>
                <div className="w-full my-5">{navItem.text}</div>
            </NavLink>
            </li>
        )
    }

    return (
        <div className="border rounded-md max-w-64 min-h-80 text-center p-5 mx-10">
            <div className="text-xl font-bold mb-5">
                {props.title}
            </div>
            <hr/>
            <ul>
                {props.navlinks.map(mapToLink)}
            </ul>
        </div>
    )
}

export default Sidebar;