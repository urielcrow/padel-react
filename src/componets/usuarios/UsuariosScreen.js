import React, {useState,useRef} from 'react';
import Swal from 'sweetalert2';
import {UserCarpet } from './UserCarpet';

const usersData = [
    {
        id:1,
        name:'Juan Perez',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-2.13ae2ce3e12f4cfed420.jpg',
        disabledName: true,
        disabledMail: true,
        mail:"urielcrow@gmail.com"
    },
    {
        id:2,
        name:'Natalia Lopez',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg',
        disabledName: true,
        disabledMail: true,
        mail:"urielcrow@gmail.com"
    },
    {
        id:3,
        name:'Marco Artiaga',
        img:'https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg',
        disabledName: true,
        disabledMail: true,
        mail:"urielcrow@gmail.com"
    }
];

const UsuariosScreen = () => {

    const [users,setUsers] = useState(usersData);//Data de usuarios
    const [usersSearch,setUsersSearch] = useState([]);//Espejo de users para las busquedas
    const [inputSearch,setInputSearch] = useState("");//input de bsuqueda
    const [newUser,setNewUser] = useState({//form nuevo usuario
        nameUser:"",
        mailUser:""
    });

    const dataChange = useRef({//monitoreamos algun cambio en los input para mandar al backend
        name:"",
        mail:""
    });
    
    const updateName = (e)=>{
        updateData(e.target.name,e.target.value,true);
    }

    const updateMail = (e)=>{
        updateData(e.target.name,e.target.value);
    }

    const updateData = (id,val,name=false)=>{
        const temp = users.map( user => {
            if(user.id === parseInt(id))
            name ? user.name = val : user.mail = val;
            return user;
        })
        setUsers(temp);
    }

    const doubleClickName = (e)=>{
        dataChange.current.name = e.target.value.trim();
        toggleDisabled(e.target.name,false,true);
    }

    const doubleClickMail = (e)=>{
        dataChange.current.mail = e.target.value.trim();
        toggleDisabled(e.target.name,false);
    }
    
    const blurMail = (e) =>{
        if(dataChange.current.mail !== e.target.value.trim()){
            Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            }).fire({
                icon: 'success',
                title: `E-mail actualizado`
            })
        }
           
        toggleDisabled(e.target.name,true);
    }

    const blurName = (e) =>{
        if(dataChange.current.name !== e.target.value.trim()){
            Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true
            }).fire({
                icon: 'success',
                title: `Nombre actualizado`
            })
        }
            
        toggleDisabled(e.target.name,true,true);
    }

    const toggleDisabled = (id,val,name=false)=>{
        const temp = users.map( user => {
            if(user.id === parseInt(id))
               name ? user.disabledName = val : user.disabledMail = val;
            return user;
        })
        setUsers(temp);
    }

    const deleteUser = (name,id,img)=>{
        Swal.fire({
            title: '',
            text: `Eliminar a ${name}` ,
            imageUrl: img,
            imageWidth: 100,
            imageHeight: 100,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'No'
        }).then((result) => {

            
            if(result.isConfirmed){

                setUsers([
                    ...users.filter( user => user.id !== id )
                ]);
    
                setUsersSearch([
                    ...usersSearch.filter( user => user.id !== id )
                ]);
    

                Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true
                }).fire({
                    icon: 'success',
                    title: `se eliminó a: ${name}`
                })

            } 
        })
    }


    const searchUser = (e)=>{
        setInputSearch(e.target.value);
        const like = new RegExp(`^.*${e.target.value}.*$`,"i");
        setUsersSearch([
            ...users.filter( user => user.name.match(like) )
        ]);
    }

    const addUser = ()=>{

        if( newUser.nameUser === "" || newUser.mailUser === ""){
            Swal.fire({
                confirmButtonColor: '#3085d6',
                icon: 'info',
                title: 'Nombre y E-mail son obligatorios',
                showConfirmButton: true,
            });
            return;
        }

        if(!newUser.mailUser.match(/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/)){
            Swal.fire({
                confirmButtonColor: '#3085d6',
                icon: 'info',
                title: 'E-mail no valido',
                showConfirmButton: true,
            });
            return;
        }

        const correoExistente = users.find( user => user.mail === newUser.mailUser)
        if(correoExistente){
            Swal.fire({
                confirmButtonColor: '#3085d6',
                icon: 'info',
                title: 'E-mail ya existe',
                showConfirmButton: true,
            });
            return;
        }

        Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        }).fire({
            icon: 'success',
            title: `se agrego a: ${newUser.nameUser}`
        });

        setUsers([
            ...users,
            {
                id:users.length + 1,
                name:newUser.nameUser,
                img:'http://localhost/diversos/apis/backend-cliente-almer/img/no-image.jpg',
                disabledName: true,
                disabledMail: true,
                mail:newUser.mailUser
            }
        ])

        setUsersSearch([
            ...usersSearch,
            {
                id:users.length + 1,
                name:newUser.nameUser,
                img:'http://localhost/diversos/apis/backend-cliente-almer/img/no-image.jpg',
                disabledName: true,
                disabledMail: true,
                mail:newUser.mailUser
            }
        ])

        setNewUser({
            nameUser:"",
            mailUser:""
        });

    }

    const newUserOnChange = (e)=>{
        setNewUser(
            {
                ...newUser,
                [e.target.name]:e.target.value
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
                                    <div className="col-md-4">
                                        <input type="text" placeholder="Nombre..." value={newUser.nameUser} onChange={newUserOnChange} name="nameUser" className="form-control" />
                                    </div>
                                    <div className="col-md-4">
                                        <input type="text" placeholder="E-mail..." value={newUser.mailUser} onChange={newUserOnChange} name="mailUser" className="form-control" />
                                    </div>
                                    <div className="col-md-4">
                                        <button type="button" className="btn btn btn-outline-primary" onClick={addUser} style={{boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)"}}><i className="fa fa-plus" aria-hidden="true"></i></button>
                                    </div>
                                   
                                </div>

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

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="main-content-inner">
                <div className="card">
                    <div className ="card-body">
                        <div className="row">
                            {
                                    inputSearch 
                               ?
                                    usersSearch.map( user => ( 
                                        <UserCarpet 
                                            key={user.id}
                                            {...user} 
                                            deleteUser={deleteUser} 
                                            doubleClickName={doubleClickName}
                                            doubleClickMail={doubleClickMail}
                                            blurMail={blurMail}
                                            blurName={blurName}
                                            updateName={updateName}
                                            updateMail={updateMail}
                                        /> 
                                    )) 
                               :
                                    users.map( user => ( 
                                        <UserCarpet 
                                            key={user.id}
                                            {...user} 
                                            deleteUser={deleteUser} 
                                            doubleClickName={doubleClickName}
                                            doubleClickMail={doubleClickMail}
                                            blurMail={blurMail}
                                            blurName={blurName}
                                            updateName={updateName}
                                            updateMail={updateMail}
                                        /> 
                                    ))
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UsuariosScreen;

