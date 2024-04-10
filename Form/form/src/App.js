// import logo from './logo.svg';
import FormComponent from "./component/form"
import Profile from "./component/profile"
import Design from "./component/design"
import Navbar from "./component/navbar"
import Footer from "./component/footer"
import './App.css';

function App() {
  return (
    <div className="App">
      <FormComponent />
      <Profile />
      <Design/>
      <Navbar />
      <br/>
      <Footer/>
    </div>
  );
}

export default App;
