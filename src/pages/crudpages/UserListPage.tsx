import CrudTable, { HeaderData } from "../../components/CrudTable";
import SampleCrudData from "../../utils/SampleData";

export default function UserListPage() {
    const headerData: Array<HeaderData> = SampleCrudData.UserHeaders;
    const userData: {}[] = SampleCrudData.UserData;

    const onEdit = (data: any) => {
        alert(`${data.username} - EDIT TODO!`);
    }

    const onDelete = (data: any) => {
        alert(`${data.username} - DELETE TODO!`);
    }

    const onAdd = () => {
        alert('ADD TODO!');
    }
    return (
        <div className="grid mx-10 lg:mx-20">
            <CrudTable className="" key={"usertbl"} headerData={headerData} listData={userData}
                addFn={onAdd} editFn={onEdit} deleteFn={onDelete}>
                <h1 className="font-bold text-3xl text-left">User List</h1>
            </CrudTable>
        </div>
    )
}