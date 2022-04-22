// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const AirForm = () => {
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
          title="Airways Form"
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

              <h7>Airway Suctioning</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'No suction needed', onClick: () => {} },
                    {text: 'Yankauer', onClick: () => {} },
                    {text: 'Bulb syringe', onClick: () => {} },
                    {text: 'Open suction system', onClick: () => {} },
                    {text: 'Closed suction system', onClick: () => {} },
                ]}
              />

              <h7>Drainage characteristics</h7>
              <TextField
                name="test_field" defaultValue="List Color, Odor, Amount, and Consistency" rows={5}
              />

              <h7>Airway Type</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'No artificial airway in use', onClick: () => {} },
                    {text: 'Oropharyngeal airway', onClick: () => {} },
                    {text: 'Nasopharyngeal airway (Nasal Trumpet)', onClick: () => {} },
                    {text: 'Endotracheal tube', onClick: () => {} },
                    {text: 'Tracheostomy', onClick: () => {} },
                    {text: 'Other', onClick: () => {} },
                ]}
              />

              <h7>Airway Size</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="size"
              />

              <h7>Tracheostomy Care</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Stoma site pink', onClick: () => {} },
                    {text: 'Stoma site pale', onClick: () => {} },
                    {text: 'Stoma site red/excoriated', onClick: () => {} },
                    {text: 'Stoma site bleeding', onClick: () => {} },
                    {text: 'Inner cannula changed', onClick: () => {} },
                    {text: 'Sutures intact', onClick: () => {} },
                    {text: 'No sutures', onClick: () => {} },
                    {text: 'Neck ties/Velco intact and secure', onClick: () => {} },
                ]}
              />

              <h7>Drainage characteristics</h7>
              <TextField
                name="test_field" defaultValue="List Color, Odor, Amount, and Consistency" rows={5}
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

  export default AirForm;