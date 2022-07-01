import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Event } from "./pages/Event"
import { Router } from "./Router"
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from "react"

function App() {
  useEffect(() =>{
    Aos.init({duration: 1000})
  },[])

  return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    )
}

export default App
