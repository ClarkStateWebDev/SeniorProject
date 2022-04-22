// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const BreathingForm = () => {
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
          title="Breathing Quality Form"
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

              <h7>Breathing Patterns</h7>
              <Dropdown
                text="Pattern"
                size= "sm"
                items={[
                    {text: 'Eupnea', onClick: () => {} },
                    {text: 'Tachypnea', onClick: () => {} },
                    {text: 'Bradypnea', onClick: () => {} },
                    {text: 'Hyperventilation', onClick: () => {} },
                    {text: 'Hypoventilation', onClick: () => {} },
                    {text: 'Cheyne-Stokes respirations', onClick: () => {} },
                    {text: 'Biots respirations', onClick: () => {} },
                    {text: 'Apnea', onClick: () => {} },
                ]}
              />

              <h7>Breathing Effort</h7>
              <Dropdown
                text="Effort"
                size= "sm"
                items={[
                    {text: 'Dyspnea at rest', onClick: () => {} },
                    {text: 'Dyspnea on exertion', onClick: () => {} },
                    {text: 'Using accessory muscles', onClick: () => {} },
                    {text: 'Orthopnea', onClick: () => {} },
                ]}
              />

              

              <h7>Cyanosis</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
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

  export default BreathingForm;