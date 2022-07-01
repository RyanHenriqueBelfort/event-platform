import { useState } from "react"
import { useParams } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

export const Event = () =>{
  const { slug } = useParams<{slug: string}>()
  const [modalIsOpen, setIsOpen] = useState(false)

  
  return(
    <div className="flex flex-col min-h-screen">
      <Header></Header>
        {/* <button onClick={() => setIsOpen(true)}>TEste</button> */}
      <main className="flex flex-1">
        <Sidebar modal={modalIsOpen} setModal={setIsOpen}/>
        { slug ? 
        <Video  setModal={setIsOpen} lessonSlug={slug}/> : 
        <div className="flex-1">
          <Sidebar modal={modalIsOpen} setModal={setIsOpen}/>
        </div> 
        }
      </main>
    </div>
  )
}