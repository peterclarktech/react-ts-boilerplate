
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'

//import styles from './HomePage.module.css'
import { useState, version } from 'react'
import PageSection, { PageSectionType } from '../components/PageSection';
import Card from '../components/Card';

export default function HomePage() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="grid grid-flow-row">
                <PageSection title="Start Coding With React!" type={PageSectionType.normal}>
                    <Card imgClass="" imgSrc="/coding-guy.png" imgAlt="start coding now!" imgWidth={400} imgHeight={400}>
                        <div className="p-10 flex flex-col gap-5">
                            <p className="text-lg">
                                Hit the ground running with this <span className="font-bold">React</span> boilerplate project using <span className="font-bold">Vite</span> and <span className="font-bold">Tailwind CSS</span>.
                            </p>
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
                <PageSection title="Vite + React" type={PageSectionType.dark}>
                    <div className="flex my-10">
                        <div className="mx-auto flex flex-row">
                            <a href="https://vitejs.dev" target="_blank">
                                <img src={viteLogo} className="" alt="Vite logo" height={200} width={200} />
                            </a>
                            <a href="https://react.dev" target="_blank">
                                <img src={reactLogo} className="" alt="React logo" height={200} width={200} />
                            </a>
                        </div>

                    </div>
                    <div className="text-center">
                        <button className="border p-1 rounded-full" onClick={() => setCount((count) => count + 1)}>
                            Count is {count}
                        </button>
                        <br/>
                        <br/>
                        <p>
                            Edit <code>src/App.tsx</code> and save to test HMR
                        </p>
                    </div>
                    <p className="text-gray-400">
                        Click on the Vite and React logos to learn more
                    </p>
                </PageSection>

            </div>
        </>
    )
}