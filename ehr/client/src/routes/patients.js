import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../pages/Home'
import DailyCare from '../pages/Daily-Care'
import HistoryTab from '../pages/History/historyTab';
import imagingTab from '../pages/imaging/imagingTab';
import LabTab from '../pages/labs/labTab';
import CareTab from '../pages/Care Plan/careTab';

import VitalTab from '../pages/VitalSigns/vitals';
import WeightTab from '../pages/Weight/weightTab';
import PainTab from '../pages/Pain/painTab';
import InputTab from '../pages/Input/inputTab';
import OutputTab from '../pages/output/outputTab';
import EliminationTab from '../pages/elimination/elimination';
import IntakeTab from '../pages/intake/intakeTab';
import HygieneTab from '../pages/hygiene/hygieneTab';
import MobilityTab from '../pages/mobility/mobilityTab';
import PatientSelection from '../pages/Patient-Selection';

import EyeTab from '../pages/eye/eyeTab';
import EntTab from '../pages/earNoseThroat/entTab';
import HeadTab from '../pages/head/headTab';
import AbdomenTab from '../pages/abdomen/abdomenTab';
import GeniTab from '../pages/genitourinary/geniTab';
import InteTab from '../pages/integumentary/inteTab';
import AlterTab from '../pages/alterations/alterTab';
import WoundLocTab from '../pages/woundLoc/woundLocTab';
import WoundCharTab from '../pages/woundChar/woundCharTab';
import DressingTab from '../pages/dressing/dressingTab';
import MuscleTab from '../pages/muscle/muscleTab';
import PsychosocialTab from '../pages/psychosocial/psycSocTab';
import BreathingTab from '../pages/breathing/breathingTab';
import LungTab from '../pages/lung/lungTab';
import OxygenTab from '../pages/oxygen/oxygenTab';
import AirTab from '../pages/airways/airTab';
import RespNotesTab from '../pages/respNotes/respNotesTab';
import SafetyTab from '../pages/safety/safetyTab';
import SafetyNotesTab from '../pages/safety/safeNotesTab';
import InfectTab from '../pages/infection/infectTab';
import InfectNotesTab from '../pages/infection/infectNotesTab';
import VascularTab from '../pages/vascular/vascularTab';
import VascularNotesTab from '../pages/vascular/vascularNotesTab';
import DrainsTab from '../pages/drainsTubes/drainsTab';
import DrainsNotesTab from '../pages/drainsTubes/drainsNotesTab';
import OrderTab from '../pages/orderEntry/orderTab';
import SchedMedsTab from '../pages/meds/schedMedsTab';
import PrnMedTab from '../pages/meds/prnMedTab';
import ContMedTab from '../pages/meds/contMedTab';
import RespMedTab from '../pages/meds/respMedTab';
import DiscMedTab from '../pages/meds/discMedTab';
import MentalTab from '../pages/neuro/mentalTab';
import SeizureTab from '../pages/neuro/seizureTab';
import CranialTab from '../pages/neuro/cranialTab';
import NeuroNotesTab from '../pages/neuro/neuroNotesTab';


const patientRoutes = () => (
    <Switch>
      <Route exact path="/dashboard" component={Home}/>
      <Route exact path="/daily-care" component={DailyCare}/>
      <Route exact path="/history" component={HistoryTab}/>
      <Route exact path="/imaging" component={imagingTab}/>
      <Route exact path="/labs" component={LabTab}/>
      <Route exact path="/care" component={CareTab}/>
      <Route exact path="/vitals" component={VitalTab}/>
      <Route exact path="/weight" component={WeightTab}/>
      <Route exact path="/pain" component={PainTab}/>
      <Route exact path="/input" component={InputTab}/>
      <Route exact path="/output" component={OutputTab}/>
      <Route exact path="/elimination" component={EliminationTab}/>
      <Route exact path="/intake" component={IntakeTab}/>
      <Route exact path="/hygiene" component={HygieneTab}/>
      <Route exact path="/mobility" component={MobilityTab}/>

      <Route exact path="/eye" component={EyeTab}/>
      <Route exact path="/ears" component={EntTab}/>
      <Route exact path="/head" component={HeadTab}/>
      <Route exact path="/abdomen" component={AbdomenTab}/>
      <Route exact path="/genitourinary" component={GeniTab}/>
      <Route exact path="/integumentary" component={InteTab}/>
      <Route exact path="/alterations" component={AlterTab}/>
      <Route exact path="/wound-location" component={WoundLocTab}/>
      <Route exact path="/wound-characteristics" component={WoundCharTab}/>
      <Route exact path="/dressing-change" component={DressingTab}/>
      <Route exact path="/musculoskeletal" component={MuscleTab}/>
      <Route exact path="/psychosocial" component={PsychosocialTab}/>
      <Route exact path="/breathing" component={BreathingTab}/>
      <Route exact path="/lungs" component={LungTab}/>
      <Route exact path="/oxygen" component={OxygenTab}/>
      <Route exact path="/airways" component={AirTab}/>
      <Route exact path="/respiratory-notes" component={RespNotesTab}/>
      <Route exact path="/safety" component={SafetyTab}/>
      <Route exact path="/safety-notes" component={SafetyNotesTab}/>
      <Route exact path="/infection-control" component={InfectTab}/>
      <Route exact path="/infection-notes" component={InfectNotesTab}/>
      <Route exact path="/vascular" component={VascularTab}/>
      <Route exact path="/vascular-notes" component={VascularNotesTab}/>
      <Route exact path="/drains" component={DrainsTab}/>
      <Route exact path="/drains-notes" component={DrainsNotesTab}/>
      <Route exact path="/order-entry" component={OrderTab}/>
      <Route exact path="/scheduled-medications" component={SchedMedsTab}/>
      <Route exact path="/prn-medications" component={PrnMedTab}/>
      <Route exact path="/continuous-medications" component={ContMedTab}/>
      <Route exact path="/respiratory-medications" component={RespMedTab}/>
      <Route exact path="/discontinued-medications" component={DiscMedTab}/>
      <Route exact path="/mental-status" component={MentalTab}/>
      <Route exact path="/seizure-activity" component={SeizureTab}/>
      <Route exact path="/cranial-nerve" component={CranialTab}/>
      <Route exact path="/neurological-notes" component={NeuroNotesTab}/>

      <Route exact path="/patient-selection" component={PatientSelection}/>
    </Switch>
);

export default patientRoutes;