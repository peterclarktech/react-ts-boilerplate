import { FC, MouseEventHandler } from "react";
import ColorGroup, { ColorSelect } from "../utils/ColorGroup";

export enum ButtonType {default,primary,positive,danger,disabled}
type ButtonProps = {
    variant?: ButtonType,
    children?: React.ReactNode,
    onClick?: MouseEventHandler,
    onMouseEnter?: MouseEventHandler,
    onMouseLeave?: MouseEventHandler
}
const Button: FC<ButtonProps> = (props) => {
    const { variant=ButtonType.default, children} = props;

    let colorClass = ColorSelect[ColorGroup.neutral];//ButtonType.default
    if (variant === ButtonType.primary) colorClass = ColorSelect[ColorGroup.accent];
    else if (variant === ButtonType.positive) colorClass = ColorSelect[ColorGroup.positive];
    else if (variant === ButtonType.danger) colorClass = ColorSelect[ColorGroup.danger];

    const hoverClasses = variant === ButtonType.disabled ? "" : "hover:drop-shadow dark:hover:drop-shadow-gray";

    return (
        <button disabled={variant === ButtonType.disabled} 
            className={`${colorClass.bgColorClass} ${colorClass.textColorClass} border border-gray-light dark:border-gray rounded-lg py-2 px-4 ${hoverClasses}`} 
            {...props}>
                {children}
        </button>
    )
}

export default Button;