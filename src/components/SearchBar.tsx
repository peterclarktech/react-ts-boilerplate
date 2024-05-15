import { FC, useState } from "react";
import Loader from "./Loader";
import TextField from "./form/TextField";

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

    const onTextChangeHandler = (value: string) => {
        if (timeoutid) clearTimeout(timeoutid);
        timeoutid = setTimeout(() => {
            startSearching(value)
        }, 1000);
    }

    return (
        <>
            <Loader isLoading={isLoading} loadingText="Searching Users" />
            {!isLoading && (
                <>
                    <TextField id={id} placeholder={placeholder} onChange={onTextChangeHandler}>
                        <i className="bi bi-search"></i>&nbsp;:&nbsp;
                    </TextField>
                </>
            )}

        </>

    )
}

export default SearchBar;