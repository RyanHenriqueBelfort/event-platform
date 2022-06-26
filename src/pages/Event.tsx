import { useParams } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

export const Event = () =>{
  const { slug } = useParams<{slug: string}>()
  return(
    <div className="flex flex-col min-h-screen">
      <Header></Header>
      <main className="flex flex-1">
        <Sidebar />
        { slug ? 
        <Video  lessonSlug={slug}/> : 
        <div className="flex-1" />
        }
      </main>
    </div>
  )
}