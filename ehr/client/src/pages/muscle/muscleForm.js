// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const MuscleForm = () => {
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
          title="Musculoskeletal Form"
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

              <h7>Left Arm</h7>
              <Dropdown
                text="Left Arm"
                size= "sm"
                items={[
                    {text: 'Symmetry', onClick: () => {} },
                    {text: 'Atrophy', onClick: () => {} },
                    {text: 'Tremors', onClick: () => {} },
                    {text: 'Flaccid', onClick: () => {} },
                    {text: 'Full ROM', onClick: () => {} },
                    {text: 'Decreased ROM', onClick: () => {} },
                    {text: 'Immobile', onClick: () => {} },
                    {text: 'Strong movement', onClick: () => {} },
                    {text: 'Weak movement', onClick: () => {} },
                    {text: 'Coordinated movement', onClick: () => {} },
                    {text: 'Uncoordinated movement', onClick: () => {} },
                    {text: 'Swelling', onClick: () => {} },
                    {text: 'Pain', onClick: () => {} },
                    {text: 'Crepitation on movement', onClick: () => {} },
                ]}
              />

             <h7>Right Arm</h7>
              <Dropdown
                text="Right Arm"
                size= "sm"
                items={[
                    {text: 'Symmetry', onClick: () => {} },
                    {text: 'Atrophy', onClick: () => {} },
                    {text: 'Tremors', onClick: () => {} },
                    {text: 'Flaccid', onClick: () => {} },
                    {text: 'Full ROM', onClick: () => {} },
                    {text: 'Decreased ROM', onClick: () => {} },
                    {text: 'Immobile', onClick: () => {} },
                    {text: 'Strong movement', onClick: () => {} },
                    {text: 'Weak movement', onClick: () => {} },
                    {text: 'Coordinated movement', onClick: () => {} },
                    {text: 'Uncoordinated movement', onClick: () => {} },
                    {text: 'Swelling', onClick: () => {} },
                    {text: 'Pain', onClick: () => {} },
                    {text: 'Crepitation on movement', onClick: () => {} },
                ]}
              />

              <h7>Left Leg</h7>
              <Dropdown
                text="Left Leg"
                size= "sm"
                items={[
                    {text: 'Symmetry', onClick: () => {} },
                    {text: 'Atrophy', onClick: () => {} },
                    {text: 'Tremors', onClick: () => {} },
                    {text: 'Flaccid', onClick: () => {} },
                    {text: 'Full ROM', onClick: () => {} },
                    {text: 'Decreased ROM', onClick: () => {} },
                    {text: 'Immobile', onClick: () => {} },
                    {text: 'Strong movement', onClick: () => {} },
                    {text: 'Weak movement', onClick: () => {} },
                    {text: 'Coordinated movement', onClick: () => {} },
                    {text: 'Uncoordinated movement', onClick: () => {} },
                    {text: 'Swelling', onClick: () => {} },
                    {text: 'Pain', onClick: () => {} },
                    {text: 'Crepitation on movement', onClick: () => {} },
                ]}
              />

              <h7>Right Leg</h7>
              <Dropdown
                text="Right Leg"
                size= "sm"
                items={[
                    {text: 'Symmetry', onClick: () => {} },
                    {text: 'Atrophy', onClick: () => {} },
                    {text: 'Tremors', onClick: () => {} },
                    {text: 'Flaccid', onClick: () => {} },
                    {text: 'Full ROM', onClick: () => {} },
                    {text: 'Decreased ROM', onClick: () => {} },
                    {text: 'Immobile', onClick: () => {} },
                    {text: 'Strong movement', onClick: () => {} },
                    {text: 'Weak movement', onClick: () => {} },
                    {text: 'Coordinated movement', onClick: () => {} },
                    {text: 'Uncoordinated movement', onClick: () => {} },
                    {text: 'Swelling', onClick: () => {} },
                    {text: 'Pain', onClick: () => {} },
                    {text: 'Crepitation on movement', onClick: () => {} },
                ]}
              />

              <h7>Neck</h7>
              <Dropdown
                text="Neck"
                size= "sm"
                items={[
                    {text: 'Symmetry', onClick: () => {} },
                    {text: 'Atrophy', onClick: () => {} },
                    {text: 'Tremors', onClick: () => {} },
                    {text: 'Flaccid', onClick: () => {} },
                    {text: 'Full ROM', onClick: () => {} },
                    {text: 'Decreased ROM', onClick: () => {} },
                    {text: 'Immobile', onClick: () => {} },
                    {text: 'Strong movement', onClick: () => {} },
                    {text: 'Weak movement', onClick: () => {} },
                    {text: 'Coordinated movement', onClick: () => {} },
                    {text: 'Uncoordinated movement', onClick: () => {} },
                    {text: 'Swelling', onClick: () => {} },
                    {text: 'Pain', onClick: () => {} },
                    {text: 'Crepitation on movement', onClick: () => {} },
                ]}
              />

              <h7>Amputation</h7>
              <Dropdown
                text="Amputation"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Amputation Location</h7>
              <TextField
                name="test_field" defaultValue="Enter location and description of amputation area" rows={5}
              />

              <h7>Nursing Notes</h7>
              <TextField
                name="test_field" defaultValue="Enter notes" rows={5}
              />

              <h7>Interventions</h7>
              <TextField
                name="test_field" defaultValue="List appropriate interventions to improve patient condition and prevent complications" rows={5}
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

  export default MuscleForm;