import React from "react";
import './Button.css';


class Button extends React.Component {
    render() {
        return(
            
             <button 
             onClick={e => this.props.click() && this.props.click(this.props.tecla)}                                                                   
             className={`button ${this.props.duble ? 'duble' : ''} ${this.props.triple ? 'triple' : ''} ${this.props.operation ? 'operation' : ''}`}>  {/* condicional para nomear a class */}
                {this.props.tecla}
            </button>
        )
    }
}


export default Button;



 /* condicional para nomear a classe - observe que dentro de uma template string o codigo interior é lido como js */
 /* && garante que so executara a funcao click se existir essa props */ 