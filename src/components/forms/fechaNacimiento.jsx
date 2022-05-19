// React hooks
import { useContext } from 'react';

// Components
import Response from '../../components/response/response';
import ImgProfile from './imgProfile'

// Context
import UserInfoContext from '../../context/userInfo';

// Style
import '../../styles/fechaNacimiento.style.css';

const FechaNacimiento = () => {
    const { state, dispatch } = useContext(UserInfoContext)

    const cualEsTuCumple = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const cumpleanios = {
            dia: e.target[0].value,
            mes: e.target[1].value,
            anio: e.target[2].value,
        }
        dispatch({type: 'CUMPLEANIOS', payload: cumpleanios})
    }
    return (
        state.userName.nombre ? (
            <>
                <div className='layout-chat'>
                    <ImgProfile />
                    <form action="" onSubmit={e => cualEsTuCumple(e)} >
                        <legend>¿Cual es tu fecha de nacimiento?</legend>
                        <input type="number" min="1" max="31" placeholder="Dia" required />
                        <input type="text" placeholder='Mes' required />
                        <input type="number" min="1920" max="2022" placeholder='Año' required />
                        <input type="submit" hidden />
                    </form>
                </div>

                {state.birth.dia ? (
                    <Response data={`${state.birth.dia} de ${state.birth.mes} del ${state.birth.anio}`} />
                ) : null}
            </>

        ) : null
    )
}

export default FechaNacimiento;