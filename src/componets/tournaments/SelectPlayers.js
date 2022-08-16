import { useContext, useState, useRef } from 'react';
import Swal from 'sweetalert2';
import { ContextTournaments } from '../../context/ContextTournaments';
import { TournamentUserCarpet } from './TournamentUserCarpet';

const usersData = [
    {
        id:1,
        name:'Juan Perez',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg',
        lastPosition: 1,
        select:false,
        positionInit: 1,
    },
    {
        id:2,
        name:'Natalia Lopez',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg',
        lastPosition: 2,
        select:false,
        positionInit: 2,
    },
    {
        id:3,
        name:'Marco Artiaga',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg',
        lastPosition: 3,
        select:false,
        positionInit: 3,
    }
];

export const SelectPlayers = ()=>{

    const { setScreen } = useContext(ContextTournaments);
    const [users,setUsers] = useState(usersData);//Data de usuarios
    const [usersSearch,setUsersSearch] = useState([]);//Espejo de users para las busquedas
    const [inputSearch,setInputSearch] = useState("");//input de bsuqueda
    const [selectMaster,setSelectMaster] = useState(false);//El select master
    const usersPositions= useRef([]);//Guardamos la posición que tendra cada jugador, es la data que enviaremos al backend


    const searchUser = (e)=>{
        setInputSearch(e.target.value);
        const like = new RegExp(`^.*${e.target.value}.*$`,"i");
        setUsersSearch([
            ...users.filter( user => user.name.match(like) )
        ]);
    }

    const changeSelectMaster = ()=>{

        setSelectMaster(!selectMaster);

        const temp = users.map( user => {
            user.select = !selectMaster
            if(user.select){
                usersPositions.current = usersPositions.current = [
                    ...usersPositions.current,
                    {
                        id:user.id,
                        position:user.positionInit
                    } 
                ]
            }
            else
                usersPositions.current = [];

            return user;
        });

        setUsers(temp);
    }

    const changeSelectSingle = (id)=>{
    
        const temp = users.map( user => {
            if(user.id === id){
                user.select = !user.select;

                if(user.select){
                    usersPositions.current = usersPositions.current = [
                        ...usersPositions.current,
                        {
                            id,
                            position:user.positionInit
                        } 
                    ]
                }
                else
                    usersPositions.current = usersPositions.current.filter( user => user.id !== id );
            }
            return user;
        });

        setUsers(temp);
    }

    const changePositionInit = (e)=>{
        const temp = users.map( user =>{
            if( user.id === parseInt(e.target.name) )
                user.positionInit = parseInt(e.target.value);
            return user;
        });
        setUsers(temp);
    }

    const saveListUser = ()=>{
        if( !usersPositions.current.length){
            Swal.fire({
                confirmButtonColor: '#3085d6',
                icon: 'info',
                title: 'Debes seleccionar a los jugadores',
                showConfirmButton: true,
            });
            return;
        }

        setScreen(5);
    }

    return(
        <>
            <button type="button" className="btn btn-outline-dark me-2 mb-md-0 mb-2 d-flex align-items-center" onClick={()=> setScreen(2) }><i className="fa fa-2x fa-arrow-left me-2" aria-hidden="true"></i> Paso 1</button>
            <h4 className="text-center mb-1"> Selecciona a los jugadores paso 2 de 3 </h4>
           
            <div className="row mt-3">
                <div className="col-md-4">
                    <div className="row card-counter primary">
                        <div className="col-4">
                            <i className="fa fa-users fa-3x"></i>
                        </div>
                        <div className="col-8">
                            <span className="count-name">Jugadores: </span>
                            <span className="count-numbers">{ inputSearch ? usersSearch.length : users.length}</span>
                        </div>
                    </div>
                </div>
                <div className="col-8 mt-5">
                    <input type="text" placeholder="Buscar jugador..."  className="form-control" value={inputSearch} onChange={searchUser}/>
                </div>
            </div>

            <div className="row mt-5" style={{}}>

                <div className="col-12 mb-5 d-flex justify-content-end">
                    <b>Total Seleccionados: </b>
                    <span className="badge bg-danger" style={{fontSize:30,marginRight:10,marginLeft:5}}>{ usersPositions.current.length }</span>

                    <b>Seleccionar todos: </b>
                    <i className="fa fa-3x fa-square-o ms-4" aria-hidden="true" onClick={changeSelectMaster} style={{cursor:"pointer"}}></i>
                </div>

                {
                        inputSearch 
                    ?
                        usersSearch.map( user => ( 
                            <TournamentUserCarpet key={user.id} {...user} changeSelectSingle={changeSelectSingle} changePositionInit={changePositionInit}/>
                        )) 
                    :
                        users.map( user => ( 
                            <TournamentUserCarpet key={user.id} {...user} changeSelectSingle={changeSelectSingle} changePositionInit={changePositionInit}/>
                        ))
                }

                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-outline-dark me-2 mb-md-0 mb-2 d-flex align-items-center" onClick={saveListUser}> Ir a paso 3 <i className="fa fa-2x fa-arrow-right ms-3" aria-hidden="true"></i></button>
                </div>

            </div>
                   

        </>
    )

}