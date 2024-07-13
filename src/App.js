import React from "react";
import { Section } from './components/Section';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import MesRendezVous from "./pages/auth/MesRendezVous";
import MonCompte from "./pages/auth/MonCompte";
import  { SeConnecter } from './pages/SeConnecter';
import { Connexion} from './pages/auth/Connexion';
import { Accueil } from './pages/auth/Accueil';
import Tableau  from './components/Tableau';
import Accueils  from './pages/PagesBarres/Accueils';
import  Mrv  from './pages/PagesBarres/Mrv';
import  MesPatients  from './pages/PagesBarres/MesPatients';
import  Moncompte  from './pages/PagesBarres/Moncompte';

function App() {
  return (
  <>
   <BrowserRouter>
      <Routes>
        {/*home*/}
        <Route path="/" element={<Navbar />} >
          <Route index element={<Section />} />
          <Route path="/accueil" element={< Accueil />} />
          <Route path="MesRendezVous" element={<MesRendezVous/>} />
          <Route path="moncompte" element={<MonCompte />} />
          <Route path="connexion" element={<Connexion />} />
          <Route path="connecter" element={<SeConnecter />} />
        </Route>


{/*Tableau*/}

      <Route path="/Tableau" element={<Tableau />} >
          <Route index element={< Accueils />} />
          <Route path="/Tableau/rv" element={< Mrv />} />
          <Route path="/Tableau/patient" element={< MesPatients />} />
          <Route path="/Tableau/compte" element={< Moncompte />} />
       </Route>
       </Routes>
       </BrowserRouter>
     </>
  );
}

export default App;
