import { Outlet } from 'react-router-dom'
import reactlogo from './assets/react.svg'


import Header from './components/Header'
import Footer from './components/Footer';


export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col min-h-svh">
      <Header.HeaderBody>
        <Header.HeaderLogo linkto="/" imgSrc={reactlogo} imgAlt="React" imgClass="">React Boilerplate Project</Header.HeaderLogo>
        <Header.HeaderLink to="/" iconClass="bi bi-house">Home</Header.HeaderLink>
        <Header.HeaderLink to="/crudsample" iconClass="bi bi-journal-richtext">CRUD Sample</Header.HeaderLink>
        <Header.HeaderLink to="/author" iconClass="bi bi-person-vcard">Author</Header.HeaderLink>
      </Header.HeaderBody>
      <Outlet/>
      <Footer>
        <span>Company Name, Inc. &copy;{year}</span>
      </Footer>
    </div>
  )
}
