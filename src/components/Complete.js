import './Complete.css';
function Complete({onClearCompleted}){
   
    return(
        <div className='main'>
            <input type="checkbox" onClick={onClearCompleted} className="hideCheck" /><span>Hide completed</span>
        </div>
    )

}
export default Complete;