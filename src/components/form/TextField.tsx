import { ChangeEventHandler, FC } from "react";


type TextFieldProps = {
    id: string,
    placeholder?: string,
    onChange?: (value: string) => void,
    children?: React.ReactNode,
    ref?: React.RefObject<HTMLInputElement>
}
const TextField: FC<TextFieldProps> = ({ id, placeholder = "Enter Text...", onChange = () => { }, children, ref=null }) => {
    const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        onChange(event.target.value);
    }

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input ref={ref} type="text" id={id} name="searchtxt" placeholder={placeholder}
                className="border border-gray-light bg-white text-black rounded-lg py-2 px-4"
                onChange={changeHandler} />
        </>
    )
}

export default TextField;