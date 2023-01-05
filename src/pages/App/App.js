import { useState, useEffect} from 'react';
import { Routes, Route, Navigate} from 'react-router-dom'
import { getUser } from '../../utilities/users-service';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import ComplexionPage from '../ComplexionPage/ComplexionPage';




function App() {
  const [state, setState] = useState(null)
  const [user, setUser ] = useState(null)

  return (
    <main className="App">
      <h1>Clean Cosmētika</h1>
     
        <>
        <NavBar />
        <Routes>
          <Route path="/complexion" element={<ComplexionPage />} />
        <Route path="/*" element={<Navigate to="/orders/new" /> } />
          </Routes>
       </>
       {/* :
       <AuthPage setUser={setUser}/> */}
      
    </main>
  );
}


export default App;
