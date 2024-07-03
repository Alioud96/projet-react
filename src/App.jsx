// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navbar } from "./components/Navbar";
import FirstSreen from "./components/FirstSreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Connexion } from "./pages/auth/Connexion";
import { About } from "./pages/auth/About";
import { Contact } from "./pages/auth/Contact";
import { NoPage } from "./pages/auth/NoPage";
// eslint-disable-next-line no-unused-vars
import Dashboard  from "./components/Dashboard";
import { SecondDashboard } from "./components/SecondDashboard";
import { Accueils } from "./pages/pagesDashboard/Accueils";
import { Mesrv } from "./pages/pagesDashboard/Mesrv";
import { Mespatients } from "./pages/pagesDashboard/Mespatients";
import { Moncompte } from "./pages/pagesDashboard/Moncompte";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* home */}
          <Route path="/" element={<Navbar />}>
            <Route index element={<FirstSreen />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="*" element={<NoPage />} />
          </Route>

          {/* dashboard */}

          <Route path="/dashbord" element={<SecondDashboard />}>
            <Route index element={<Accueils />} />
            <Route path="/dashbord/rv" element={<Mesrv />} />
            <Route path="/dashbord/patients" element={<Mespatients />} />
            <Route path="/dashbord/compte" element={<Moncompte />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


