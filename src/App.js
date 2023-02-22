import './App.css';
import SideMenu from './components/SideMenu';
import NavBar from './components/NavBar';
import DashboardContainer from './components/DashboardContainer';

function App() {
  return (
    <div className="App">
      <SideMenu />
      <NavBar />
      <DashboardContainer />
    </div>
  );
}

export default App;
