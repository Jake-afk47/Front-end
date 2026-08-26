// components
import Header from "./componets/Header"
import Story from "./componets/Story"
import Imagem from "./componets/image"
import Footer from "./componets/Footer"
import Doutor from "./componets/DR"
import Serviços from "./componets/Serviços"




import "./App.css"

function App() {
  return (
    <div className="bg-gray-400 flex h-screen flex-col items-center ">
       <Header/>
      <div className="h-full w-full flex justify-center">
        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#E0F2FE] flex justify-center h-90 w-full ">
            <Story/>
            <Imagem/>
        </div>
      </div>
      <div className="h-full w-full flex justify-center">
        <Doutor/>
      </div>
      <div className="h-full w-full flex justify-end item-right">
        <Serviços/>
      </div>
      <Footer/>
    </div>
  )
}

export default App