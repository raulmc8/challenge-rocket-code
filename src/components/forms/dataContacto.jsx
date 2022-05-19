// React hooks
import { useContext } from 'react';

// Context
import UserInfoContext from '../../context/userInfo'

// Components
import ImgProfile from './imgProfile'
import Response from '../response/response';

// Styles
import '../../styles/dataContacto.style.css'

const DataContacto = () => {
    const { state, dispatch } = useContext(UserInfoContext)

    const cualEsTuCorreo = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const contacto = {
            email: e.target[0].value,
            celular: e.target[1].value,
        }
        dispatch({type: 'DATOS-CONTACTO', payload: contacto})
    }

    return (
        state.birth.dia ? (
            <>
                <div className='layout-chat'>
                    <ImgProfile />
                    <form action="" onSubmit={e => cualEsTuCorreo(e)} >
                        <legend>Datos de contacto</legend>
                        <input type="email" placeholder="Correo electrónico" required />
                        <input type="tel" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" placeholder='Teléfono celular (111 111 1111)' required />
                        <input type="submit" hidden />
                    </form>
                </div>
    
                {state.contactInfo.email ? (
                    <Response data={`Correo electrónico: ${state.contactInfo.email}\nTeléfono celular: ${state.contactInfo.celular}`} />
                ) : null}
            </>
    
        ) : null
    )
}

export default DataContacto;