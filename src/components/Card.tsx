import { FC } from "react";

type CardProps = {
    children?: React.ReactNode,
    imgSrc: string,
    imgAlt: string,
    imgClass: string,
    imgWidth: number,
    imgHeight: number
}
const Card: FC<CardProps> = (props: CardProps) => {
    return (
        <div className="max-w-5xl mx-auto border rounded-3xl grid grid-flow-col grid-cols-2">
            <div>
                {props.children}
            </div>
            <div className="p-10 mx-auto">
                <img alt={props.imgAlt} src={props.imgSrc} width={props.imgWidth} height={props.imgHeight} />
            </div>
        </div>
    )
}

export default Card;