import React from "react";
import { TextField } from "@hospitalrun/components";

const GreyField = () => (
    <div style={{margin: '10px', overflow: 'hidden'}}>
      <TextField name="test_field" defaultValue="this is the default value" rows={5} style={{backgroundColor: '#DBE1E4'}} />
    </div>
);

export default GreyField;