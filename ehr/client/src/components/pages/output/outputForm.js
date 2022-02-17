// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const OutputForm = () => {
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" class="btn btn-warning" onClick={() => setShow(!show)} style={{float: 'right', marginTop: '50px', marginRight: '32px', background: '#F5DE36', color: 'black'}}>
          Add Entry
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="Output Form"
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
              <h7>Entered by</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Name"
              />

              <h7>Type</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Type"
              />

              <h7>Amount</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Amount"
              />

              <h7>Comments</h7>
              <TextField
                name="test_field" defaultValue="enter comments" rows={5}
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

  export default OutputForm;