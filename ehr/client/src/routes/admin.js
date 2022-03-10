import React from 'react';
import { Switch, Route } from 'react-router';
import AdminDash from '../pages/admin/admin-dash'
import AdminUserAdd from '../pages/admin/admin-user-add'
import AdminPatientAdd from '../pages/admin/admin-patient-add'
import AdminPatientEdit from '../pages/admin/admin-patient-edit'
import AdminUserEdit from '../pages/admin/admin-user-edit'
import Med from '../pages/admin/med-data';
import Override from '../pages/admin/override-data'
import ProtectedRoute from './ProtectedRoute'

const adminRoutes = () => (
    <Switch>
      <ProtectedRoute exact path="/admin/" component={AdminDash}/>
      <ProtectedRoute exact path="/admin/addUser" component={AdminUserAdd}/>
      <ProtectedRoute exact path="/admin/addPatient" component={AdminPatientAdd}/>
      <ProtectedRoute exact path="/admin/editPatient" component={AdminPatientEdit}/>
      <ProtectedRoute exact path="/admin/editUser" component={AdminUserEdit}/>
      <ProtectedRoute exact path="/med-data" component={Med}/>
      <ProtectedRoute exact path="/override-data" component={Override} />
    </Switch>
);

export default adminRoutes;