import serviços from "../assets/serviços.jpg"

function Serviços(){
    return(
        <div className="relative w-full bg-slate-900 text-white min-h-[500px] flex items-center justify-center overflow-hidden">
  
  {/* 1. IMAGEM DE FUNDO ESCURA (Fica em camada absoluta ao fundo) */}
  <div 
    style={{ backgroundImage: `url(/Hospital.png)` }}
    className="absolute inset-0 bg-cover bg-center opacity-25"
  />

  {/* 2. CONTEÚDO (Fica por cima com z-10 e 100% visível) */}
  <div className="relative z-10 max-w-7xl w-full flex items-center justify-between p-10 gap-12">
    
    {/* Imagem do lado esquerdo */}
    <img 
      src={serviços} 
      alt="serviços" 
      className="w-1/2 max-w-lg rounded-2xl shadow-2xl object-cover" 
    />

    {/* Conteúdo de texto do lado direito */}
    <div className="flex flex-col items-end text-right w-1/2">
      <h3 className="text-4xl font-bold mb-6 text-sky-400">
        Nossos Serviços
      </h3>
      
      <ul className="list-none flex flex-col gap-3 text-lg font-medium text-slate-100">
        <li className="hover:text-sky-300 transition-colors">Limpeza e Profilaxia</li>
        <li className="hover:text-sky-300 transition-colors">Restaurações</li>
        <li className="hover:text-sky-300 transition-colors">Extrações</li>
        <li className="hover:text-sky-300 transition-colors">Clareamento Dental</li>
        <li className="hover:text-sky-300 transition-colors">Ortodontia</li>
        <li className="hover:text-sky-300 transition-colors">Endodontia</li>
        <li className="hover:text-sky-300 transition-colors">Implantodontia</li>
        <li className="hover:text-sky-300 transition-colors">Prótese Dental</li>
      </ul>
    </div>

  </div>

</div>
    );
}

export default Serviços