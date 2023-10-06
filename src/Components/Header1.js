import '../App.css';
import CustomButton from './CustomButton';

function Header1(props) {
    return ( 
        <div className='header1 row' >
            <h1 className='col-lg-7'>Task Viewer</h1>
            <div className='btnWrapper  col-lg-4' >
                <CustomButton  click={props.handleInput}  name='View Tasks' bg='white' color='black' />
            </div>

        </div>
     );
}

export default Header1;