import { FC } from "react";

type CardProps = {
    children?: React.ReactNode,
    imageFirst?: boolean,
    image: {
        src: string,
        alt: string,
        className?: string,
        width?: number | string,
        height?: number | string
    }
}
const Card: FC<CardProps> = ({imageFirst = true, ...props}) => {
    const textClass = imageFirst ? "order-last" : "";
    return (
        <div className="max-w-5xl mx-auto p-5 sm:p-10 border rounded-3xl grid xs:grid-flow-row xs:grid-rows-2 sm:grid-flow-col sm:grid-cols-2">
            <div className={`content-center ${textClass}`}>
                {props.children}
            </div>
            <div className="p-5 sm:p-10 mx-auto">
                <img {...props.image} />
            </div>
        </div>
    )
}

export default Card;