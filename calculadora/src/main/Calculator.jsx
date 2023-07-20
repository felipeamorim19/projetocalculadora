import React from "react";
import './Calculator.css';
import Display from "../components/Display";
import Button from "../components/Button";



class Calculator extends React.Component{

  
   
     state = {
     DisplayValue:'5',
     ClearDisplay: false,
     Operation: null,
     values:[0,0],
     currents:0  }



    inserir(){
        console.log('inserir')

    }

    limpar(){
       const estadoInicial = {
            DisplayValue:'0',
            ClearDisplay: false,
            Operation: null,
            values:[0,0],
            currents:0  
    
        }
        this.setState(estadoInicial)
    }

    operar(){
        console.log('operar')
    }



    render(){
       
        const inserir = () => this.inserir()
		const limpar = () => this.limpar()   
		const operar = () => this.operar()
       
       
        return(
            <div>
            <h1>Calculadora</h1>
            <div className="calculator">
                <Display valordisplay={this.state.DisplayValue}/>
                <Button tecla='AC'click={limpar} triple/>
                <Button tecla='/' click={operar} operation/>
                <Button tecla='7' click={inserir}/>
                <Button tecla='8' click={inserir}/>
                <Button tecla='9' click={inserir}/>
                <Button tecla='*' click={operar} operation/>
                <Button tecla='4' click={inserir}/>
                <Button tecla='5' click={inserir}/>
                <Button tecla='6' click={inserir}/>
                <Button tecla='-' click={operar} operation/>
                <Button tecla='1' click={inserir}/>
                <Button tecla='2' click={inserir}/>
                <Button tecla='3' click={inserir}/>
                <Button tecla='+' click={operar} operation/>
                <Button tecla='0' click={inserir} duble/>
                <Button tecla='.' click={operar}/>
                <Button tecla='=' click={operar} operation/>
                

               

                

            </div>
            </div>
            
        )
    }
}

export default Calculator;

