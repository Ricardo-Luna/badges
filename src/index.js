import React from "react";
import ReactDOM from "react-dom";

import "./global.css";
import "bootstrap/dist/css/bootstrap.css";
import App from './components/App.js'


const container = document.getElementById("app");

//ReactDOM (QUÉ QUEREMOS RENDERIZAR, DÓNDE LO QUEREMOS RENDERIZAR)
ReactDOM.render(<App />, container);







//  ReactDOM.render(<Badge
//      firstName="Ricardo"
//      lastName="Luna"
//      jobTitle="Jefe de EGobierno"
//      twitter= "Rickylunat"
//      avatar="https://en.gravatar.com/userimage/178172579/86bbc458fb1822ae38c495ad9add016b.jpg?size=200"
//      />, container);

//ELEMENTOS ANIDADOS
//JSX VS CREATE ELEMENT
//const element = React.createElement(
//    "div",
//    {},
//    React.createElement("h1", {}, "Soy web developer"),
//    React.createElement("p", {}, "Soy ingeniero js")
//  );

//const jsx = (
//  <div>
//    <h1>Hola, soy Ricardo</h1>
//    <p>Quiero ser ingeniero FrontEnd</p>
//  </div>
//);

// equivalente a : |

//|-element.innerText = 'Hello'
//|||const element = <h1>Hello, Platzi Badgess</h1>

///   EQUIVALENTES
//|||const element = React.createElement('h1',{},'Hola, soy children')

//const element = React.createElement(
//'a',{       -Etiqueta
//href:'https://www.reddit.com/'},    -función
//'Reddit'    -Texto
//    )

//const ax = 'Ricardo Luna'
//
//const element = React.createElement(
//    'h1',
//    {},
//    `Hola, soy ${ax}`
//)
//const ax=(a,b)=> a + b
////const ax=()=>{return 'Hola Bola'}
//const jsx = <h1>Hola, soy {ax(5,5)}</h1>

//|-const element = document.createElement('h1')
// equivalente a : |
// container.appendChild(element)
