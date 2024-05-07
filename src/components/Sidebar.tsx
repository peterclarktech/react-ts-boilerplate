import { FC } from "react"
import { NavLink } from "react-router-dom"
import ColorGroup, { ColorSelect } from "../utils/ColorGroup"

export type NavLinkItem = {
    to: string,
    text: string
}

type SidebarSectionProps = {
    title?: string,
    navlinks: Array<NavLinkItem>
}
const SidebarSection: FC<SidebarSectionProps> = ({ title, navlinks }) => {
    const mapToLink = (navItem: NavLinkItem, index: number) => {
        return (
            <li key={`nav_${title}_${index}_${navItem.text}`} >
                <NavLink className="font-bold" to={navItem.to}>
                    <div className="w-full p-3 hover:bg-gray-light dark:hover:bg-gray rounded-md">{navItem.text}</div>
                </NavLink>
            </li>
        )
    }

    return (
        <>
            <div className="text-lg font-bold mb-2">
                {title}
            </div>
            <ul className="ml-2">
                {navlinks.map(mapToLink)}
            </ul>
        </>
    )
}

type SidebarProps = {
    children?: React.ReactNode,
    title?: string,
    colorGroup?: ColorGroup,
}
const SidebarMain: FC<SidebarProps> = (props) => {
    const { children, title, colorGroup = ColorGroup.inherit } = props;
    const colorClasses = ColorSelect[colorGroup];

    const renderTitle = title && (
        <div className={`text-lg text-opacity-70 dark:text-opacity-70 font-bold mb-5 ${colorClasses.titleColorClass}`}>
            {title}
        </div>
    )
    return (
        <div className={`min-w-52 max-w-96 h-full px-10 py-5 bg-opacity-70 dark:bg-opacity-80 ${colorClasses.textColorClass} ${colorClasses.bgColorClass}`}>
            {renderTitle}
            {children}
        </div>
    )
}

const Sidebar = {
    Main: SidebarMain,
    Section: SidebarSection
}

export default Sidebar;