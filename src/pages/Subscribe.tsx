import { useState, FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation, useGetLessonBySlugQuery, useGetLessonsQuery } from "../graphql/generated"

// interface VideoProps {
//   lessonSlug: string
// }

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const {data} = useGetLessonsQuery()
  const [createSubscriber, {loading}] = useCreateSubscriberMutation()

  const firstSlug = (data?.lessons[0].slug)

  async function handleSubscribe(event: FormEvent){
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })
    navigate(`/event/lesson/${firstSlug}`)
  }

  return(
    <div className="min-h-screen bg-blur bg-cover flex flex-col items-center">
      <div className="pl-1 w-full max-w-[1100px] flex flex-col md:flex-row justify-between items-center mt-20 mx-auto">
        <div className="max-w-[640px]">
          <div className="flex md:justify-start">
            <Logo />
          </div>

          <h1 className="mt-8 text-lg md:text-[2.5rem] leading-tight">
            Guia de como <strong className="text-blue-500 text-2xl md:text-5xl">React funciona</strong>, partindo do total do <strong className="text-blue-500 text-2xl md:text-5xl" >zero</strong>
          </h1>
          <p className="mt-4 mb-4 text-gray-200 leading-relaxed text-xs md:text-xl">
            Alguns matérias para voce entender de vez por todas de como uma das 
            tecnologias mais demandada do mercado e todo seu universo funciona.
            Através de conteúdos gratuitos pela internet.
          </p>
        </div>

        <div className="p-2 md:p-8 bg-gray-700 border border-gray-500 rounded w-50 md:w-1/3">
          <strong className="text-xs md:text-2xl mb-6 block">Inscreva gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input 
              className="bg-gray-900 rounded px-5 h-8 md:h-14 placeholder:text-xs md:placeholder:text-base" 
              type="text" 
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)} 
            />
            <input
              className="bg-gray-900 rounded px-5 h-8 md:h-14 placeholder:text-xs md:placeholder:text-base"
              type="email"
              placeholder="Digite seu melhor email" 
              onChange={event => setEmail(event.target.value)} 
            />

            <button 
              className="mt-4 bg-green-500 uppercase py-2 rounded font-bold text-xs md:text-sm hover:bg-green-700 transition-colors disabled:opacity-20 h-8 md:h-14"
              type="submit"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code.png" alt="" className="mt-10" />
    </div>
  )
}