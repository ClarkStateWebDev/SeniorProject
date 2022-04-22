// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const AlterTableForm = () => {
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
          title="Alterations Form"
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

              <h7>Piercings</h7>
              <Dropdown
                text="Piercings"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

            <h7>Location & Condition</h7>
              <TextField
                name="test_field" defaultValue="List piercing location and condition" rows={5}
              />

              <h7>Tattoos</h7>
              <Dropdown
                text="Tattoos"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

            <h7>Location & Condition</h7>
              <TextField
                name="test_field" defaultValue="List tattoo location(s) and condition" rows={5}
              />

              <h7>Integrity</h7>
              <Dropdown
                text="Integrity"
                size= "sm"
                items={[
                    {text: 'All skin intact', onClick: () => {} },
                    {text: 'Rash', onClick: () => {} },
                    {text: 'Surgical incision', onClick: () => {} },
                    {text: 'Skin tear', onClick: () => {} },
                    {text: 'Laceration', onClick: () => {} },
                    {text: 'Gun shot', onClick: () => {} },
                    {text: 'Pressure ulcer', onClick: () => {} },
                ]}
              />

            <h7>Location & Condition</h7>
              <TextField
                name="test_field" defaultValue="List integrity location(s) and condition" rows={5}
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

  export default AlterTableForm;