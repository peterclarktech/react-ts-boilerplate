import { ChangeEventHandler, KeyboardEventHandler, forwardRef } from "react";


type TextFieldProps = {
    id: string,
    placeholder?: string,
    onChange?: (value: string) => void,
    onKeyDown?: KeyboardEventHandler,
    children?: React.ReactNode,
    isPassword?: boolean
}
const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const { id, placeholder = "Enter Text...",
        onChange = () => { }, onKeyDown = () => { },
        children, isPassword = false } = props;

    const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        onChange(event.target.value);
    }

    return (
        <>
            <label htmlFor={id}>{children}</label>
            <input ref={ref} type={isPassword ? "password" : "text"} id={id} name="searchtxt" placeholder={placeholder}
                className="border border-gray-light bg-white text-black rounded-lg py-2 px-4"
                onChange={changeHandler} onKeyDown={onKeyDown} />
        </>
    )
})

export default TextField;