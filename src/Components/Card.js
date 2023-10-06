import '../Components/DashboardPage/Dashboard.css';
import CustomButton from './CustomButton';

function Card(props) {
    return ( 
        <div className='Card col-lg-12'  style={{backgroundColor:props.complete===true && '#c1fec1', color:props.complete===true && 'white'}} >
          
            <h3> {props.title} </h3> 
            <p> {props.des}</p>
            {/* <p>{date}</p> */}
            <div className='btnwrapper'>
                <button className="btn btn-primary col-lg-5 me-3" onClick={props.update}>Complete</button>
                {/* <button className="btn btn-warning col-lg-5 me-3" onClick={props.update}>In Progress</button> */}
                {/* <button className="btn btn-danger col-lg-5 ms-3" onClick={props.delete}>Delete</button> */}
                </div>
        </div>
     );
}

export default Card;