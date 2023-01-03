import './imcCalculator.css'
import { useEffect, useState } from "react"

const ImcCalculator = () =>{
    const [peso, setPeso] = useState(0)
    const [color, setColor] = useState("")
    const [altura, setAltura] = useState(0)   
    const [resultado, setResultado] = useState(0)
    const [clasificacion, setClasificacion] = useState("Sin datos")
    //Formula: peso(kg)/[estatura(m)]^2
    // const calcularIMC = () => setResultado(peso/Math.pow(altura/100,2))
    function clasificar(){
        setResultado(peso/Math.pow(altura/100,2))        
        if(resultado<18.5){
            setClasificacion("Bajo peso")
            setColor("black")
        }
        if(resultado>18.5 && resultado<24.9){
            setClasificacion("Adecuado")
            setColor("green")
        }        
        if(resultado>25 && resultado<29.9){
            setClasificacion("Sobrepeso")
            setColor("yellow")
        }
        if(resultado>30 && resultado<34.9){
            setClasificacion("Obesidad rgado 1")
            setColor("orange")
        }
        if(resultado>35 && resultado<39.9){
            setClasificacion("Obesidad grado 2")
            setColor("red")
        }
        if(resultado>40){
            setClasificacion("Obesidad grado 3")
            setColor("red")
        }
    }
    useEffect(() => {
        clasificar()        
    }, [peso,altura])

    return(
        <div className="imc-container">
            <label>Ingrese su peso</label>
            <input type="range" min='40' max='150' onChange = {(e)=>setPeso(e.target.value)} value={peso}/>
            <span>{peso}</span>
            <br/>
            <label>Ingrese su altura</label>   
            <input type="range" min='120' max='230' onChange = {(e)=>setAltura(e.target.value)} value={altura}/>
            <span>{altura}</span>
            <br/>            
            <br/>
            <label>{resultado.toFixed(2)}</label>
            <br/>
            <label style={{color: `${color}`}}>{clasificacion}</label>

        </div>
    )
}
export default ImcCalculator;