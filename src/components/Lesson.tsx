import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export const Lesson = (props: LessonProps) => {
  const { slug } = useParams<{slug: string}>()

  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'K'h'mm ", {
    locale: ptBR,
  })

  const isActiveLesson = slug === props.slug

  return (

    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300 text-sm md:text-base">
        {availableDateFormatted}
      </span>

      <div className={`rounded border w-full border-gray-500 px-2 md:p-4 md:mt-2 group-hover:border-project-200 ${isActiveLesson? "bg-project-700": ""}`}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-xs md:text-sm text-green-400 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Conteudo liberado
            </span>
          ) : (
            <span className="text-xs md:text-md text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>)
          }

          <span className={`text-[0.550rem] md:text-xs rounded py-[0.125rem] px-[0.2rem] md:px-2 text-white border font-bold ${props.type === 'live' ? 'border-red-600' : 'border-green-400'}`}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRATICA'}
          </span>
        </header>

        <strong className={`text-sm md:text-base  mt-2 md:mt-5 block ${isActiveLesson ? "text-white" : "text-gray-200"}`}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}