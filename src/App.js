import './App.css';
import Content from './component/content/Content';
import Footer from './component/footer/Footer';
import GetAppointmentCointainer from './component/getAppointment/GetAppointmentCointainer';
import HeaderContainer from './component/header/HeaderContainer';

function App() {
  return (
    <div className="App">
      {/* <div className="flex flexDirection"> */}
        <HeaderContainer />
        <Content />
        <Footer />
        <GetAppointmentCointainer/>
      {/* </div> */}

    </div>
  );
}

export default App;
