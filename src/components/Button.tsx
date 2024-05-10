import { FC, MouseEventHandler } from "react";
import ColorGroup, { ColorSelect } from "../utils/ColorGroup";

export enum ButtonType {default,primary,positive,danger}
type ButtonProps = {
    type?: ButtonType,
    children?: React.ReactNode,
    onClick: MouseEventHandler
}
const Button: FC<ButtonProps> = (props) => {
    const { type=ButtonType.default, children, onClick } = props;

    let colorClass = ColorSelect[ColorGroup.neutral];//ButtonType.default
    if (type === ButtonType.primary) colorClass = ColorSelect[ColorGroup.accent];
    else if (type === ButtonType.positive) colorClass = ColorSelect[ColorGroup.positive];
    else if (type === ButtonType.danger) colorClass = ColorSelect[ColorGroup.danger];

    return (
        <button className={`${colorClass.bgColorClass} ${colorClass.textColorClass} border border-gray-light dark:border-gray rounded-lg py-2 px-4 hover:drop-shadow dark:hover:drop-shadow-gray`} 
            onClick={onClick}>
                {children}
        </button>
    )
}

export default Button;