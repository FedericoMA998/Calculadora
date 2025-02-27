import React from "react";
import '../CalculadoraStyles/CalcStyle.css'
import '../CalculadoraControles/Programacion.js'
import percentageImg from '../../CalculadoraResources/percentage-icon.png'
import rootImg from '../../CalculadoraResources/square-root-icon.png'
import equalImg from '../../CalculadoraResources/equal-darkBlue-icon.png'
import divideImg from '../../CalculadoraResources/divide-icon.png'
import multiplyImg from '../../CalculadoraResources/multiply-icon.png'
import sustractImg from '../../CalculadoraResources/minus-icon.png'
import addImg from '../../CalculadoraResources/plus-icon.png'

const VistaCalculadora=()=>{
    /* Variable Initialization */
    const display = document.getElementById("displayElement");
    let sign;
    let firstValue;
    let secondValue;
    let result;
    
    function addValue(antryValue){/* Write the digited values in the display view */
        console.log(antryValue);
        display.value += antryValue;
        console.log('Fuction Add Value Executed');
    }

    function cleanDisplayView(){/* Clean values from the display view and the sign */
        display.value = '';
        sign = '';
        console.log('Fuction Clean Display Executed');
    }

    function changeSign(entrySign){/* Establish the matematical operator sign and the first value, clean the display view for the entry of the second value */
        sign = entrySign;
        firstValue = display.value;
        display.value = '';
        console.log('Fucion Establecer Sign Ejecutada');
    }

    function calculate(){/* Store second value and compare operator sign, calculate result and print it in the display area */
        secondValue = display.value;
        try {
            switch(sign){
                case '+' : result = parseFloat(firstValue) + parseFloat(secondValue);
                break;
                case '-' : result = parseFloat(firstValue) - parseFloat(secondValue);
                break;
                case '*' : result = parseFloat(firstValue) * parseFloat(secondValue);
                break;
                case '/' : result = parseFloat(firstValue) / parseFloat(secondValue);
                break;
                case '%' : result = parseFloat(firstValue) -((parseFloat(firstValue) * parseFloat(secondValue))/100);
                break;
                default : console.log("No operator sign found");
            }
            display.value = result;
            console.log('Function Calculate Executed');
        } catch (error) {
            console.log('Error in calculate: ' + error)
        }
        
    }

    function getRootSquare(){
        firstValue = display.value;
        result = Math.sqrt(parseFloat(firstValue));
        display.value = result;
        console.log('Function get Root Executed');
    }
    
    return(
        <div className="generalView">
            <div className="calculatorView">
                <div className="infoView"> {/* display view area */}
                    <input type="text" className="displayView" id="displayElement" placeholder="0" disabled/>
                </div>
                <div className="buttonsArea"> {/* buttons area */}
                    {/* #region buttons first row */}
                    <button className="signBtn" id="rootButton" onClick={()=>getRootSquare()}><img src={rootImg} alt="Raiz" className="images" /></button>
                    <button className="signBtn"id="botonPorciento" onClick={()=>changeSign('%')}><img src={percentageImg} alt="Porcentaje" className="images" /></button>
                    <button className="clearBtn" id="clearButton" onClick={()=>cleanDisplayView()}>C</button>
                    <button className="signBtn"id="botonDivicion" onClick={()=>changeSign('/')}><img src={divideImg} alt="Divicion" className="images" /></button>
                    {/* #region second buttons row */}
                    <button className="button" id="botonNum7" onClick={()=>addValue('7')}>7</button>
                    <button className="button" id="botonNum8" onClick={()=>addValue('8')}>8</button>
                    <button className="button" id="botonNum9" onClick={()=>addValue('9')}>9</button>
                    <button className="signBtn"id="botonMultiplicar" onClick={()=>changeSign('*')}><img src={multiplyImg} alt="Multiplicacion" className="images"/></button>
                    {/* #region third buttons row */}
                    <button className="button" id="botonNum4" onClick={()=>addValue('4')}>4</button>
                    <button className="button" id="botonNum5" onClick={()=>addValue('5')}>5</button>
                    <button className="button" id="botonNum6" onClick={()=>addValue('6')}>6</button>
                    <button className="signBtn"id="botonRestar" onClick={()=>changeSign('-')}><img src={sustractImg} alt="Resta" className="images" /></button>
                    {/* #region fourth buttons row */}
                    <button className="button" id="botonNum1" onClick={()=>addValue('1')}>1</button>
                    <button className="button" id="botonNum2" onClick={()=>addValue('2')}>2</button>
                    <button className="button" id="botonNum3" onClick={()=>addValue('3')}>3</button>
                    <button className="signBtn"id="botonSumar" onClick={()=>changeSign('+')}><img src={addImg} alt="suma" className="images" /></button>
                    {/* #region fiveth buttons row */}
                    <button className="button" id="botonNum0" onClick={()=>addValue('0')}>0</button>
                    <button className="button" id="botonPuntoDecimal" onClick={()=>addValue('.')}>∙</button>
                    <button className="equalBtn"id="botonIgual" onClick={()=>calculate()}><img src={equalImg} alt="igual" className="igualImg" /></button>
                </div>
            </div>
        </div>
    )
}

export default VistaCalculadora;