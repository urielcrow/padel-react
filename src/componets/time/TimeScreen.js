import { useContext , useEffect, useState } from 'react';
import {customeContext} from '../../context/context';


const usersData = [
    {
        id:1,
        name:'Juan Perez',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg',
        disabled: true,
        position: 1,
        points : 0,
        pointsGenerals: 38
    },
    {
        id:2,
        name:'Pedro Lopez',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg',
        disabled: true,
        position: 2,
        points : 0,
        pointsGenerals: 35
    },
    {
        id:3,
        name:'Marcelo Artiaga',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg',
        disabled: true,
        position: 3,
        points : 0,
        pointsGenerals: 27
    },
    {
        id:4,
        name:'Alexander',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg',
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
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg',
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

const TimeScreen = () => {

    const { setContext } = useContext(customeContext);
    const [jornada,setJornada] = useState(3);
    const [users,setUsers] = useState(usersData);//Lista de usuarios
    const [courts,setCourts] = useState(times[0]);//horarios y fechas de partidos en cada cancha
    const numberPlayers = 4;

    useEffect(() => {
        setContext( context => (
            {   ...context,
                titlePage : 'Horarios'
            })
        );
    },[setContext]);

    // useEffect(() => {
    //     let temp = {};
    //     const coursNumber = users.length / numberPlayers;//definimos el total de canchas ----> total de jugadores entre el numero de jugadores por cancha
    //     for(let i=1; i <= coursNumber; i++){
    //         temp = {
    //             ...temp,
    //             [i]:{
    //                 date:"",
    //                 time:""
    //             }
    //         }
    //     }
    //     setCourts(temp);
    // },[users.length]);

    const onChangeJornada = (e)=>{
        setJornada(e.target.value)
    }

    // const onDoubleClick = (e)=>changesValues(e.target.name,false);

    // const onBlur = (e) => changesValues(e.target.name,true);

    // const onChangeUser = (e) => changesValues(e.target.name,e.target.value,true);
    
    // const changesValues = (id,val,points = false)=>{
       
    //     const temp = users.map( user => {
    //         if(user.id === id)
    //             points ? user.points = val : user.disabled = val;
    //         return user;
    //     })
    //     setUsers(temp);
    // }

    const onChangeDateMasive = (e)=>{
        const temp = {
            ...courts
        };

        Object.keys(temp).forEach(element => {
            temp[element].date = e.target.value
        });

        setCourts(temp);
    }

    const onChangeDateSingle = (e,name)=>{
        setCourts(
            {
                ...courts,
                [e.target.name] : {
                    ...courts[e.target.name],
                    [name]:e.target.value
                }
            }
        )
    }

    return (
        <div className="main-content">
            <div className="main-content-inner">
                <div className="row">
                    <div className="col-lg-12 mt-3">
                        <div className="card">
                            <div className ="card-body">
                                <div className="row">
                                    <div className="col-6 mt-3" style={{position:"relative"}}>
                                        <span style={{position:"absolute",top:-12,left:25,background:"#fff",padding: "0 10px",color:"#ccc"}}>Selecciona un torneo</span>
                                        <div className="d-flex justify-content-between">
                                            <select className="form-control">
                                                <option>Torneo julio 2022</option>
                                                <option>Torneo agosto 2022</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-3 d-flex justify-content-end">
                                        <h5 className="mt-3">Jornada </h5>
                                        <input type="number" className="form-control" value={jornada} min="1" max={3} onChange={onChangeJornada} style={{width:80,fontSize:20,textAlign:'center',marginLeft:4,marginRight:4}}/>
                                        <h5 className="mt-3"> de 3</h5>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-between mt-5">
                                    <div style={{position:"relative"}}>
                                        <span style={{position:"absolute",top:-12,left:25,background:"#fff",padding: "0 10px",color:"#ccc"}}>Aplicación masiva</span>
                                        <input type="date" onChange={onChangeDateMasive} style={{width:200,height:50,fontSize:16,textAlign:'center',marginLeft:4,marginRight:4}}/>
                                    </div>
                                    <button type="button" className="btn btn-outline-dark me-3" style={{boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)"}}><i className="fa fa-2x fa-check" aria-hidden="true"></i> Guardar cambios</button>
                                </div>
                                
                                <div class="table-responsive" style={{padding:25}}>
                                    <table className="table align-middle" style={{marginTop:30}}>
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
                                                                    <input type="date" className="mb-md-0 mb-3" name={(index + numberPlayers) / numberPlayers}  value={ courts[ (index + numberPlayers) / numberPlayers ] ?  courts[ (index + numberPlayers) / numberPlayers ].date : ""} onChange={(e)=>onChangeDateSingle(e,'date')} style={{width:120,height:50,fontSize:16,textAlign:'center',marginLeft:4,marginRight:4}}/>
                                                                    <input type="time" name={(index + numberPlayers) / numberPlayers}  value={ courts[ (index + numberPlayers) / numberPlayers ] ?  courts[ (index + numberPlayers) / numberPlayers ].time : ""} onChange={(e)=>onChangeDateSingle(e,'time')}  style={{width:120,height:50,fontSize:16,textAlign:'center',marginLeft:4,marginRight:4}}/>
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
                    </div>
                 </div>        
            </div>
        </div>
    )
}

export default TimeScreen;
