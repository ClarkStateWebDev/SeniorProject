// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const EntTableForm = () => {
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
          title="Ears, Nose, Throat Form"
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

              <h7>Ears</h7>
              <Dropdown
                text="Ears"
                size= "sm"
                items={[
                    {text: 'Able to hear', onClick: () => {} },
                    {text: 'Hard of hearing', onClick: () => {} },
                    {text: 'Unable to hear', onClick: () => {} },
                    {text: 'Wears device', onClick: () => {} },
                    {text: 'Foreign body', onClick: () => {} },
                    {text: 'Obstruction', onClick: () => {} },
                ]}
              />

              <h7>Ears Symmetrical</h7>
              <Dropdown
                text="Symmetrical"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Ear Canal</h7>
              <Dropdown
                text="Ear Canal"
                size= "sm"
                items={[
                    {text: 'Clear', onClick: () => {} },
                    {text: 'Cerumen', onClick: () => {} },
                    {text: 'Edema', onClick: () => {} },
                    {text: 'Drainage', onClick: () => {} },
                    {text: 'Foreign body', onClick: () => {} },
                    {text: 'Obstruction', onClick: () => {} },
                ]}
              />

              <h7>Nose Patency Left Nare</h7>
              <Dropdown
                text="Patency"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Nose Patency Right Nare</h7>
              <Dropdown
                text="Patency"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Nasal Mucosa</h7>
              <Dropdown
                text="Nasal Mucosa"
                size= "sm"
                items={[
                    {text: 'Pink', onClick: () => {} },
                    {text: 'Pale', onClick: () => {} },
                    {text: 'Red', onClick: () => {} },
                    {text: 'Moist', onClick: () => {} },
                    {text: 'Dry', onClick: () => {} },
                    {text: 'Lesions', onClick: () => {} },
                    {text: 'Edema', onClick: () => {} },
                    {text: 'Drainage', onClick: () => {} },
                ]}
              />

              <h7>Oral Mucosa</h7>
              <Dropdown
                text="Oral Mucosa"
                size= "sm"
                items={[
                    {text: 'Pink', onClick: () => {} },
                    {text: 'Pale', onClick: () => {} },
                    {text: 'Erythema', onClick: () => {} },
                    {text: 'White patches', onClick: () => {} },
                    {text: 'Lesions', onClick: () => {} },
                ]}
              />

              <h7>Teeth</h7>
              <Dropdown
                text="Teeth"
                size= "sm"
                items={[
                    {text: 'Teeth intact', onClick: () => {} },
                    {text: 'Teeth broken', onClick: () => {} },
                    {text: 'No natural teeth', onClick: () => {} },
                    {text: 'Dentures', onClick: () => {} },
                    {text: 'Bridges', onClick: () => {} },
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

  export default EntTableForm;