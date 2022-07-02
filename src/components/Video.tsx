import { DefaultUi, Player, Youtube } from "@vime/react"
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning, YoutubeLogo, Atom} from "phosphor-react"
import Modal from 'react-modal'
import pdf from '../assets/react-beginners-handbook.pdf'
import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../graphql/generated"
import { Footer } from "./Footer"

interface VideoProps {
  lessonSlug: string | undefined
  setModal: Function 
  modal: boolean
}
export const Video = (props: VideoProps) => {
 
  const {data} = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug
    },
    fetchPolicy: 'no-cache'
  })

  if(!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex md:justify-center">
        <div className="h-full w-full max-w-auto md:max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube cookies={true} videoId={data.lesson.videoId}  /> 
            <DefaultUi />
          </Player>
        </div>
      </div>
    
      {props.modal && window.innerWidth <= 763 ?
        <div className="p-8 max-w-[1100px] mx-auto relative">
          <div className="absolute top-1 md:static mb-5">
            <button className="transition ease-in-out delay-150 hover:scale-110 hover:bg-green-800 bg-green-600 px-1 md:text-xl rounded" onClick={() => props.setModal(true)}>Listar aulas</button>
          </div>
        </div> 

        :
      
      <div className="p-8 max-w-[1100px] mx-auto relative">
        <div className="absolute top-1 md:static mb-5">
          <button className="transition ease-in-out delay-150 hover:scale-110 hover:bg-green-800 bg-green-600 px-1 md:text-xl rounded" onClick={() => props.setModal(true)}>Listar aulas</button>
        </div>
        
        <div className="flex items-start gap-16 flex-col md:flex-col lg:flex-row">
          <div className="flex-1" >
            <h1 className="text-1xl md:text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="text-gray-200 mt-4 text-xs md:text-lg leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL}
                alt=""
              />  

              <div>
                <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                <span className="text-gray-200 text-xs md:text-sm block">{data.lesson.teacher.bio}</span>
              </div>
            </div>
            )}
          </div>

          <div className="flex flex-col gap-4 items-start">
            <a href="https://discord.gg/vjEucRtK" target={"_blank"} className="p-2 md:p-4 text-xs md:text-sm bg-project-100 flex items-center rounded uppercase gap-2 justify-center hover:bg-purple-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a href={`https://www.youtube.com/watch?v=${data.lesson.videoId}`} target="_blank" className="group p-2 md:p-4 text-xs md:text-sm border bo flex border-red-600 text-zinc-100 items-center rounded font bold uppercase gap-2 justify-center hover:bg-red-600 hover:text-zinc-100 transition-colors">
              <YoutubeLogo  size={24} fill='true' className="text-red-600 group-hover:text-zinc-100"/>
              Acesse o o link do video
            </a>
          </div>
        </div>
        <div>
          <div className="gap-4 md:gap-8 mt-20 grid grid-cols-2">
            <a href={pdf} download={'react-beginners-handbook.pdf'} type={'application/pdf'} target="_blank" className="col-span-2 lg:col-span-1 bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-slate-600 transition-colors">
              <div className="bg-project-100 h-32 md:h-full p-4 md:p-6 flex items-center">
                <FileArrowDown size={40} />
              </div>
              <div className="py-1 md:py-6 w-full leading-3 md:leading-relaxed">
                <strong className="text-xs md:text-2xl">
                  Material complementar
                </strong>
                <p className="text-xs md:text-sm text-gray-200 mt-1 md:mt-2">
                  Acesse o PDF para acelerar o seu desenvolvimento
                </p>
              </div>
              <div className="h-full p-2 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>

            <a href="https://dev.to/javinpaul/10-best-websites-to-learn-reactjs-in-2022-1o6d" target={"_blank"} className="col-span-2 lg:col-span-1 bg-gray-700 rounded overflow-hidden flex items-stretch gap-2 md:gap-6 hover:bg-slate-600 transition-colors">
              <div className="bg-project-100 h-full md:h-full p-4 md:p-6 flex items-center">
                <Atom size={40} />
              </div>
              <div className="py-1 w-full md:py-6 leading-3 md:leading-relaxed">
                <strong className="text-sm md:text-2xl">
                  Como aprender React?
                </strong>
                <p className="text-xs md:text-sm text-gray-200 mt-1 md:mt-2 ">
                  Aqui tem uma lista completa onde voce pode aprender essa tão poderosa
                  Ferramenta de desenvolvimento, React <span className="text-base">⚛️</span>
                </p>
              </div>
              <div className="h-full p-2 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>
          </div>
        </div>
      </div> 
    }
       <Footer />
    </div>
  )
}