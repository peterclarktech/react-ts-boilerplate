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
    const mapToLink = (navItem: NavLinkItem, index:number) => {
        return (
            <li key={`${index}${navItem.text}`} >
            <NavLink className="font-bold hover:underline" to={navItem.to}>
                <div className="w-full my-5">{navItem.text}</div>
            </NavLink>
            </li>
        )
    }

    return (
        <div className="border rounded-md min-w-52 min-h-80 text-center mx-10 p-5">
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