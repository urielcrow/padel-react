import { useContext} from 'react';
import {ContextTournaments} from '../../context/ContextTournaments';

export const SearchTournament = ()=>{

    const { setScreen, setSearchTournaments } = useContext(ContextTournaments);

    const newTournament = ()=>{
        setScreen(2);
        setSearchTournaments(false);
    }

    return(
        <div className="main-content-inner">
            <div className="row">
                <div className="col-lg-12 mt-3">
                    <div className="card">
                        <div className ="card-body">

                            <div className="d-flex justify-content-end">
                                <button type="button" className="btn btn-lg btn-outline-primary" onClick={ newTournament } style={{boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)"}}><i className="fa fa-2x fa-plus" aria-hidden="true"></i> Crear Torneo</button>
                            </div>
                        
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <div className="row card-counter primary">
                                        <div className="col-4">
                                            <i className="fa fa-trophy fa-3x"></i>
                                        </div>
                                        <div className="col-8">
                                            <span className="count-name">Torneos: </span>
                                            <span className="count-numbers">0</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5 mt-5">
                                    <div style={{position:"relative"}}>
                                        <span style={{position:"absolute",top:-12,left:25,background:"#fff",padding: "0 10px",color:"#ccc"}}>Selecciona un torneo</span>
                                        <select className="form-control">
                                            <option></option>
                                            <option>Torneo julio 2022</option>
                                            <option>Torneo agosto 2022</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-3 mt-5">
                                    <div style={{position:"relative"}}>
                                        <span style={{position:"absolute",top:-12,left:25,background:"#fff",padding: "0 10px",color:"#ccc"}}>Estatus</span>
                                        <select className="form-control">
                                            <option>Activo</option>
                                            <option>Archivado</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}