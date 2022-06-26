import { Logo } from "./Logo"
import { useMyQueryQuery } from '../graphql/generated'
import { User } from "phosphor-react"

export const Header = () =>{
  const { data } = useMyQueryQuery()
return(
  <header className="w-full py-5 grid grid-cols-3 justify-items-center items-center bg-gray-700 border-b border-gray-600">
    <div className="col-start-2">
      <Logo/>
    </div>
    <div className="flex flex-col items-center">
     <span className="text-green-600 text-lg">Bem vindo!</span>
     <div className="flex gap-3">
      <span className="font-bold text-xl text-slate-300">{data?.subscribers[data.subscribers.length-1].name}
      </span>
      <User size={24} weight="fill"></User>
     </div>
    </div>
  </header>
  )
}