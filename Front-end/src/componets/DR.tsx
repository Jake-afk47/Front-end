import profile from '../assets/Dentista.jpg'

function Doutor(){
    return(
        <div className='bg-gray-600 flex flex-col items-center h-full w-full pt-10 pb-10'>
            <h1 className='text-4xl font-bold text-sky-400 pb-10'>Sobre o Dr. Alfredo</h1>
            <div className='bg-gray-500 flex flex-col items-center gap-4 h-150 w-150 rounded-2xl shadow-2xl '>
                <div className='flex items-center justify-center pt-5'>
                    <img src={profile} alt="profile" className='w-100 h-100 rounded-full border-2 border-sky-400 shadow-xl ' />
                </div>
                <p className='text-3xl font-bold text-sky-400'>Dr. Alfredo</p>
                <p className='w-150 justify-center text-center  text-slate-100'>Cirurgião-dentista formado pela USP, com mais de 10 anos de experiência em Ortodontia e Estética Dental. Especialista em transformações de sorriso e implantes, já atendeu mais de 2.000 pacientes combinando técnica avançada e atendimento humanizado.</p>
            </div>
        </div>
    )
}


export default Doutor