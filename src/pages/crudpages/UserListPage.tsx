import PageSection from "../../components/PageSection";
import ColorGroup from "../../utils/ColorGroup";

export default function UserListPage() {
    return (
        <PageSection colorGroup={ColorGroup.inherit} hasBottomBorder={false}>
            <table className="table-auto">
                <thead>
                    <tr className="">
                        <td className="border p-5">Username</td>
                        <td className="border p-5">First Name</td>
                        <td className="border p-5">Last Name</td>
                        <td className="border p-5">Middle Initial</td>
                        <td className="border p-5">Role</td>
                        <td className="border p-5">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border">peterclark</td>
                        <td className="border">Peter Clark</td>
                        <td className="border">Guisadio</td>
                        <td className="border">L</td>
                        <td className="border">Admin</td>
                        <td className="border">(buttons here)</td>
                    </tr>
                </tbody>
            </table>
        </PageSection>
    )
}