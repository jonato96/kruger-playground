import './header.css';
import { NavLink } from 'react-router-dom';


const Header = ()=>{
    return(
        // <div className='header'>
        //     <img src='https://scontent.fesm2-1.fna.fbcdn.net/v/t1.18169-9/21617587_1479105895458113_303468523533041023_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oBLwkf4SkpYAX_nzjyM&_nc_ht=scontent.fesm2-1.fna&oh=00_AfDjGdqQ4ecEyVikTZFTxW3zULfgAi0Qa1KBuzRSzmKwfg&oe=63DB0EE2' alt='kruger logo'/>
        //     <h1>KrugerStar</h1>
        // </div>
        <nav>
            <div className='header-container'>
                <div className='izq'>
                    <NavLink style={({ isActive }) => ({
                        textDecoration: isActive ? 'solid underline black 1px' : 'none', 
                    })} to='/'>Home</NavLink>
                    <NavLink style={({ isActive }) => ({
                        textDecoration: isActive ? 'solid underline black 1px' : 'none', 
                    })} to='/imc'>IMC Calculator</NavLink>
                    <NavLink style={({ isActive }) => ({
                        textDecoration: isActive ? 'solid underline black 1px' : 'none', 
                    })} to='/age'>Age Calculator</NavLink>
                </div>
                <div className='logo'>
                    <img src='https://scontent.fesm2-1.fna.fbcdn.net/v/t1.18169-9/21617587_1479105895458113_303468523533041023_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oBLwkf4SkpYAX_nzjyM&_nc_ht=scontent.fesm2-1.fna&oh=00_AfDjGdqQ4ecEyVikTZFTxW3zULfgAi0Qa1KBuzRSzmKwfg&oe=63DB0EE2' alt='kruger logo'/>
                    <p>KrugerStar</p>
                </div>
                <div className='der'>
                    <NavLink style={({ isActive }) => ({
                        textDecoration: isActive ? 'solid underline black 1px' : 'none', 
                    })} to='/clock'>My Clock</NavLink>
                    <NavLink style={({ isActive }) => ({
                        textDecoration: isActive ? 'solid underline black 1px' : 'none', 
                    })} to='/about'>About me</NavLink>
                    <NavLink style={({ isActive }) => ({
                        textDecoration: isActive ? 'solid underline black 1px' : 'none', 
                    })} to='/contact'>Contact</NavLink>
                </div>
            </div>            
        </nav>        
    )
}

export default Header