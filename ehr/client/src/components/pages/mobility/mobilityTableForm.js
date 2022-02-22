// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const MobilityTableForm = () => {
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
          title="Mobility Form"
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

              <h7>Activity Level</h7>
              <Dropdown
                text="Activity Level"
                size= "sm"
                items={[
                    {text: 'No restrictions', onClick: () => {} },
                    {text: 'Bedrest', onClick: () => {} },
                    {text: 'Bathroom privileges only', onClick: () => {} },
                    {text: 'Bedside commode', onClick: () => {} },
                    {text: 'Dangle at edge of bed', onClick: () => {} },
                    {text: 'Up to bedside chair', onClick: () => {} },
                ]}
              />

              <h7>Ambulation Ability</h7>
              <Dropdown
                text="Ambulation Ability"
                size= "sm"
                items={[
                    {text: 'Ambulates independently', onClick: () => {} },
                    {text: 'Cannot ambulate independently', onClick: () => {} },
                    {text: 'Ambulates with 1-person assistance', onClick: () => {} },
                    {text: 'Ambulates with 2 person assistance', onClick: () => {} },
                    {text: 'Ambulates with more than 2 people', onClick: () => {} },
                ]}
              />

              <h7>Devices</h7>
              <Dropdown
                text="Devices"
                size= "sm"
                items={[
                    {text: 'No devices needed', onClick: () => {} },
                    {text: 'Gait belt', onClick: () => {} },
                    {text: 'Wheelchair', onClick: () => {} },
                    {text: 'Walker', onClick: () => {} },
                    {text: 'Rolling walker', onClick: () => {} },
                    {text: 'Cane', onClick: () => {} },
                    {text: '4-prong cane', onClick: () => {} },
                    {text: 'Crutches', onClick: () => {} },
                ]}
              />
 
              <h7>Body Positioning</h7>
              <Dropdown
                text="Body positioning"
                size= "sm"
                items={[
                    {text: 'Supine', onClick: () => {} },
                    {text: 'Prone', onClick: () => {} },
                    {text: 'Right lateral', onClick: () => {} },
                    {text: 'Left lateral', onClick: () => {} },
                    {text: 'Fowlers', onClick: () => {} },
                    {text: 'Semi-fowlers', onClick: () => {} },
                    {text: 'High-fowlers', onClick: () => {} },
                ]}
              />

              <h7>Level of assistance with body positioning</h7>
              <Dropdown
                text="Level of assistance"
                size= "sm"
                items={[
                    {text: 'Unable to turn self independently', onClick: () => {} },
                    {text: 'Able to turn self independently', onClick: () => {} },
                    {text: '2-person assistance with turning', onClick: () => {} },
                    {text: 'Refuses to turn', onClick: () => {} },
                    {text: 'Must log-roll', onClick: () => {} },
                ]}
              />

              <h7>Nursing Notes</h7>
              <TextField
                name="test_field" defaultValue="enter notes" rows={5}
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

  export default MobilityTableForm;