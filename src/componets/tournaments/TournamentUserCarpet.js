
export const TournamentUserCarpet = ({id,name,img,select,positionInit,lastPosition,changeSelectSingle,changePositionInit})=>{

    return(
            <div className="col-12" style={{marginBottom:50,position:"relative"}} >
                <div style={{
                        background:"#fff",
                        padding:10,
                        borderRadius:6,
                        position:"relative",
                        boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.52)"
                    }}>
                    <div style={{position:"absolute",top:-40,left:20}}><img style={{width:'70px',marginBottom:'10px',borderRadius:"50%",boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.52)"}} alt="avatar" src={img} /></div>
                    <div className="mt-2" style={{marginLeft:90}}>{name}</div>
                    <span className="badge bg-secondary" style={{fontSize:30}}>{lastPosition}</span>
                    <div className="mt-2" style={{color:"gray",fontSize:12}}>Última posición obtenida</div>
                    
                    <div className="d-flex justify-content-end mt-n3" style={{position:"absolute",right:10,top:40}}>
                        <label className="mt-2 me-3" style={{color:"gray"}}>Posición inicial:</label>
                        <input type="number" name={id} className="form-control" value={positionInit} onChange={changePositionInit} min="0" style={{width:70,fontSize:16,textAlign:'center',marginRight:5}}/>
                        <i className={`fa fa-3x ${select ? "fa-check-square-o" : "fa-square-o"} `} aria-hidden="true" onClick={ ()=>changeSelectSingle(id)} style={{cursor:"pointer"}}></i>
                    </div>
                    
                </div>
            </div>
    )
}
