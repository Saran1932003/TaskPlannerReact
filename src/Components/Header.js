import '../App.css';
import CustomButton from './CustomButton';

function Header(props) {
    return ( 
        <div className='header' >
            <h1>Admin Task Assigner</h1>
            <div className='btn-primary col-lg-4' >
                <CustomButton  click={props.handleInput}  name='Add Task' bg='white' color='black' />
            </div>

        </div>
     );
}

export default Header;