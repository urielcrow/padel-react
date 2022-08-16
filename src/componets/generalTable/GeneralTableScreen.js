import { useContext , memo, useEffect, useState} from 'react';
import {customeContext} from '../../context/context';

const usersData = [
    {
        id:1,
        name:'Juan Perez',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg',
        position: 1,
        points : 0,
        pointsGenerals: 38,
        close:true
    },
    {
        id:2,
        name:'Pedro Lopez',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg',
        position: 2,
        points : 0,
        pointsGenerals: 35,
        close:true
    },
    {
        id:3,
        name:'Marcelo Artiaga',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg',
        position: 3,
        points : 0,
        pointsGenerals: 27,
        close:true
    }
];

const GeneralTableScreen = memo(() => {

    const { setContext } = useContext(customeContext);
    const [jornada,setJornada] = useState(3);
    const [users,setUsers] = useState(usersData);

    useEffect(() => {
        setContext( context => (
            {   ...context,
                titlePage : 'Tabla General'
            })
        );
    },[setContext]);

    const onChangeJornada = (e)=>{
        setJornada(e.target.value)
    }

    // const onDoubleClick = (e)=>changesValues(e.target.name,false);

    // const onBlur = (e) => changesValues(e.target.name,true);

    const onChangeUser = (e) => changesValues(e.target.name,e.target.value,true);
    
    const changesValues = (id,val,points = false)=>{
       
        const temp = users.map( user => {
            if(user.id === parseInt(id))
                points ? user.points = val : user.disabled = val;
            return user;
        })
        setUsers(temp);
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

                                <div className="d-flex justify-content-end mt-5">
                                    <button type="button" className="btn btn btn-outline-dark me-3" style={{boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)"}}><i className="fa fa-2x fa-check" aria-hidden="true"></i> Guardar cambios</button>
                                    <button type="button" className="btn btn btn-outline-primary" style={{boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)"}}><i class="fa fa-2x fa-lock" aria-hidden="true"></i> Finalizar jornada</button>
                                </div>


                                <div className="table-responsive" style={{padding:25}}>
                                    <table className="table align-middle" style={{marginTop:30}}>
                                            <thead style={{background:"#098BCE",color:"#FFF",height:70,fontSize:15,verticalAlign:'middle',boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.52)",borderRadius:20}}>
                                                <tr>
                                                    <th scope="col" style={{borderTopLeftRadius:20}}>Posición</th>
                                                    <th scope="col">Jugador</th>
                                                    <th scope="col">Pts. Jornada {jornada}</th>
                                                    <th scope="col" style={{borderTopRightRadius:20}}>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody style={{boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)",borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                                            {
                                                users.map(user =>(
                                                    <tr style={{verticalAlign:'middle'}} key={user.id}>
                                                        <th scope="row" style={{paddingLeft: 40}} >{user.position}</th>
                                                        <td> <img style={{width:'50px',marginBottom:'10px',borderRadius:"50%",boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.32)"}} alt="avatar" src={user.img} /> {user.name} </td>
                                                        <td>
                                                            <input type="number" name={user.id} className="form-control" value={user.points} min="0" onChange={onChangeUser} disabled={user.close} style={{width:80,fontSize:20,textAlign:'center'}}/>
                                                        </td>
                                                        <td>{user.pointsGenerals}</td>
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
})

export default GeneralTableScreen;
