import { DefaultUi, Player, Youtube } from "@vime/react"
import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning, YoutubeLogo } from "phosphor-react"

import pdf from '../assets/react-beginners-handbook.pdf'

import '@vime/core/themes/default.css'
import { gql, useQuery } from "@apollo/client"
import { useGetLessonBySlugQuery } from "../graphql/generated"

import { useVideoId } from '../hook/useVideoId'

interface VideoProps {
  lessonSlug: string
}


export const Video = (props: VideoProps) => {
  const videoId = useVideoId()
  console.log(videoId)

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
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube cookies={true} videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1" >
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="text-gray-200 mt-4 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data.lesson.teacher.avatarURL}
                alt=""
              />  

              <div>
                <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
              </div>
            </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <a href="https://discord.gg/vjEucRtK" target={"_blank"} className="p-4 text-sm bg-project-100 flex items-center rounded font bold uppercase gap-2 justify-center hover:bg-purple-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a href={`https://www.youtube.com/watch?v=${data.lesson.videoId}`} target="_blank" className=" group p-4 text-sm border bo flex border-red-600 text-zinc-100 items-center rounded font bold uppercase gap-2 justify-center hover:bg-red-600 hover:text-zinc-100 transition-colors">
              <YoutubeLogo  size={24} fill='true' className="text-red-600 group-hover:text-zinc-100"/>
              Acesse o o link do video
            </a>
          </div>
        </div>
        <div>
          <div className="gap-8 mt-20 grid grid-cols-2">
            <a href={pdf} download={'react-beginners-handbook.pdf'} type={'application/pdf'} target="_blank" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-slate-600 transition-colors">
              <div className="bg-project-100 h-full p-6 flex items-center">
                <FileArrowDown size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">
                  Material complementar
                </strong>
                <p className="text-sm text-gray-200 mt-2">
                  Acesse o PDF para acelerar o seu desenvolvimento
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>

            <a href="https://dev.to/javinpaul/10-best-websites-to-learn-reactjs-in-2022-1o6d" target={"_blank"} className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-slate-600 transition-colors">
              <div className="bg-project-100 h-full p-6 flex items-center">
                <Image size={40} />
              </div>
              <div className="py-6 leading-relaxed">
                <strong className="text-2xl">
                  Como aprender React?
                </strong>
                <p className="text-sm text-gray-200 mt-2">
                  Aqui tem uma lista completa onde voce pode aprender essa tão poderosa
                  Ferramenta de desenvolvimento, React <span className="text-base">⚛️</span>
                </p>
              </div>
              <div className="h-full p-6 flex items-center">
                <CaretRight size={24} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}