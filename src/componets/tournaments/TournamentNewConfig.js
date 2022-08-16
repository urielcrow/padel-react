import { useContext } from 'react';
import {ContextTournaments} from '../../context/ContextTournaments';
import {useForm,configInput,validateCustome} from '../../hooks/useForm';

export const TournamentNewConfig = ()=>{

    const { setScreen,setSearchTournaments } = useContext(ContextTournaments);

    const [form,updateForm,changeInput,focus,blur] = useForm({
        name : configInput( {val:"", type:"text", required: true}),
        players: configInput( {val:"", type:"number", required: true}),
        journal: configInput( {val:"", type:"number", required: true}),
        dateStart: configInput( {val:"", type:"mail"}),
        dateEnd: configInput( {val:"", type:"date"}),
        courtNumber: configInput( {val:"", type:"number", required: true}),
        playersForCourt: configInput( {val:4, type:"number", required: true,focus:true})
    });

    const sendSubmit = (e)=>{
        e.preventDefault();

        // if(!validateCustome(form,updateForm)){
        //     console.log('pasar')
        //     return
        // }

        // console.log('no pasar')

        setScreen(4);
    }

    const cancelNewTournament = ()=>{
        setScreen(1);
        setSearchTournaments(true);
    }

    return(
        <>
        
            <button type="button" className="btn btn-outline-dark me-2 mb-md-0 mb-2 d-flex align-items-center" onClick={ cancelNewTournament }><i className="fa fa-2x fa-arrow-left me-2" aria-hidden="true"></i> Lista de torneos</button>
            <h4 className="text-center mb-5"> Crear nuevo torneo paso 1 de 3 </h4>

            <form onSubmit={sendSubmit}>
                <div className="row">

                    <div className="form-gp col-md-12">
                        <label className={form.name.focus ? 'focusActive' : ''}>Nombre del torneo</label>
                        <input name="name" type="text" onChange={changeInput} onFocus={focus} onBlur={blur} value={form.name.val} autoComplete="off"/>
                        <i className="fa fa-tag fa-fw"></i>
                        <div className="text-danger">{ form.name.error && 'Obligatorio' }</div>
                    </div>

                    <div className="form-gp col-md-6">
                        <label className={form.players.focus ? 'focusActive' : ''}>Número jugadores</label>
                        <input name="players" type="number" onChange={changeInput} onFocus={focus} onBlur={blur} value={form.players.val} autoComplete="off"/>
                        <i className="fa fa-users fa-fw"></i>
                        <div className="text-danger">{ form.players.error && 'Obligatorio' }</div>
                    </div>

                    <div className="form-gp col-md-6">
                        <label className={form.journal.focus ? 'focusActive' : ''}>Número jornadas</label>
                        <input name="journal" type="number" onChange={changeInput} onFocus={focus} onBlur={blur} value={form.journal.val} autoComplete="off"/>
                        <i className="fa fa-sort-numeric-asc fa-fw"></i>
                        <div className="text-danger">{ form.journal.error && 'Obligatorio' }</div>
                    </div>

                    
                    <div className="form-gp col-md-6 custome-date">
                        <label className="focusActive">Fecha inicio</label>
                        <input name="dateStart" type="date" onChange={changeInput} onFocus={focus} onBlur={blur} value={form.dateStart.val} autoComplete="off" style={{padding:'0!important'}}/>
                        <div className="text-danger">{ form.dateStart.error && 'Obligatorio' }</div>
                    </div>

                    <div className="form-gp col-md-6 custome-date">
                        <label className="focusActive">Fecha fin</label>
                        <input name="dateEnd" type="date" onChange={changeInput} onFocus={focus} onBlur={blur} value={form.dateEnd.val} autoComplete="off" style={{padding:'1px!important'}}/>
                        <div className="text-danger">{ form.dateEnd.error && 'Obligatorio' }</div>
                    </div>

                    <div className="form-gp col-md-6">
                        <label className={form.courtNumber.focus ? 'focusActive' : ''}>Número canchas</label>
                        <input name="courtNumber" type="number" onChange={changeInput} onFocus={focus} onBlur={blur} value={form.courtNumber.val} autoComplete="off"/>
                        <i className="fa fa-columns fa-fw"></i>
                        <div className="text-danger">{ form.courtNumber.error && 'Obligatorio' }</div>
                    </div>

                    <div className="form-gp col-md-6">
                        <label className={form.playersForCourt.focus ? 'focusActive' : ''}>Jugadores por cancha</label>
                        <input name="playersForCourt" type="number" onChange={changeInput} onFocus={focus} onBlur={blur} value={form.playersForCourt.val} autoComplete="off"/>
                        <i className="fa fa-list-ol fa-fw"></i>
                        <div className="text-danger">{ form.playersForCourt.error && 'Obligatorio' }</div>
                    </div>

                    <div className="col-12 mt-4 d-flex justify-content-center">
                        <button type="submit" className="btn btn-outline-dark me-2 mb-md-0 mb-2 d-flex align-items-center"> Ir a paso 2 <i className="fa fa-2x fa-arrow-right ms-3" aria-hidden="true"></i></button>
                    </div>

                </div>
            </form>

        </>
    )

}