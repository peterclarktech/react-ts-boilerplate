import { Outlet } from "react-router-dom";
import PageSection from "../../components/PageSection";
import Sidebar, { NavLinkItem } from "../../components/Sidebar";
import ColorGroup from "../../utils/ColorGroup";

export default function CrudLayoutPage() {
    const navLinks: Array<NavLinkItem> = [
        { to: "", text: "Users" },
        { to: "userroles", text: "User Roles" }
    ];

    return (
        <PageSection title="" subtitle="" colorGroup={ColorGroup.normal}>
            <div className="grid grid-flow-col grid-cols-4">
                <div className="col-span-1">
                    <Sidebar title="CRUD Samples" navlinks={navLinks} />
                </div>
                <div className="col-span-3">
                    <Outlet />
                </div>
            </div>
        </PageSection>
    )
}