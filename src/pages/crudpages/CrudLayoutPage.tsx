import { Outlet } from "react-router-dom";
import Sidebar, { NavLinkItem } from "../../components/Sidebar";
import ColorGroup from "../../utils/ColorGroup";

export default function CrudLayoutPage() {
    const navLinks: Array<NavLinkItem> = [
        { to: "", text: "Users" },
        { to: "userroles", text: "User Roles" }
    ];

    return (
        <div className="flex flex-1">
            <div className="flex-none">
                <Sidebar.Main title="CRUD Samples" colorGroup={ColorGroup.accent}>
                    <Sidebar.Section title="User Maintenance" navlinks={navLinks} />
                </Sidebar.Main>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    )
}