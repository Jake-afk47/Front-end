import * as React from 'react';
   
//CSS
import './App.css'; 
 
//imagem
import Sapo from "./assets/Bufos.jpg"
import Mapa from "./assets/ map.png"
import Veneno from "./assets/veneno.png"
import Alimentação from "./assets/alimentação.png"
import Reprodução from "./assets/reprodução.png"

const App: React.FunctionComponent = () => {
   return <div className='max-w-6xl mx-auto px-4 border-3 border-green-400'>
    <header className="h-20 bg-green-800 text-white  flex justify-around rounded-full">
        <p className='text-4xl m-5'>BUFOS REGULARIS</p>
    </header>
    <aside className='flex items-center gap-8 p-6'>
    <div className=''>
      <img src={Sapo} alt="Sapo" className='w-60 h-60 border-4 border-green-700 rounded-full shadow-lg'/>
    </div>
    <div className='items-center gap-8 max-w-4xl m-15'>
      <h1 className='font-bold text-3xl'>O que são os bufos?</h1>
      <p>Os bufos são sapos pertencentes ao gênero Bufo, dentro da família Bufonidae. Eles são conhecidos por:</p>
      <ul  className='list-disc'>
        <li>Corpo mais robusto</li>
        <li>Pele seca e cheia de verrugas</li>
        <li>Movimento mais “andando” do que pulando (comparado a rãs)</li>
      </ul>
    </div>
    </aside>
    <hr className=''/>
    <aside className='flex justify-center items-center '>
      <div className=' items-center gap-8 max-w-4xl m-15'>
       <h2 className='font-bold text-3xl'>Onde vivem?</h2>
      <p>Os bufos são encontrados em várias partes do mundo:</p>
      <ul className='list-disc'>
        <li>Europa</li>
        <li>Ásia</li>
        <li>África</li>
        <li>Américas</li>
      </ul>
      <p>Um exemplo comum no Brasil é o Rhinella marina (antigamente classificado como Bufo).</p>
      <p>Eles vivem em ambientes como:</p>
      <ul className='list-disc'>
        <li>Florestas</li>
        <li>Campos</li>
        <li>Áreas urbanas (sim, aparecem bastante em cidades)</li>
      </ul>
      </div>
      <div>
        <img src={Mapa} alt="map" className='w-60 h-60 object-cover rounded-full border-4 border-green-700 shadow-lg'/>
      </div>
    </aside>
    <hr />
    <div className='justify-center text-center  m-20'>
       <h1 className='text-3xl font-bold'>Defesa (veneno)</h1>
        <p>O Bufo regularis possui glândulas parotoides que produzem uma substância tóxica usada como defesa contra predadores.
Esse veneno pode causar irritação na pele e nos olhos, além de ser perigoso para animais domésticos.
Para humanos, o contato geralmente não é grave, mas ainda assim deve ser evitado sem proteção.
Essa adaptação ajuda o sapo a sobreviver em ambientes onde há muitos predadores naturais.</p>
    </div>
    <div>
      <img src= {Veneno} alt="veneno" className='w-300 object-cover rounded-3xl border-4 border-green-700 shadow-lg'/>
    </div>
    <aside className='flex m-20'>
    <div className='m-12'>
      <h1 className='font-bold text-3xl'>Alimentação</h1>
      <p>Bufos são carnívoros e ajudam muito no controle de pragas:</p>
      <ul  className='list-disc'>
        <li>Insetos (principal dieta)</li>
        <li>Aranhas</li>
        <li>Pequenos invertebrados</li>
      </ul>
      <p>Isso é ótimo pra agricultura e equilíbrio ambiental.</p>
    </div>
    <div>
      <img src={Alimentação} alt="comida" className= 'w-150 border-3 border-green-800 rounded-2xl ' />
    </div>   
    </aside>
    <aside className='flex'>
    <div>
      <img src={Reprodução} alt="sexo" className='w-150 border-3  border-green-800 rounded-2xl'/>
    </div>
    <div className='m-25'>
      <h1 className='font-bold text-3xl'>Reprodução</h1>
      <ul className='list-disc'>  
        <li>Ocorre geralmente em água</li>
        <li>Fêmeas colocam cordões longos de ovos</li>
        <li>Passam pela fase de girino antes de virar sapo adulto</li>
      </ul>
    </div> 
    </aside> 
  </div>;
};

export default App;                                