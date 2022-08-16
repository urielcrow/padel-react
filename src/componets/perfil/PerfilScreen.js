import { useContext , useEffect , useState} from 'react';
import { useSelector } from 'react-redux';
import {customeContext} from '../../context/context';

const PerfilScreen = ()=>{

    const {name,image} = useSelector( store => store.auth );

    const { setContext } = useContext(customeContext);

    const [input, setInput] = useState({
        type:'password',
        check:'fa-square color-disabled-check'
    });

    useEffect(() => {
        setContext( context => (
            {   ...context,
                titlePage : 'Mis datos'
            })
        );
    },[setContext]);

    const changeType = (val)=>{
        let [type,check] = ['password','fa-square color-disabled-check'];
        
        if(val === 'password'){
            type = 'text';
            check = 'fa-check-square color-enabled-check';
        }

        setInput({
            type,
            check
        });
    }


    return(
        <div className="main-content">
            
            <div className="main-content-inner">
                <div className="row">
                    <div className="col-lg-12 mt-3">
                        <div className="card">
                            <div className ="card-body">

                                <div className="row">

                                    <div className="col-12 mb-5" style={{position:"relative"}}>
                                        <span style={{position:"absolute",top:-12,left:25,background:"#fff",padding: "0 10px",color:"#ccc"}}>Selecciona un torneo</span>
                                        <div className="d-flex justify-content-between">
                                            <select className="form-control">
                                                <option>Torneo julio 2022</option>
                                                <option>Torneo agosto 2022</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-xs-12 mt-3 text-center">
                                        <h4 className="text-center">Próximo juego</h4>
                                        <h5 className="text-center">Miercoles 28 de julio</h5>
                                        <hr />
                                        <div className="row">
                                            <h1 className="text-center">Cancha 1 <span class="badge bg-secondary">21:30 hrs.</span></h1>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12 mt-3 text-center">
                                        <h4>Ranking: </h4>
                                        <span className="badge bg-secondary" style={{fontSize:40,marginTop:10}}>25</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-content-inner" style={{marginTop:-50}}>
                <div className="row">
                    <div className="col-lg-12 mt-3">
                        <div className="card">
                            <div className ="card-body">
                                <div className="row">
                                    <table className="table">
                                        <thead className="table-dark">
                                        <tr>
                                            <th scope="col">Jornada</th>
                                            <th scope="col">Puntos</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Rankin</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>7</td>
                                                <td>15</td>
                                                <td>25</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>14</td>
                                                <td>9</td>
                                                <td>10</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>-5</td>
                                                <td>-5</td>
                                                <td>15</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="main-content-inner" style={{marginTop:-50}}>
                <div className="row">
                

                    <div className="col-md-6 col-sm-12 mt-3">
                        <div className="card">
                            <div className ="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-xs-12 mt-1 mb-3 text-center">
                                        <h5>Actualiza tu imagen</h5>
                                    </div>
                                    <div className="col-md-12 col-xs-12 mt-5 d-flex justify-content-center">
                                        <div className="position-relative" style={{width:150,border:'2px dashed',padding:8,cursor:'pointer'}}>
                                            <img style={{width:'150px'}} alt="avatar" src={image} />
                                            <i className="fa fa-2x fa-picture-o position-absolute" style={{top:-20,right:-15,color:'#fff',background:'rgb(9, 139, 206)',padding:8,borderRadius:50}} aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-sm -12 mt-3">
                        <div className="card">
                            <div className ="card-body">
                                <div className="row">
                                    <div className="col-md-12 col-xs-12 mt-1 mb-3 text-center">
                                        <h5>Actualiza tu contraseña</h5>
                                    </div>
                                    <div className="col-md-12 col-xs-12 mt-3 text-center">
                                        <div style={{position:"relative"}}>
                                            <span style={{position:"absolute",top:-12,left:25,background:"#fff",padding: "0 10px",color:"#ccc"}}>Nueva contraseña</span>
                                            <input type={input.type} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-xs-12 mt-3 text-center">
                                        <div style={{position:"relative"}}>
                                            <span style={{position:"absolute",top:-12,left:25,background:"#fff",padding: "0 10px",color:"#ccc"}}>Repite la nueva contraseña</span>
                                            <input  type={input.type} className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-4 mb-2">
                                        <div style={{position:'absolute',cursor:'pointer',zIndex:3}} onClick={()=>changeType(input.type)}>
                                            <i className={`fa ${input.check} fa-2x me-1`} style={{cursor:'pointer'}}></i>
                                            <label className="custom-control-label ml-3" style={{cursor:'pointer'}}>Mostrar</label>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2 mb-2 d-flex justify-content-end">
                                        <button type="button" className="btn btn-outline-primary" style={{boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)"}}> Actualizar</button>
                                    </div>


                                   
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default PerfilScreen;