// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const MentalForm = () => {
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
          title="Mental Status Form"
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

              <h7>Ordered By</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              />

              <h7>Level of Consciousness</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Awake and alert', onClick: () => {} },
                    {text: 'Lethargic', onClick: () => {} },
                    {text: 'Stuporous', onClick: () => {} },
                    {text: 'Comatose', onClick: () => {} },
                ]}
              />

              <h7>Oriented Person</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Oriented Place</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Oriented Time</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Oriented Situation</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Disoriented Person</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Disoriented Place</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Disoriented Time</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Disoriented Situation</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Speech</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Clear', onClick: () => {} },
                    {text: 'Fluent', onClick: () => {} },
                    {text: 'Fast', onClick: () => {} },
                    {text: 'Slow', onClick: () => {} },
                    {text: 'Aphonia', onClick: () => {} },
                    {text: 'Dysphonia', onClick: () => {} },
                    {text: 'Dysarthria', onClick: () => {} },
                    {text: 'Aphasia', onClick: () => {} },
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

  export default MentalForm;