import { useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

export const Event = () => {
  const { slug } = useParams<{ slug: string }>()
  const [modalIsOpen, setIsOpen] = useState(false)

   if(modalIsOpen && window.innerWidth < 425 ){
    console.log('é mobile')
   }else{
    console.log('Não é mobile')
   }
  return (
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="flex flex-1">
          <Sidebar modal={modalIsOpen} setModal={setIsOpen} />
        {slug  ?
          <Video setModal={setIsOpen} modal={modalIsOpen} lessonSlug={slug} /> :
          <div className="flex-1">
            <Sidebar modal={modalIsOpen} setModal={setIsOpen} />
          </div>
        }
      </main>
    </div>
  )
}