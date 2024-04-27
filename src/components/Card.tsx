import { FC } from "react";
import ColorGroup, { ColorSelect } from "../utils/ColorGroup";

type CardProps = {
    children?: React.ReactNode,
    imageFirst?: boolean,
    colorGroup?: ColorGroup,
    image: {
        src: string,
        alt: string,
        className?: string,
        width?: number | string,
        height?: number | string
    }
}
const Card: FC<CardProps> = ({imageFirst = true, colorGroup = ColorGroup.invert, children, image}) => {
    const textClass = imageFirst ? "order-last" : "";
    const colorSelector = ColorSelect[colorGroup];
    return (
        <div className={
            `${colorSelector.bgColorClass} ${colorSelector.textColorClass} 
            max-w-5xl mx-auto p-5 sm:p-10 border-2 border-gray rounded-3xl 
            grid xs:grid-flow-row xs:grid-rows-2 sm:grid-flow-col sm:grid-cols-2`}>
            <div className={`content-center ${textClass}`}>
                {children}
            </div>
            <div className="p-5 sm:p-10 mx-auto">
                <img {...image} />
            </div>
        </div>
    )
}

export default Card;