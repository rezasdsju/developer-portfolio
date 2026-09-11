import About from "./components/About"
import Banner from "./components/Banner"
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
    </>
  )
}

export default App
