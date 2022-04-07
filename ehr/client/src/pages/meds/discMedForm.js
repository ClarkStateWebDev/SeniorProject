// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const DiscMedForm = () => {
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    return (
        /* Start of form */
      <div style={{ textAlign: 'center' }}>
        <Button color="info" class="btn btn-warning" onClick={() => setShow(!show)} style={{float: 'right', marginTop: '50px', marginRight: '32px', background: '#F5DE36', color: 'black'}}>
          Add Entry
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="Discontinued/Inactive Medications Form"
          body={
            <div>
              <h7>Start Date</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="date"
                placeholder="Date"
              />
              <h7>Time Due</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="time"
                placeholder="Time"
              />

              <h7>Entered By</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              />

              <h7>Drug</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="date"
                placeholder="Drug"
              />

              <h7>Dose</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Dose"
              />

              <h7>Route</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Route"
              />

              <h7>Frequency</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Frequency"
              />

              <h7>Comments</h7>
              <TextField
                name="test_field" defaultValue="List appropriate comments" rows={5}
              />

            </div>
          }
          /* Buttons */
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

  export default DiscMedForm;