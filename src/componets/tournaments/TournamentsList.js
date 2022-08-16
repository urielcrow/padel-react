import { useState, useContext} from 'react';
import {ContextTournaments} from '../../context/ContextTournaments';

const usersData = [
    {
        id:1,
        name:'Juan Perez',
        img:'http://localhost/diversos/apis/backend-cliente-almer/img/no-image.jpg',
        position: 1,
        points : 0,
        pointsGenerals: 38,
        close:true
    },
    {
        id:2,
        name:'Pedro Lopez',
        img:'https://aseemp.com.mx/sts/backend-cliente-sts/temp/67aa4a4241dbadc26ffa9b055608993b.jpg',
        position: 2,
        points : 0,
        pointsGenerals: 35,
        close:true
    },
    {
        id:3,
        name:'Marcelo Artiaga',
        img:'http://localhost/diversos/apis/backend-cliente-almer/img/no-image.jpg',
        position: 3,
        points : 0,
        pointsGenerals: 27,
        close:true
    }
];

export const TournamentsList = ()=>{

    const [users,setUsers] = useState(usersData);
    const { setScreen,setSearchTournaments } = useContext(ContextTournaments);

    const detailTournament = ()=>{
        setScreen(3);
        setSearchTournaments(false);
    }

    return(
        <div className="table-responsive" style={{padding:25}}>
            <table className="table align-middle" style={{marginTop:30}}>
                <thead style={{background:"#098BCE",color:"#FFF",height:70,fontSize:15,verticalAlign:'middle',boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.52)",borderRadius:20}}>
                    <tr>
                        <th scope="col" style={{borderTopLeftRadius:20}}>No.</th>
                        <th scope="col">Torneo</th>
                        <th scope="col">F. creación</th>
                        <th scope="col">Jugadores</th>
                        <th scope="col">Avance Jornadas</th>
                        <th scope="col" style={{borderTopRightRadius:20}}>Opciones</th>
                    </tr>
                </thead>
                <tbody style={{boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)",borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                {
                    users.map(user =>(
                        <tr style={{verticalAlign:'middle'}} key={user.id}>
                            <th scope="row" style={{paddingLeft: 40}} >{user.position}</th>
                            <td> Torneo julio 2022 </td>
                            <td> 12-05-2022 </td>
                            <td> 30 </td>
                            <td> <progress value="60" max="100"></progress> 60%</td>
                            <td> 
                                <button type="button" title="Detalles" className="btn btn-outline-success me-2 mb-md-0 mb-2" onClick={detailTournament}><i className="fa fa-plus " aria-hidden="true"></i></button>
                                <button type="button" title="Eliminar" className="btn btn-outline-danger me-2 mb-md-0 mb-2"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                <button type="button" title="Archivar / Desarchivar" className="btn btn-outline-secondary"><i className="fa fa-history" aria-hidden="true"></i></button>
                            </td>
                        </tr>
                    ))
                } 
                </tbody>
            </table>
        </div>
    )

}