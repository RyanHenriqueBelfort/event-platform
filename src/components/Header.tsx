import { Logo } from "./Logo"
import { useMyQueryQuery } from '../graphql/generated'
import { User } from "phosphor-react"

export const Header = () =>{
  const { data } = useMyQueryQuery()
return(
  <header className="w-full h-16 md:h-auto py-2 grid grid-cols-2 md:grid-cols-3 justify-items-center items-center bg-gray-700 border-b border-gray-600">
    <div className="col-start-1 md:col-start-2 ">
      <Logo/>
    </div>
    <div className="flex flex-col items-start">
     <span className="text-green-600 text-sm md:text-lg">Bem vindo!</span>
     <div className="flex gap-1 items-center">
      <span className="font-bold text-sm md:text-xl text-slate-300">{data?.subscribers[data.subscribers.length-1].name}</span>
      <User size={24} weight="fill"></User>
     </div>
    </div>
  </header>
  )
}