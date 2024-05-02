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
        <PageSection title="" subtitle="" colorGroup={ColorGroup.normal} hasBottomBorder={false} >
            <div className="grid grid-flow-row lg:grid-flow-col grid-rows-8 grid-cols-1 lg:grid-rows-1 lg:grid-cols-8">
                <div className="row-span-2 col-span-1 lg:col-span-2 lg:row-span-1">
                    <Sidebar title="CRUD Samples" navlinks={navLinks} />
                </div>
                <div className="row-span-6 col-span-1 lg:col-span-6 lg:row-span-1">
                    <Outlet />
                </div>
            </div>
        </PageSection>
    )
}