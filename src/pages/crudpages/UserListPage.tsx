import CrudTable, { HeaderData } from "../../components/CrudTable";
import PageSection from "../../components/PageSection";
import ColorGroup from "../../utils/ColorGroup";
import SampleCrudData from "../../utils/SampleData";

export default function UserListPage() {
    const headerData:Array<HeaderData> = SampleCrudData.UserHeaders;
    const userData:{}[]=SampleCrudData.UserData;

    const onEdit = (data:any) => {
        alert(`${data.username} - EDIT TODO!`);
    }

    const onDelete = (data:any) => {
        alert(`${data.username} - DELETE TODO!`);
    }

    const onAdd = () => {
        alert('ADD TODO!');
    }
    return (
        <PageSection colorGroup={ColorGroup.inherit} hasBottomBorder={false}>
            <CrudTable key={"usertbl"} headerData={headerData} listData={userData}
                addFn={onAdd} editFn={onEdit} deleteFn={onDelete}>
                User List
            </CrudTable>
        </PageSection>
    )
}