import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Projects from "./components/projects/Projects"
import type { ProjectDataType } from "./types/projectDataTypes"


const projectsDataFetch = async():Promise<ProjectDataType[]>=>{
  const res = await fetch('/data.json')
  const data = await res.json()
  return data
}

const projectsDataPromise = projectsDataFetch()
function App() {


  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <About></About>
      <Projects projectsDataPromise={projectsDataPromise}></Projects>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
