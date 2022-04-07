// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const NeuroNotesForm = () => {
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" class="btn btn-warning" onClick={() => setShow(!show)} style={{float: 'right', marginRight: '32px', background: '#F5DE36', color: 'black'}}>
          Add/Edit Neurological Notes
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="Neurological Notes Form"
          body={
            <div>
            <h7>Neurological Notes</h7>
              <TextField
                name="test_field" defaultValue="enter notes" rows={5}
              />

            <h7>Neurological Interventions</h7>
              <TextField
                name="test_field" defaultValue="List appropriate interventions to improve patient condition and prevent complications" rows={5}
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

  export default NeuroNotesForm;