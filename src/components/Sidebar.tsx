import { XCircle } from "phosphor-react"
import { useGetLessonsQuery } from "../graphql/generated"
import { Lesson } from "./Lesson"
import { useParams } from "react-router-dom"


import { SetStateAction, Dispatch } from 'react';

interface ModalTypes{
  modal: boolean
  setModal: Function
}

export const Sidebar = (props: ModalTypes) =>{
  const { slug } = useParams<{slug: string}>()
  const {data} = useGetLessonsQuery()
  console.log(props.modal)

  return(
    <aside className={`absolute md:static top-[17.5rem] 345:top-[19.5rem] 425:top-[21rem] z-10 w-56 md:w-[400px] ${!props.modal ? 'hidden' : 'inline'} md:w-[348px] bg-gray-700 p-2 md:p-6 border-l border-gray-600`}>
      <span className="flex font-bold justify-between items-center text-sm md:text-2xl pb-2 md:pb-6 mb-3 md:mb-6 border-b border-gray-500">
        Cronograma de aulas
        {slug ?
          <XCircle className="cursor-pointer" size={30} color="red" onClick={() => props.setModal(false)}/> :
          <div></div>
      }
      </span>


      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
       
      </div>
    </aside>
  )
}