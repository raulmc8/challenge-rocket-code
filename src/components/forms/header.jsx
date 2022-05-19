// Assets
import Task from '../../assets/17872926761610058220.svg'
import Clock from '../../assets/2505306791581426692.svg'

// Styles
import  '../../styles/header.style.css'

const Header = () => {
    return (
        <header>
            <div>
                <h1>Formulario con tus datos</h1>
                <p>
                    <img src={Clock} alt='profile-img'/>
                    En menos de 5 minutos
                </p>
            </div>
            <img src={Task} alt="Task svg" />
        </header>
    )
}

export default Header