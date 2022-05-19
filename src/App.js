// Components
import Header from "./components/forms/header";
import PersonalInfo from "./components/forms/personalInfo";
import FechaNacimiento from "./components/forms/fechaNacimiento";
import DataContacto from "./components/forms/dataContacto";
import Validator from "./components/validator/validator";

// Context
import { UserInfoContextProvider } from "./context/userInfo";

// Style
import './styles/App.css'

function App() {
  return (
    <UserInfoContextProvider>
      <Header />
      <div className="m-container">
        <PersonalInfo />
        <FechaNacimiento />
        <DataContacto />
        <Validator />
      </div>
    </UserInfoContextProvider>
  );
}

export default App;
