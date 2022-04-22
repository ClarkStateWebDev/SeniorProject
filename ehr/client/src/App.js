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
import { DndProvider } from "react-dnd"; //Hannah DnD import statement add by Hannah Stickford
import{ HTML5Backend } from "react-dnd-html5-backend"; //Hannah DnD import statement add by Hannah Stickford
// Jeris code branch - added 3/22/22 by AH
import EyeTab from './pages/eye/eyeTab';
import EntTab from './pages/earNoseThroat/entTab';
import HeadTab from './pages/head/headTab';
import GastroTab from './pages/gastrointestinal/gastroTab';
import AbdomenTab from './pages/abdomen/abdomenTab';
import GeniTab from './pages/genitourinary/geniTab';
import InteTab from './pages/integumentary/inteTab';
import AlterTab from './pages/alterations/alterTab';
import WoundLocTab from './pages/woundLoc/woundLocTab';
import WoundCharTab from './pages/woundChar/woundCharTab';
import DressingTab from './pages/dressing/dressingTab';
import MuscleTab from './pages/muscle/muscleTab';
import PsychosocialTab from './pages/psychosocial/psycSocTab';
import BreathingTab from './pages/breathing/breathingTab';
import LungTab from './pages/lung/lungTab';
import OxygenTab from './pages/oxygen/oxygenTab';
import AirTab from './pages/airways/airTab';
import RespNotesTab from './pages/respNotes/respNotesTab';
import SafetyTab from './pages/safety/safetyTab';
import SafetyNotesTab from './pages/safety/safeNotesTab';
import InfectTab from './pages/infection/infectTab';
import InfectNotesTab from './pages/infection/infectNotesTab';
import VascularTab from './pages/vascular/vascularTab';
import VascularNotesTab from './pages/vascular/vascularNotesTab';
import DrainsTab from './pages/drainsTubes/drainsTab';
import DrainsNotesTab from './pages/drainsTubes/drainsNotesTab';
import OrderTab from './pages/orderEntry/orderTab';
import SchedMedsTab from './pages/meds/schedMedsTab';
import PrnMedTab from './pages/meds/prnMedTab';
import ContMedTab from './pages/meds/contMedTab';
import RespMedTab from './pages/meds/respMedTab';
import DiscMedTab from './pages/meds/discMedTab';
import MentalTab from './pages/neuro/mentalTab';
import SeizureTab from './pages/neuro/seizureTab';
import CranialTab from './pages/neuro/cranialTab';
import NeuroNotesTab from './pages/neuro/neuroNotesTab';

import DragDrop from './components/DragDrop'; //Hannah Import Drag Drop
import PerPulse from './pages/PerPulse/PerPulse'; //Hannah Import Drag Drop
import PerPulseTab from './pages/PerPulse/PerPulseTab'; //Hannah Import Drag Drop


function App() {   
          
        const { user } = useContext(UserContext);
        const { isAuth } = useContext(UserContext);
        const { isAdmin } = useContext(UserContext);
        const { roles } = useContext(UserContext);
        console.log("user: " + JSON.stringify(user));
        console.log("Admin: " + isAdmin);
        console.log("Auth: " + isAuth);
        return (
          //Hannah drag and drop
          <DndProvider backend={HTML5Backend}> 
            
            <div className="App">

                {/*<DragDrop />*/} /* Hannah change */
                <Routes>
                    <Route path="/" element={<Layout />}>
                      
                      <Route index element={<Login />} />
                      <Route path="unauthorized" element={<Unauthorized />} />
                      {isAuth &&  
                        <>
                          <Route exact path="dashboard" element={<Home />} />
                          <Route exact path="daily-care" element={<DailyCare/>}/>
                          <Route exact path="history" element={<HistoryTab/>}/>
                          <Route exact path="imaging" element={<imagingTab />}/> //Does "imaging" need a capital I?
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
                          <Route exact path="eye" element={<EyeTab />}/>

						  // Jeris code branch - added 3/22/22 by AH
						  <Route exact path="eye" element={<EyeTab />}/>

                          <Route exact path="ears" element={<EntTab />}/>
                          <Route exact path="head" element={<HeadTab />}/>
                          <Route exact path="gastro" element={<GastroTab />}/>
                          <Route exact path="abdomen" element={<AbdomenTab />}/>
                          <Route exact path="genitourinary" element={<GeniTab />}/>
                          <Route exact path="integumentary" element={<InteTab />}/>
                          <Route exact path="alterations" element={<AlterTab />}/>
                          <Route exact path="wound-location" element={<WoundLocTab />}/>
                          <Route exact path="wound-characteristics" element={<WoundCharTab />}/>
                          <Route exact path="dressing-change" element={<DressingTab />}/>
                          <Route exact path="musculoskeletal" element={<MuscleTab />}/>
                          <Route exact path="psychosocial" element={<PsychosocialTab />}/>
                          <Route exact path="breathing" element={<BreathingTab />}/>
                          <Route exact path="lungs" element={<LungTab />}/>
                          <Route exact path="oxygen" element={<OxygenTab />}/>
                          <Route exact path="airways" element={<AirTab />}/>
                          <Route exact path="respiratory-notes" element={<RespNotesTab />}/>
                          <Route exact path="safety" element={<SafetyTab />}/>
                          <Route exact path="safety-notes" element={<SafetyNotesTab />}/>
                          <Route exact path="infection-control" element={<InfectTab />}/>
                          <Route exact path="infection-notes" element={<InfectNotesTab />}/>
                          <Route exact path="vascular" element={<VascularTab />}/>
                          <Route exact path="vascular-notes" element={<VascularNotesTab />}/>
                          <Route exact path="drains" element={<DrainsTab />}/>
                          <Route exact path="drains-notes" element={<DrainsNotesTab />}/>
                          <Route exact path="order-entry" element={<OrderTab />}/>
                          <Route exact path="scheduled-medications" element={<SchedMedsTab />}/>
                          <Route exact path="prn-medications" element={<PrnMedTab />}/>
                          <Route exact path="continuous-medications" element={<ContMedTab />}/>
                          <Route exact path="respiratory-medications" element={<RespMedTab />}/>
                          <Route exact path="discontinued-medications" element={<DiscMedTab />}/>
                          <Route exact path="mental-status" element={<MentalTab />}/>
                          <Route exact path="seizure-activity" element={<SeizureTab />}/>
                          <Route exact path="cranial-nerve" element={<CranialTab />}/>
                          <Route exact path="neurological-notes" element={<NeuroNotesTab />}/>
						  //End of Jeris branch additions

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
            </DndProvider> //Hannah drag and drop
        );

        
    }

export default App;