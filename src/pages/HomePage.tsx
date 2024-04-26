import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'

//import styles from './HomePage.module.css'
import { useState, version } from 'react'
import PageSection, { PageSectionType } from '../components/PageSection';
import Card from '../components/Card';
import useDarkMode from '../hooks/useDarkMode';

export default function HomePage() {
    const [count, setCount] = useState(0);
    const isDarkMode = useDarkMode().isDarkMode;

    let tailwindsvgpath = isDarkMode ? "/tailwind-dark.svg" : "/tailwind.svg";

    return (
        <>
            <PageSection title="Start Coding With React!" subtitle="Hit the ground running with this React boilerplate project using Vite and Tailwind CSS." type={PageSectionType.normal}>
                <Card imgClass="" imgSrc="/coding-guy.png" imgAlt="start coding now!" imgWidth={400} imgHeight={400}>
                    <div className="p-10 flex flex-col gap-5">
                        <p className="text-lg">
                            <span className="font-bold">React ({version})</span> lets you build user interfaces out of individual pieces called components. Create your own React components then combine them into entire screen, pages and apps.
                        </p>
                        <p className="text-lg">
                            <span className="font-bold">Vite</span> provides many enhancements over native ESM imports to support various features that are typically seen in bundler-based setups.
                        </p>
                        <p className="text-lg">
                            <span className="font-bold">Tailwind CSS</span> is a utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.
                        </p>
                    </div>
                </Card>
            </PageSection>
            <PageSection title="Vite + React" subtitle="Click on the Vite and React logos to learn more" type={PageSectionType.dark}>
                <div className="flex my-10">
                    <div className="mx-auto flex flex-row gap-10">
                        <a href="https://vitejs.dev" target="_blank">
                            <img src={viteLogo} className="p-6 h-56 hover:drop-shadow-xl-vite transition filter delay-100" alt="Vite logo" />
                        </a>
                        <a href="https://react.dev" className="" target="_blank">
                            <img src={reactLogo} className="p-6 h-56 hover:drop-shadow-xl-react animate-spin-slow transition filter delay-100" alt="React logo" />
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <button className="border p-1 rounded-full" onClick={() => setCount((count) => count + 1)}>
                        Count is {count}
                    </button>
                    <br />
                    <br />
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
            </PageSection>
            <PageSection title="Tailwind CSS" subtitle="Rapidly build modern websites without ever leaving your HTML" type={PageSectionType.normal}>
                <div className="flex my-10">
                    <div className="mx-auto flex flex-row">
                        <div>
                            Visit their official website to learn more &nbsp;
                        </div>
                        <a href="https://tailwindcss.com" target="_blank">
                            <img src={tailwindsvgpath} width={200}/>
                        </a>
                    </div>

                </div>
            </PageSection>
        </>
    )
}