import imagem from "../assets/dentes.jpg";

function Imagem(){
    return(
        <div>
            <div className="p-10">
            <img src={imagem} alt="dentes" className=" w-100 rounded-3xl shadow-lg shadow-gray-500"/>
            </div>
        </div>
    );
}

export default Imagem;