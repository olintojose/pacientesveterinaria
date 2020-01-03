import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component{
    state={
        citas: []

    }

    crearNuevaCita=datos=>{
        //copiar state actual
        const citas=[...this.state.citas, datos];

        //agregando el nuevo state
        this.setState({
            citas 
        })
    }
    render(){
        return(
            <div className="container">
                <Header
                titulo='Administrador Pacientes Veterinaria'
                />

                <div className="row">
                    <div className="col-md10 mx-auto">
                        <NuevaCita
                        crearNuevaCita={this.crearNuevaCita}
                        />
                    </div>


                    <div className="mt-5 col-md-10 mx-auto">
                        <ListaCitas
                         citas={this.state.citas}   
                        />
                    </div>
                </div>

            </div>
        );
    }
}
export default App;
