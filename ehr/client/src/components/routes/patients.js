import React from 'react';
import { Switch, Route } from 'react-router';
import Home from '../pages/Home'
import DailyCare from '../pages/Daily-Care'
import History from '../pages/Daily-Care'
import HistoryTab from '../pages/History/historyTab';
import imagingTab from '../pages/imaging/imagingTab';
import LabTab from '../pages/labs/labTab';
import CareTab from '../pages/Care Plan/careTab';

const patientRoutes = () => (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/daily-care" component={DailyCare}/>
      <Route exact path="/history" component={HistoryTab}/>
      <Route exact path="/imaging" component={imagingTab}/>
      <Route exact path="/labs" component={LabTab}/>
      <Route exact path="/care" component={CareTab}/>
    </Switch>
);

export default patientRoutes;