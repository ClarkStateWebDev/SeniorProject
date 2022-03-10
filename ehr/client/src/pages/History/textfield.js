import React from "react";
import { TextField } from "@hospitalrun/components";

const Field = () => (
    <div style={{margin: '10px', overflow: 'hidden'}}>
      <TextField name="test_field" defaultValue="this is the default value" rows={5} style={{backgroundColor: '#B0D1E0'}} />
    </div>
);

export default Field;