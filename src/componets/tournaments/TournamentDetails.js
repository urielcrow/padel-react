import { useContext,useState } from 'react';
import {ContextTournaments} from '../../context/ContextTournaments';

const usersData = [
    {
        id:1,
        name:'Juan Perez',
        img:'http://localhost/diversos/apis/backend-cliente-almer/img/no-image.jpg',
        disabled: true,
        position: 1,
        points : 0,
        pointsGenerals: 38
    },
    {
        id:2,
        name:'Pedro Lopez',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg',
        disabled: true,
        position: 2,
        points : 0,
        pointsGenerals: 35
    },
    {
        id:3,
        name:'Marcelo Artiaga',
        img:'http://localhost/diversos/apis/backend-cliente-almer/img/no-image.jpg',
        disabled: true,
        position: 3,
        points : 0,
        pointsGenerals: 27
    },
    {
        id:4,
        name:'Alexander',
        img:'http://localhost/diversos/apis/backend-cliente-almer/img/no-image.jpg',
        disabled: true,
        position: 4,
        points : 0,
        pointsGenerals: 27
    },
    {
        id:5,
        name:'Juan Perez',
        img:'http://localhost/diversos/apis/backend-cliente-almer/img/no-image.jpg',
        disabled: true,
        position: 1,
        points : 0,
        pointsGenerals: 38
    },
    {
        id:6,
        name:'Pedro Lopez',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg',
        disabled: true,
        position: 2,
        points : 0,
        pointsGenerals: 35
    },
    {
        id:7,
        name:'Marcelo Artiaga',
        img:'http://localhost/diversos/apis/backend-cliente-almer/img/no-image.jpg',
        disabled: true,
        position: 3,
        points : 0,
        pointsGenerals: 27
    },
    {
        id:8,
        name:'Alexander',
        img:'http://localhost/diversos/apis/backend-cliente-almer/img/no-image.jpg',
        disabled: true,
        position: 4,
        points : 0,
        pointsGenerals: 27
    }
];

const times = [{
    "1": {
        "date": "2022-08-30",
        "time": "19:50"
    },
    "2": {
        "date": "2022-08-30",
        "time": ""
    }
}];

export const TournamentDetails = ()=>{

    const { setScreen, setSearchTournaments } = useContext(ContextTournaments);

    const [jornada,setJornada] = useState(3);
    const [users,setUsers] = useState(usersData);//Lista de usuarios
    const [courts,setCourts] = useState(times[0]);//horarios y fechas de partidos en cada cancha
    const numberPlayers = 4;

    const onList= ()=>{
        setScreen(1);
        setSearchTournaments(true);
    }

    const onChangeJornada = (e)=>{
        setJornada(e.target.value)
    }

    return(
        <>
            <button type="button" className="btn btn-outline-dark mb-4 d-flex align-items-center" onClick={onList}><i className="fa fa-2x fa-arrow-left me-2" aria-hidden="true"></i> Lista de torneos</button>
            <h4 className="text-center mb-4">Torneo julio 2022</h4>

            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-lg btn-outline-primary" style={{boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)"}}><i className="fa fa-2x fa-refresh" aria-hidden="true"></i> Actualizar información</button>
            </div>

            <div className="row mt-5">
                <div className="col-md-4 col-12 position-relative icon-detail">
                    <div className="detail mb-2 mt-2">Número de jugadores</div>
                    <i class="fa fa-users position-absolute" aria-hidden="true"></i>
                    <span className="detail">34</span>
                </div>
                <div className="col-md-4 col-12 position-relative icon-detail">
                    <div className="detail mb-3 mt-2">Número de jornadas</div>
                    <i class="fa fa-sort-numeric-asc position-absolute" aria-hidden="true"></i>
                    <span className="detail">17</span>
                </div>
                <div className="col-md-4 col-12 position-relative icon-detail">
                    <div className="detail mb-2 mt-2">Fecha de inicio</div>
                    <i class="fa fa-calendar-o position-absolute" aria-hidden="true"></i>
                    <span className="detail">02-08-2022</span>
                </div>
                <div className="col-md-4 col-12 position-relative icon-detail">
                    <div className="detail mb-2 mt-2">Fecha fin</div>
                    <i class="fa fa-calendar position-absolute" aria-hidden="true"></i>
                    <span className="detail">28-08-2022</span>
                </div>
                <div className="col-md-4 col-12 position-relative icon-detail">
                    <div className="detail mb-2 mt-2">Número de canchas</div>
                    <i class="fa fa-columns position-absolute" aria-hidden="true"></i>
                    <span className="detail">8</span>
                </div>
                <div className="col-md-4 col-12 position-relative icon-detail">
                    <div className="detail mb-2 mt-2">Jugadores por cancha</div>
                    <i class="fa fa-list-ol position-absolute" aria-hidden="true"></i>
                    <span className="detail">4</span>
                </div>

                <div className="col-12">
                <hr />
                </div>

                <div className="col-12 mt-3 d-flex justify-content-start">
                    <h5 className="mt-3">Jornada </h5>
                    <input type="number" className="form-control" value={jornada} min="1" max={3} onChange={onChangeJornada} style={{width:80,fontSize:20,textAlign:'center',marginLeft:4,marginRight:4}}/>
                    <h5 className="mt-3"> de 3</h5>
                </div>

                
                <div className="col-12">
                    
                    <div class="table-responsive" style={{padding:25}}>
                        <table className="table align-middle" style={{marginTop:0}}>
                            <thead style={{background:"#098BCE",color:"#FFF",height:70,fontSize:15,verticalAlign:'middle',boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.52)",borderRadius:20}}>
                                <tr>
                                    <th scope="col" style={{borderTopLeftRadius:20}}>Posición</th>
                                    <th scope="col">Jugador</th>
                                    <th scope="col">Cancha</th>
                                    <th scope="col" style={{borderTopRightRadius:20}}>Horario</th>
                                </tr>
                            </thead>
                            <tbody style={{boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)",borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                                {
                                    users.map( (user,index) =>(

                                        <tr style={{verticalAlign:'middle'}} key={user.id}>
                                            <th scope="row" style={{paddingLeft: 40}}>{user.id}</th>
                                            <td> <img style={{width:'50px',marginBottom:'10px',borderRadius:"50%",boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)"}} alt="avatar" src={user.img} /> {user.name} </td>
                                            { 
                                                (index + numberPlayers) % numberPlayers === 0 && 
                                                <>
                                                    <td ><span className="badge bg-danger" style={{fontSize:25,marginTop:5}}> { (index + numberPlayers) / numberPlayers} </span></td>
                                                    <td>
                                                        <input type="date" className="mb-md-0 mb-3" value={ courts[ (index + numberPlayers) / numberPlayers ] ?  courts[ (index + numberPlayers) / numberPlayers ].date : ""} style={{width:120,height:50,fontSize:16,textAlign:'center',marginLeft:4,marginRight:4}} disabled/>
                                                        <input type="time" value={ courts[ (index + numberPlayers) / numberPlayers ] ?  courts[ (index + numberPlayers) / numberPlayers ].time : ""} style={{width:120,height:50,fontSize:16,textAlign:'center',marginLeft:4,marginRight:4}} disabled/>
                                                    </td>
                                                </>
                                            }
                                            
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </>
    )

}