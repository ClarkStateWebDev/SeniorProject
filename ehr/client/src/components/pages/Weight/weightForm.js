// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const WeightForm = () => {
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
          title="Weight Form"
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
              <Dropdown
                text="Time"
                size= "sm"
                items={[
                    {text: 'Admission Weight', onClick: () => {} },
                    {text: 'Daily AM Weight', onClick: () => {} },
                    {text: 'Other (enter in \'other time box\')', onClick: () => {} },
                ]}
              />

              <h7>Other Time</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="time"
                placeholder="enter in military time"
              />

              <h7>Entered by</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Name"
              />
              
              <h7>Weight in Pounds</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="number"
                placeholder="Pounds"
              />

              <h7>Weight in Kilograms</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="number"
                placeholder="Kilograms"
              />

              <h7>Method</h7>
              <Dropdown
                text="Method"
                size= "sm"
                items={[
                    {text: 'Standing scale', onClick: () => {} },
                    {text: 'Wheelchair scale', onClick: () => {} },
                    {text: 'Bed scale', onClick: () => {} },
                    {text: 'Patient/Family stated', onClick: () => {} },
                    {text: 'Estimated', onClick: () => {} },
                ]}
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

  export default WeightForm;