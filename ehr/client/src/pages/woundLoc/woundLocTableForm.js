// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const WoundLocTableForm = () => {
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    return (
        /* Start of form */
      <div style={{ textAlign: 'center' }}>
        <Button color="info" class="btn btn-warning" onClick={() => setShow(!show)} style={{background: '#F5DE36', color: 'black'}}>
          Edit Entry
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="Wound Location Form"
          body={
            <div>
              <h7>Date</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="date"
                placeholder="Date"
              />
              <h7>Time</h7>
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

            <h7>Wound Location</h7>
              <TextField
                name="test_field" defaultValue="Enter wound location" rows={5}
              />

            <h7>Length (mm)</h7>
              <TextField
                name="test_field" defaultValue="Enter wound length in millimeters" rows={5}
              />

            <h7>Width (mm)</h7>
              <TextField
                name="test_field" defaultValue="Enter wound width in millimeters" rows={5}
              />

              <h7>Depth (mm)</h7>
              <TextField
                name="test_field" defaultValue="Enter wound depth in millimeters" rows={5}
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

  export default WoundLocTableForm;