import { ChangeEventHandler, FC, useState } from "react";
import Loader from "./Loader";

type SearchBarProps = {
    id: string,
    placeholder?: string,
    data: Array<any>,
    onFilter: (filteredData: Array<any>) => void,
    filterFn: (data: Array<any>, searchTxt: string) => Array<any>
}
const SearchBar: FC<SearchBarProps> = ({ id, placeholder, data, onFilter, filterFn }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    let timeoutid: number | undefined;

    const startSearching = (searchText: string) => {
        setIsLoading(true);
        onFilter(filterFn(data, searchText));
        setIsLoading(false);
    }

    const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        if (timeoutid) clearTimeout(timeoutid);
        timeoutid = setTimeout(() => {
            startSearching(event.target.value)
        }, 1000);
    }

    return (
        <>
            <Loader isLoading={isLoading} loadingText="Searching Users"/>
            {!isLoading && (
                <>
                    <label htmlFor={id}><i className="bi bi-search"></i> : </label>
                    <input type="text" id={id} name="searchtxt" placeholder={placeholder}
                        className="border border-gray-light rounded-lg py-2 px-4"
                        onChange={onChangeHandler} />
                </>
            )}

        </>

    )
}

export default SearchBar;