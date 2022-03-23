// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const EyeForm = () => {
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
          title="Eye Form"
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

              <h7>Sclera</h7>
              <Dropdown
                text="Sclera"
                size= "sm"
                items={[
                    {text: 'Clear/white', onClick: () => {} },
                    {text: 'Pink', onClick: () => {} },
                    {text: 'Red', onClick: () => {} },
                    {text: 'Yellow', onClick: () => {} },
                ]}
              />

              <h7>Conjunctivae</h7>
              <Dropdown
                text="Conjunctivae"
                size= "sm"
                items={[
                    {text: 'Pink', onClick: () => {} },
                    {text: 'Red', onClick: () => {} },
                    {text: 'Pale', onClick: () => {} },
                    {text: 'Yellow', onClick: () => {} },
                ]}
              />

              <h7>Drainage</h7>
              <Dropdown
                text="Drainage"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Pupils equal in size</h7>
              <Dropdown
                text="Pupils"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Pupils round</h7>
              <Dropdown
                text="Round"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Left Pupil Recative to light</h7>
              <Dropdown
                text="Reactive"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Right Pupil Recative to Light</h7>
              <Dropdown
                text="Recative"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

            <h7>Left Pupil Accommodation</h7>
              <Dropdown
                text="Accommodation"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Right Pupil Accommodation</h7>
              <Dropdown
                text="Accommodation"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Left Pupil Convergence</h7>
              <Dropdown
                text="Convergence"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Right Pupil Convergence</h7>
              <Dropdown
                text="Convergence"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Cardinal fields of vision</h7>
              <Dropdown
                text="Cardinal"
                size= "sm"
                items={[
                    {text: 'Smooth movement', onClick: () => {} },
                    {text: 'Nystagmus', onClick: () => {} },
                    {text: 'Parallel movement', onClick: () => {} },
                    {text: 'Coordinated', onClick: () => {} },
                    {text: 'Uneven movement', onClick: () => {} },
                    {text: 'Uncoordinated', onClick: () => {} },
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

  export default EyeForm;