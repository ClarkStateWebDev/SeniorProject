// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const OxygenTableForm = () => {
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
          title="Oxygenation Form"
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

              <h7>Oxygen</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Room air', onClick: () => {} },
                    {text: 'Oxygen delivery system in use', onClick: () => {} },
                ]}
              />

              <h7>L/min</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="L/min"
              />

              <h7>Delivery Device</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'No device', onClick: () => {} },
                    {text: 'Nasal cannula', onClick: () => {} },
                    {text: 'Simple mask', onClick: () => {} },
                    {text: 'Partial rebreather mask', onClick: () => {} },
                    {text: 'Nonrebreather mask', onClick: () => {} },
                    {text: 'Venturi mask', onClick: () => {} },
                    {text: 'Face tent', onClick: () => {} },
                    {text: 'Other', onClick: () => {} },
                ]}
              />

              <h7>Incentive Spirometer</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Frequently uses', onClick: () => {} },
                    {text: 'Occasionally when prompted', onClick: () => {} },
                    {text: 'Refuses', onClick: () => {} },
                ]}
              />

              <h7>Level Attained</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Level attained"
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

  export default OxygenTableForm;