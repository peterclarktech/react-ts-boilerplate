import { FC } from "react";

type FooterProps = {
    children?: React.ReactNode
}
const Footer: FC<FooterProps> = (props: FooterProps) => {
    return (
        <footer className="flex flex-row bg-gray-700 text-zinc-400 h-14 w-full">
            <div className="mx-2 sm:mx-20 content-center">
                {props.children}
            </div>
        </footer>
    )
}

export default Footer;