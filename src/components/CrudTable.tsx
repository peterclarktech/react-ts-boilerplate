import { FC } from "react";

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
    const { tblKey, className, children, headerData, listData,
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
                    (<a className="hover:underline" href="#" onClick={() => editFn(item)}>Edit</a>)
                }
                &nbsp;
                {enableDelete &&
                    (<a className="hover:underline" href="#" onClick={() => deleteFn(item)}>Del</a>)
                }
            </td>
        );

        return (
            <tr key={`${tblKey}_tr${index}`} className="my-5 border-b border-b-gray">
                {renderCols}
                {renderActions}
            </tr>
        )
    });

    return (
        <table className={className}>
            <caption className="p-5">
                {children}
                <br/>
                {enableAdd &&
                    (<button className="float-right border p-2" onClick={() => addFn()}>+ <span className="hidden md:inline">Add Record</span></button>)
                }
            </caption>
            <thead>
                <tr key={`${tblKey}_tr_header`} className="">
                    {renderHeaders}
                    {(enableEdit || enableDelete) &&
                        (<th key={`${tblKey}_th_actions`}>&nbsp;</th>)
                    }
                </tr>
            </thead>
            <tbody>
                {renderRows}
            </tbody>
        </table>
    )
}

export default CrudTable;