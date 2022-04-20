import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import './css/App.css';
import patientRoutes from './components/routes/patients';
import adminRoutes from './components/routes/admin';
import loginRoutes from './components/routes/login';
import NavBar from './components/NavBar';


// sets up routing outside of app
const patientRoute = patientRoutes();
const adminRoute = adminRoutes();
const loginRoute = loginRoutes();


<<<<<<< Updated upstream
class App extends Component {

    render() {
        return (
            <Router>
                <div id="App">
                    <NavBar />
                    <div id="App-body">
                    </div>
                </div>
                {loginRoute}
                {patientRoute}
                {adminRoute}
            </Router>
=======
import AdminDash from '../src/pages/admin/admin-dash'
import AdminUserAdd from '../src/pages/admin/admin-user-add'
import AdminPatientAdd from '../src/pages/admin/admin-patient-add'
import AdminPatientEdit from '../src/pages/admin/admin-patient-edit'
import AdminUserEdit from '../src/pages/admin/admin-user-edit'
import Med from '../src/pages/admin/med-data';
import Override from '../src/pages/admin/override-data'
//Hannah DnD import statement add by Hannah Stickford
import { DndProvider } from "react-dnd";
import{ HTML5Backend } from "react-dnd-html5-backend";

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
//Hannah Import Drag Drop
import DragDrop from './components/DragDrop';
import PerPulse from './pages/PerPulse/PerPulse';
import PerPulseTab from './pages/PerPulse/PerPulseTab';


function App() {   
          
        const { user } = useContext(UserContext);
        const { isAuth } = useContext(UserContext);
        const { isAdmin } = useContext(UserContext);
        const { roles } = useContext(UserContext);
        console.log("user: " + JSON.stringify(user));
        console.log("Admin: " + isAdmin);
        console.log("Auth: " + isAuth);
        return (
          //added by Hannah S. Dnd Provider passing backend propriety
          <DndProvider backend={HTML5Backend}>
            
            <div className="App">
              {/*<DragDrop />*/}
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
                          <Route exact path="PerPulse" element={<PerPulse />}/>
                          <Route exact path="per-pulse" element={<PerPulseTab />}/>


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
                      </DndProvider>

>>>>>>> Stashed changes
        );
    }
}

export default App;
