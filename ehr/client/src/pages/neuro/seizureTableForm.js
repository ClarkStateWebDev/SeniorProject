// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const SeizureTableForm = () => {
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
          title="Seizure Assessment Form"
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

              <h7>Duration of Seizure</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />

              <h7>Preictal Phase</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Reported Aura</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />

              <h7>Type of Seizure</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Tonic', onClick: () => {} },
                    {text: 'Clonic', onClick: () => {} },
                    {text: 'Myoclonic', onClick: () => {} },
                    {text: 'Atonic (Akinetic)', onClick: () => {} },
                    {text: 'Simple partial', onClick: () => {} },
                    {text: 'Complex partial', onClick: () => {} },
                    {text: 'Unclassified', onClick: () => {} },
                ]}
              />

              <h7>Loss of Consciousness</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Postictal Confusion</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Postictal Amnesia</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Describe Seizure Activity</h7>
              <TextField
                name="test_field" defaultValue="Describe seizure activity" rows={5}
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

  export default SeizureTableForm;