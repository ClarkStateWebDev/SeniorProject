import React, { Component, useState, useEffect, useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Routes
} from 'react-router-dom';
import './assets/styles/App.css';

import UserContext from './context/UserContext';
import Layout from './components/Layout';
import Login from './pages/login/login';
import ForgotPassword from '../src/pages/login/forgotPassword';
import LoggedOut from '../src/pages/login/loggedOut';
import ResetPassword from '../src/pages/login/ResetPassword';
import Unauthorized from './components/Unauthorized';

import Missing from './components/Missing';
import Home from '../src/pages/Home'
import DailyCare from '../src/pages/Daily-Care'
import HistoryTab from '../src/pages/History/historyTab';
import imagingTab from '../src/pages/imaging/imagingTab';
import LabTab from '../src/pages/labs/labTab';
import CareTab from '../src/pages/Care Plan/careTab';
import SelectionTable from '../src/pages/PTable'

import VitalTab from '../src/pages/VitalSigns/vitals';
import WeightTab from '../src/pages/Weight/weightTab';
import PainTab from '../src/pages/Pain/painTab';
import InputTab from '../src/pages/Input/inputTab';
import OutputTab from '../src/pages/output/outputTab';
import EliminationTab from '../src/pages/elimination/elimination';
import IntakeTab from '../src/pages/intake/intakeTab';
import HygieneTab from '../src/pages/hygiene/hygieneTab';
import MobilityTab from '../src/pages/mobility/mobilityTab';

import AdminDash from '../src/pages/admin/admin-dash'
import AdminUserAdd from '../src/pages/admin/admin-user-add'
import AdminPatientAdd from '../src/pages/admin/admin-patient-add'
import AdminPatientEdit from '../src/pages/admin/admin-patient-edit'
import AdminUserEdit from '../src/pages/admin/admin-user-edit'
import Med from '../src/pages/admin/med-data';
import Override from '../src/pages/admin/override-data'


function App() {   
          
        const { user } = useContext(UserContext);
        const { isAuth } = useContext(UserContext);
        const { isAdmin } = useContext(UserContext);
        const { roles } = useContext(UserContext);
        console.log("user: " + JSON.stringify(user));
        console.log("Admin: " + isAdmin);
        console.log("Auth: " + isAuth);
        return (
            <div className="App">
                <Routes>
                    <Route path="/" element={<Layout />}>
                      
                      <Route index element={<Login />} />
                      <Route path="unauthorized" element={<Unauthorized />} />
                      {isAuth &&  
                        <>
                          <Route exact path="dashboard" element={<Home />} />
                          <Route exact path="daily-care" element={<DailyCare/>}/>
                          <Route exact path="history" element={<HistoryTab/>}/>
                          <Route exact path="imaging" element={<imagingTab />}/>
                          <Route exact path="labs" element={<LabTab/>}/>
                          <Route exact path="care" element={<CareTab/>}/>
                          <Route exact path="vitals" element={<VitalTab />}/>
                          <Route exact path="weight" element={<WeightTab />}/>
                          <Route exact path="pain" element={<PainTab />}/>
                          <Route exact path="input" element={<InputTab />}/>
                          <Route exact path="output" element={<OutputTab />}/>
                          <Route exact path="elimination" element={<EliminationTab />}/>
                          <Route exact path="intake" element={<IntakeTab />}/>
                          <Route exact path="hygiene" element={<HygieneTab />}/>
                          <Route exact path="mobility" element={<MobilityTab />}/>
                          <Route exact path="patient-selection" element={<SelectionTable />} />
                        </>
                      }
                      {roles === 2 && 
                        <>
                          <Route path="admin" element={<AdminDash />} />
                          <Route exact path="admin/addUser" element={<AdminUserAdd />} />
                          <Route exact path="admin/addPatient" element={<AdminPatientAdd />} />
                          <Route exact path="admin/editPatient" element={<AdminPatientEdit />} />
                          <Route exact path="admin/editUser" element={<AdminUserEdit />} />
                          <Route exact path="med-data" element={<Med />} />
                          <Route exact path="override-data" element={<Override />} />
                        </>
                      }
                      <Route path="*" element={<Missing />} /> 
                      <Route exact path="forgotpassword" element={<ForgotPassword />}/>
                      <Route exact path="loggedOut" element={<LoggedOut />}/>
                      <Route exact path="reset/:token" element={<ResetPassword />}/>
                    
                    </Route>
                </Routes>

              
            </div>
        );

        
    }

export default App;

