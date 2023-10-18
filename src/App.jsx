import { useEffect, useState } from "react"
import "./App.css"
import { ShowList } from "./pages/ShowList"
import { fetchData } from "./functions/functions"

function App() {

  const [names, setNames] = useState()
 
  useEffect(() => {
    fetchData(setNames)
  }, [])

  return (
    <ShowList names={names} setNames={setNames}/>   
  )
}

export default App