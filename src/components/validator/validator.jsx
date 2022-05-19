// React hooks
import { useContext, useState } from "react";

// Context
import UserInfoContext from "../../context/userInfo";

// Styles
import '../../styles/validator.style.css'

const Validator = () => {
    const { state } = useContext(UserInfoContext)
    const [iniciar, setIniciar] = useState(false)
    return (
        state.contactInfo.email ? (
        <>
            <div className="validator-chat">
                <div className="validator-container">
                    <p>Si tus datos son correctos por favor continuemos</p>
                </div>
            </div>
            <div className="btn-iniciar">
                <button onClick={() => setIniciar(true)}>Iniciar</button>
            </div>
            {iniciar === true ? (
                <div className="data-chat">
                    <div className="data-container">
                        <p>
                            Fecha de nacimiento: {state.birth.dia} {state.birth.mes} {state.birth.anio} <br />
                            Correo electrónico: {state.contactInfo.email} <br />
                            Teléfono celular: {state.contactInfo.celular} <br />
                            Nombre: {state.userName.nombre} {state.userName.apellidoPaterno}
                        </p>
                    </div>
                </div>
            ) : null}
        </>
        ) : null
    )
}

export default Validator;