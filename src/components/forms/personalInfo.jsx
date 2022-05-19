// React hooks
import { useContext } from 'react';

// Components
import ImgProfile from './imgProfile';
import Response from '../response/response';

// Context
import UserInfoContext from '../../context/userInfo';

// Style
import '../../styles/personalInfo.style.css';

const PersonalInfo = () => {

    const { state, dispatch } = useContext(UserInfoContext)

    const cualEsTuNombre = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const usuario = {
            nombre: e.target[0].value,
            segundoNombre: e.target[1].value,
            apellidoPaterno: e.target[2].value,
            apellidoMaterno: e.target[3].value,
        }
        dispatch({ type: 'USER-NAME', payload: usuario })
    }

    return (
        <>
            <div className='layout-chat'>
                <ImgProfile />
                <form action="" onSubmit={e => cualEsTuNombre(e)} >
                    <legend>¿Cual es tu nombre?</legend>
                    <input type="text" placeholder="Nombre" required />
                    <input type="text" placeholder='Segundo nombre' />
                    <input type="text" placeholder='Apellido paterno' required />
                    <input type="text" placeholder='Apellido materno' />
                    <input type="submit" hidden />
                </form>
            </div>
            {state.userName.nombre ? (
                <Response data={`${state.userName.nombre} ${state.userName.apellidoPaterno}`} />
            ) : null }
        </>
    )
}

export default PersonalInfo;