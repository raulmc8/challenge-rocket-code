// Styles
import '../../styles/response.style.css'

const Response = (props) => {

    return (
        <div className='response-layout'>
            <div className="response-container">
                <p>{props.data}</p>
            </div>
        </div>
    )
}

export default Response;