// Assets
import Profile from '../../assets/rhlogo.png'

// Styles
import '../../styles/imgProfile.style.css'

const ImgProfile = () => {
    return (
        <div className='bg-img'>
            <img src={Profile} alt="Profile img" />
        </div>
    )
}

export default ImgProfile;