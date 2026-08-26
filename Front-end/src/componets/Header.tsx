function Header(){
    return(
        <div className="bg-gray-400 sticky top-0 z-10 h-25 w-full flex justify-around pt-2.5 pb-10 items-center shadow-lg shadow-gray-800">
            <nav className="flex flex-row gap-40 text-white">
                <a href="#" className="hover:text-sky-300  cursor-pointer pt-5">Inicio</a>
                <a href="#" className="hover:text-sky-300  cursor-pointer pt-5">Sobre</a>
                <a href="#" className="hover:text-sky-300  cursor-pointer pt-5">Contato</a>
                <a href="#" className="hover:text-sky-300  cursor-pointer pt-5">Agendamento</a>
            </nav>
        </div>
    );
}

export default Header