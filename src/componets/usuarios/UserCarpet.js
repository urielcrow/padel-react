
export const UserCarpet = ({id,mail,name,img,disabledMail,disabledName,deleteUser,doubleClickName,doubleClickMail,blurMail,blurName,updateName,updateMail})=>{
    return(
            <div className="col-md-4" style={{marginBottom:50}}>
                <div style={{
                    background:"#fff",
                    padding:10,
                    borderRadius:6,
                    position:"relative",
                    boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.52)"
                    }}>
                    <div style={{position:"absolute",top:-40,left:20}}><img style={{width:'70px',marginBottom:'10px',borderRadius:"50%",boxShadow: "-3px 3px 15px -2px rgba(0,0,0,0.52)"}} alt="avatar" src={img} /></div>
                    <div className="d-flex justify-content-end mt-4"><input type="text" name={id} className="form-control" value={name} onChange={updateName} onDoubleClick={doubleClickName} onBlur={blurName} readOnly={disabledName} style={{textAlign:"right"}}/></div>
                    <div className="d-flex justify-content-center"><hr style={{width:"80%"}}/></div>
                    <div className="d-flex justify-content-between">
                        <input type="text" name={id} className="form-control" value={mail} onChange={updateMail} onDoubleClick={doubleClickMail} onBlur={blurMail} readOnly={disabledMail} style={{marginRight:5}}/>
                        <button type="button" className="btn btn btn-outline-danger" onClick={()=>deleteUser(name,id,img)}><i className="fa fa-trash fa-2x" aria-hidden="true"></i></button>
                    </div>
                    
                </div>
            </div>
    )
}
