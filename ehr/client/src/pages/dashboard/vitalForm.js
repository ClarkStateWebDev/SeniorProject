// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const AddVitals = () => {
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" class="btn btn-warning" onClick={() => setShow(!show)} style={{float: 'right', marginTop: '50px', marginRight: '32px', background: '#F5DE36', color: 'black'}}>
          Edit Vitals
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="Patient Vitals Form"
          body={
            <div>
              <h7>Blood Pressure</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="ex. 120/80"
              />
              <h7>Pulse Rate</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="number"
                placeholder="pulse rate"
              />
              <h7>Respiratory Rate</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="number"
                placeholder="Respiratory Rate"
              />
              <h7>Temperature</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="number"
                placeholder="temperature"
              />
              
              <h7>Oxygen Saturation</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="number"
                placeholder="oxygen saturation"
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

  export default AddVitals;