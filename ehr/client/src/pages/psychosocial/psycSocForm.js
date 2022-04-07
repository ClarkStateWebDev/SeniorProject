// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const PsychosocialForm = () => {
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" class="btn btn-warning" onClick={() => setShow(!show)} style={{float: 'right', marginRight: '32px', background: '#F5DE36', color: 'black'}}>
          Add/Edit Psychosocial Notes
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="Psychosocial Notes Form"
          body={
            <div>
            <h7>Psychosocial Notes</h7>
              <TextField
                name="test_field" defaultValue="enter assessment notes" rows={5}
              />

            <h7>Psychosocial Interventions</h7>
              <TextField
                name="test_field" defaultValue="List appropriate psychosocial interventions" rows={5}
              />
            
            </div>
          }
          closeButton={{
            children: 'Submit',
            color: 'success',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked submit')
              setShow(!show)
            },
          }}
          middleButton={{
            children: 'Skip',
            color: 'warning',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked skip')
              setShow(!show)
            },
          }}
          successButton={{
            children: 'Cancel',
            color: 'danger',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked cancel')
              setShow(!show)
            },
          }}
        />
      </div>
    )
  }

  export default PsychosocialForm;