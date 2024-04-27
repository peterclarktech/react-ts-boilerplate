import { FC } from "react";
import ColorGroup, { ColorSelect } from "../utils/ColorGroup";

type PageSectionProps = {
    children?: React.ReactNode,
    type?: ColorGroup,
    title?: string,
    subtitle?: string
}
const PageSection: FC<PageSectionProps> = ({type=ColorGroup.inherit,...props}) => {
    const pageSectionClasses = ColorSelect[type];
    return (
        <div className={`${pageSectionClasses.bgColorClass} border-b-2 border-b-gray py-14`}>
            <div className={`${pageSectionClasses.titleColorClass}`}>
                <h1 className="text-center text-5xl font-bold">
                    {props.title}
                </h1>
                <br/>
                <h4 className="text-center text-xl font-semibold">{props.subtitle}</h4>
            </div>
            <br/>
            <br/>
            <div className={`${pageSectionClasses.textColorClass}`}>
                {props.children}
            </div>
        </div>
    )
}

export default PageSection;