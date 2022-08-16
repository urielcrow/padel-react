import { useContext,useState } from 'react';
import {ContextTournaments} from '../../context/ContextTournaments';

const times = [{
    1: {
        date: "2022-08-30",
        time: "19:50"
    },
    2: {
        date: "2022-08-30",
        time: ""
    }
}];

export const TournamentDates = ()=>{

    const { setScreen,setSearchTournaments} = useContext(ContextTournaments);
    const [jornada,setJornada] = useState(1);
    const [courts,setCourts] = useState(times[0]);//horarios y fechas de partidos en cada cancha

    const onChangeJornada = (e)=>{
        setJornada(e.target.value)
    }

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

        console.log(`${e.target.name} ----- ${e.target.value} ----- ${name}`)

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

    const onCreate = ()=>{
        setScreen(1);
        setSearchTournaments(true);
    }

    return(
        <>
           <button type="button" className="btn btn-outline-dark me-2 mb-md-0 mb-2 d-flex align-items-center" onClick={()=> setScreen(4) }><i className="fa fa-2x fa-arrow-left me-2" aria-hidden="true"></i> Paso 2</button>
            <h4 className="text-center mb-1"> Define fechas y horarios paso 3 de 3 </h4>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-lg btn-outline-primary" onClick={onCreate} style={{boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)"}}> Finalizar</button>
            </div>

            <div className="col-6 mt-3 d-flex justify-content-end">
                <h5 className="mt-3">Jornada </h5>
                <input type="number" className="form-control" value={jornada} min="1" max={12} onChange={onChangeJornada} style={{width:80,fontSize:20,textAlign:'center',marginLeft:4,marginRight:4}}/>
                <h5 className="mt-3"> de 12</h5>
            </div>

            <hr />

            <div className="d-flex justify-content-between mt-5">
                <div style={{position:"relative"}}>
                    <span style={{position:"absolute",top:-12,left:25,background:"#fff",padding: "0 10px",color:"#ccc"}}>Aplicación masiva</span>
                    <input type="date" onChange={onChangeDateMasive} style={{width:200,height:50,fontSize:16,textAlign:'center',marginLeft:4,marginRight:4}}/>
                </div>
                <button type="button" className="btn btn-outline-dark me-3" style={{boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)"}}><i className="fa fa-2x fa-check" aria-hidden="true"></i> Guardar cambios</button>
            </div>

            <div className="table-responsive" style={{padding:25}}>
                <table className="table align-middle" style={{marginTop:30}}>
                    <thead style={{background:"#098BCE",color:"#FFF",height:70,fontSize:15,verticalAlign:'middle',boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.52)",borderRadius:20}}>
                        <tr>
                            <th scope="col" style={{borderTopLeftRadius:20}}>Cancha</th>
                           
                            <th scope="col" style={{borderTopRightRadius:20}}>Horario</th>
                        </tr>
                    </thead>
                    <tbody style={{boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.22)",borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                        {
                            Object.keys(courts).map( (court,index) =>(
                                <tr style={{verticalAlign:'middle'}} key={court}>
                                    <th scope="row" style={{paddingLeft: 40}}> <span className="badge bg-danger" style={{fontSize:25,marginTop:5}}> {court} </span> </th>
                                    <td>
                                        <input type="date" name={court} value={courts[index+1].date} onChange={(e)=>onChangeDateSingle(e,'date')} className="mb-md-0 mb-3" style={{width:120,height:50,fontSize:16,textAlign:'center',marginLeft:4,marginRight:4}}/>
                                        <input type="time" name={court} value={courts[index+1].time} onChange={(e)=>onChangeDateSingle(e,'time')} style={{width:120,height:50,fontSize:16,textAlign:'center',marginLeft:4,marginRight:4}}/>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </>
    )

}