import './App.css';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import { ReactStyleModule } from './components/ReactStyleModule';
// import { FormikForm } from './components/FormikForm';
// import { LoginForm } from './components/LoginForm';
// import { LoginControlled } from './components/LoginControlled';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <ReactStyleModule />} />
          <Route path='/users' element={<Dashboard />} />
          <Route path='/profile/:userId' element={<Profile/>} />
        </Routes>
        {/* <div className="App"> */}
          {/* <LoginForm /> */}
          {/* <LoginControlled /> */}
          {/* <FormikForm /> */}
          {/* <ReactStyleModule />*/}
      </Router>
    </div> 
  );
}

export default App;
