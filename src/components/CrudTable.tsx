import { FC } from "react";
import Button, { ButtonType } from "./Button";

export type HeaderData = {
    headerText?: string,
    dataField: string,
    template?: (data: {}) => JSX.Element,
    isSearchable?: boolean,
    isSortable?: boolean,
    canHide?: boolean,
}
export type CrudTableProps = {
    className?: string,
    tblKey?: React.Key,
    children?: React.ReactNode,
    headerData: HeaderData[],
    listData: any[],
    enableAdd?: boolean,
    addFn?: () => void,
    enableEdit?: boolean,
    editFn?: (data: {}) => void,
    enableDelete?: boolean,
    deleteFn?: (data: {}) => void
}
const CrudTable: FC<CrudTableProps> = (props) => {
    const { tblKey, children, headerData, listData,
        enableAdd = true, enableEdit = true, enableDelete = true,
        addFn = () => { }, deleteFn = () => { }, editFn = () => { } } = props;

    const renderHeaders = headerData.map((item, index) => {
        const { canHide = false } = item;
        const headerName: string = item.headerText ? item.headerText : item.dataField
        const hiddenClass: string = canHide ? "hidden md:table-cell" : "";
        return (
            <th key={`${tblKey}_th${index}`} className={`p-5 text-left ${hiddenClass}`}>{headerName}</th>
        )
    });

    const renderRows = listData.map((item, index) => {
        const renderCols = headerData.map((headerItem, headerIndex) => {
            const { canHide = false } = headerItem;
            const renderContent: JSX.Element = headerItem.template ?
                headerItem.template(item) :
                (<>{item[headerItem.dataField]}</>);

            const hiddenClass: string = canHide ? "hidden md:table-cell" : "";
            return (
                <td key={`${tblKey}_row${index}col${headerIndex}`} className={`p-5 ${hiddenClass}`}>{renderContent}</td>
            )
        });

        const renderActions = (enableEdit || enableDelete) && (
            <td>
                {enableEdit &&
                    (<a className="p-1 rounded-lg border border-none hover:text-gray-light" href="#" onClick={() => editFn(item)}>
                        <span><i className="bi bi-pencil-square"></i></span>
                    </a>)
                }
                &nbsp;
                {enableDelete &&
                    (<a className="p-1 rounded-lg border border-none hover:text-gray-light" href="#" onClick={() => deleteFn(item)}>
                        <span><i className="bi bi-trash"></i></span>
                    </a>)
                }
            </td>
        );

        const grayShadowClass: string = ((index % 2) !== 0) ? "shadow-inner-fill-gray" : "";

        return (
            <tr key={`${tblKey}_tr${index}`} className={`${grayShadowClass} my-5`}>
                {renderCols}
                {renderActions}
            </tr>
        )
    });

    return (
        <div className="border-0 rounded-xl my-5 p-5 mx-auto shadow-2xl">
            <table className="w-full">
                <caption className="p-5">
                    {children}
                    <div className="my-5">
                        <div className="float-left">
                            <label htmlFor="searchtxt"><i className="bi bi-search"></i> : </label>
                            <input id="searchtxt" name="searchtxt" className="border border-gray-light rounded-lg py-2 px-4" type="text" placeholder="Search text..." />
                        </div>
                        {enableAdd &&
                            (<div className="float-right">
                                <Button type={ButtonType.primary} onClick={() => addFn()}>
                                    <span><i className="bi bi-plus"></i></span>
                                    <span className="hidden md:inline">Add Record</span>
                                </Button>
                            </div>)
                        }
                    </div>
                </caption>
                <thead>
                    <tr key={`${tblKey}_tr_header`} className="border-b border-b-gray">
                        {renderHeaders}
                        {(enableEdit || enableDelete) &&
                            (<th key={`${tblKey}_th_actions`}>&nbsp;</th>)
                        }
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-light">
                    {renderRows}
                </tbody>
            </table>
            <div className="my-5">Showing [x] of [n] items</div>
        </div>
    )
}

export default CrudTable;