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
      <Route exact path="/patient-selection" component={PatientSelection}/>
    </Switch>
);

export default patientRoutes;