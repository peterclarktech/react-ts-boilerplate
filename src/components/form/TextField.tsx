import { forwardRef } from "react";


interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children?: React.ReactNode,
    isPassword?: boolean
}
const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
    const { children, isPassword = false, ...htmlprops } = props;

    return (
        <>
            <label htmlFor={props.id}>{children}</label>
            <input {...htmlprops} ref={ref} type={isPassword ? "password" : "text"}
                className="border border-gray-light bg-white text-black rounded-lg py-2 px-4" 
                />
        </>
    )
})

export default TextField;