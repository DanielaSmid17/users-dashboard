import './App.css';
import SideMenu from './components/SideMenu';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <SideMenu />
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
