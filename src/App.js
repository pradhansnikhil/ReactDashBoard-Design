// import logo from './logo.svg';
import './App.css';
import DashBoardContent from './Component/DashBoardContent/DashBoardContent.js';
import Header from './Component/Header/Header.js';
import SideNav from './Component/SideNav/SideNav.js';
function App() {
  return (
    <div className="dashBoardLayout">
     <div className='sideNav'>
     <SideNav/>
     </div>
     <div className='dashBoardContent'>
     <DashBoardContent/>
     </div>
    
    </div>
  );
}

export default App;
