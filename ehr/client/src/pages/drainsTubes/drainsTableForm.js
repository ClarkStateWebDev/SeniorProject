// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const DrainsTableForm = () => {
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
          title="Drains & Tubes Form"
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

              <h7>Type of Tube</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'External Catheter', onClick: () => {} },
                    {text: 'Indwelling Catheter', onClick: () => {} },
                    {text: 'Suprapubic Catheter', onClick: () => {} },
                    {text: 'Chest tube', onClick: () => {} },
                    {text: 'T-tube', onClick: () => {} },
                    {text: 'Jackson-Pratt(JP) drain', onClick: () => {} },
                    {text: 'Hemovac drain', onClick: () => {} },
                    {text: 'Penrose drain', onClick: () => {} },
                    {text: 'Nasogastric tube', onClick: () => {} },
                    {text: 'Nasointestinal tube', onClick: () => {} },
                    {text: 'Gastrostomy tube', onClick: () => {} },
                    {text: 'Jejunostomy tube', onClick: () => {} },
                    {text: 'Dobhoff', onClick: () => {} },
                    {text: 'Levin tube', onClick: () => {} },
                ]}
              />

              <h7>Size of Tube</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="size"
              />

              <h7>Drainage Type</h7>
              <TextField
                name="test_field" defaultValue="List drainage type" rows={5}
              />

              <h7>Suction</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Suction Amount</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="amount"
              />

              <h7>Functionally Patent</h7>
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

  export default DrainsTableForm;