import { Outlet } from "react-router-dom";
import Sidebar, { NavLinkItem } from "../../components/Sidebar";
import ColorGroup from "../../utils/ColorGroup";

export default function CrudLayoutPage() {
    const navLinks: Array<NavLinkItem> = [
        { to: "", text: "Users" },
        { to: "userroles", text: "User Roles" }
    ];

    const navLinks2: Array<NavLinkItem> = [
        { to: "test1", text: "Test1" },
        { to: "test2", text: "Test 2" }
    ];

    return (
        <div className="flex flex-col lg:flex-row flex-1">
            <div className="flex-none">
                <Sidebar.Main title="CRUD Samples" colorGroup={ColorGroup.positive}>
                    <Sidebar.Section key={"sidebar_section0"} title="User Maintenance" navlinks={navLinks} />
                    <Sidebar.Section key={"sidebar_section1"} navlinks={navLinks2} />
                </Sidebar.Main>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    )
}