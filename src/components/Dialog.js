function Dialog({message, onDialog}){
    return(
        <div 
        style={{
            position: "fixed",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
        }}
        >
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                padding: "50px",
                border: "1px solid #008594"


            }}
        >
            <h3 style={{color: "#008594"}}>{message}</h3>
            <div style={{
                display: "flex",
                alignItems:"center",
                color: "white"
            }}>
                <button onClick={(event)=>event.currentTarget.closest('div').remove()} style={{border:"none", background: "white", color:" #174348", fontSize: "18px", fontWeight:"600", cursor:"pointer", marginRight:"40px"}}>Yes</button>
                <button onClick={()=>onDialog(false)} style={{border:"none", background: "white", color:" #174348", fontSize: "18px", fontWeight:"600", cursor:"pointer"}}>No</button>
            </div>
        </div>
        </div>
    )
}

export default Dialog;