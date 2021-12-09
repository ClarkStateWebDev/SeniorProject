import React from 'react';
import { Switch, Route } from 'react-router';
import AdminDash from '../pages/admin/admin-dash'
import AdminUserAdd from '../pages/admin/admin-user-add'
import AdminUserEdit from '../pages/admin/admin-user-edit'
import Med from '../pages/admin/med-data';
import Override from '../pages/admin/override-data'

const adminRoutes = () => (
    <Switch>
      <Route exact path="/admin/" component={AdminDash}/>
      <Route exact path="/admin/add" component={AdminUserAdd}/>
      <Route exact path="/admin/edit" component={AdminUserEdit}/>
      <Route exact path="/med-data" component={Med}/>
      <Route exact path="/override-data" component={Override} />
    </Switch>
);

export default adminRoutes;