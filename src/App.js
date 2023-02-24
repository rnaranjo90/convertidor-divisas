import "./App.css";
import { useState } from "react";

const App = () => {
  const cambios=[
    {
      moneda: "Euro",
      cambio:1,
    },{
      moneda: "Peso argentino",
      cambio:118.6,
    },{
      moneda: "Peso colombiano",
      cambio:4543.5,
    },{
      moneda: "Peso mexicano",
      cambio:23.2,
    },{
      moneda: "Dólar",
      cambio:1.14
    }
  ]

  const [cantidad, setCantidad] = useState();
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [valor3, setValor3] = useState();
  const [valor4, setValor4] = useState();


  const funcion = (e) => {
    setCantidad(e.target.value);
    setValor1(e.target.value*cambios[1].cambio);
    setValor2(e.target.value*cambios[2].cambio);
    setValor3(e.target.value*cambios[3].cambio);
    setValor4(e.target.value*cambios[4].cambio);

  }



  return (
    <>
        <label htmlFor="u0">{cambios[0].moneda}</label><br></br>
        <input id="u0" type="number" value = {cantidad} onChange={funcion}/> 
        <br></br>

        <label htmlFor="u1">{cambios[1].moneda}</label><br></br>
        <input id="u1" type="number" value={valor1} readOnly/> 
        <br></br>

        <label htmlFor="u2">{cambios[2].moneda}</label><br></br>
        <input id="u2" type="number" value={valor2} readOnly/>
        <br></br>

        <label htmlFor="u3">{cambios[3].moneda}</label><br></br>
        <input id="u0" type="number" value={valor3} readOnly/>
        <br></br>

        <label htmlFor="u4">{cambios[4].moneda}</label><br></br>
        <input id="u4" type="number"  value={valor4} readOnly/>
        <br></br>

        
    </>
  )
}

export default App;