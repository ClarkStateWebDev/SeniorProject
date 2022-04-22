// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const GeniForm = () => {
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
          title="Genitourinary Form"
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

              <h7>Mode of Urination</h7>
              <Dropdown
                text="Mode of Urination"
                size= "sm"
                items={[
                    {text: 'Voids', onClick: () => {} },
                    {text: 'Indwelling catheter', onClick: () => {} },
                    {text: 'Straight catheter', onClick: () => {} },
                    {text: 'Suprapubic catheter', onClick: () => {} },
                    {text: 'Urostomy', onClick: () => {} },
                ]}
              />

              <h7>Urinary Conditions</h7>
              <Dropdown
                text="Conditions"
                size= "sm"
                items={[
                    {text: 'No urinary conditions applicable', onClick: () => {} },
                    {text: 'Anuria', onClick: () => {} },
                    {text: 'Dysuria', onClick: () => {} },
                    {text: 'Frequency', onClick: () => {} },
                    {text: 'Nocturia', onClick: () => {} },
                    {text: 'Oliguria', onClick: () => {} },
                    {text: 'Polyuria', onClick: () => {} },
                    {text: 'Pyuria', onClick: () => {} },
                    {text: 'Urgency', onClick: () => {} },
                    {text: 'Urinary Incontinence', onClick: () => {} },
                    {text: 'Burning on urination', onClick: () => {} },
                    {text: 'Urinary retention', onClick: () => {} },
                ]}
              />

              <h7>Urine Color</h7>
              <Dropdown
                text="Color"
                size= "sm"
                items={[
                    {text: 'Transparent', onClick: () => {} },
                    {text: 'Pale yellow', onClick: () => {} },
                    {text: 'Yellow', onClick: () => {} },
                    {text: 'Dark yellow', onClick: () => {} },
                    {text: 'Amber', onClick: () => {} },
                    {text: 'Dark brown', onClick: () => {} },
                    {text: 'Bloody', onClick: () => {} },
                    {text: 'Other (describe in notes)', onClick: () => {} },
                ]}
              />

              <h7>Urine Odor</h7>
              <Dropdown
                text="Odor"
                size= "sm"
                items={[
                    {text: 'No odor', onClick: () => {} },
                    {text: 'Ammonia odor', onClick: () => {} },
                    {text: 'Sweet odor', onClick: () => {} },
                    {text: 'Fetid odor', onClick: () => {} },
                ]}
              />

              <h7>Urine Turbidity</h7>
              <Dropdown
                text="Ostomy"
                size= "sm"
                items={[
                    {text: 'Clear', onClick: () => {} },
                    {text: 'Cloudy', onClick: () => {} },
                    {text: 'Milky', onClick: () => {} },
                    {text: 'Sediment', onClick: () => {} },
                    {text: 'Blood clots', onClick: () => {} },
                ]}
              />
              
              <h7>External Genitalia</h7>
              <Dropdown
                text="Ostomy"
                size= "sm"
                items={[
                    {text: 'No concerns', onClick: () => {} },
                    {text: 'Lesions', onClick: () => {} },
                    {text: 'Inflammation', onClick: () => {} },
                    {text: 'Edema', onClick: () => {} },
                    {text: 'Warts', onClick: () => {} },
                    {text: 'Drainage', onClick: () => {} },
                    {text: 'Other (describe in notes)', onClick: () => {} },
                ]}
              />

              <h7>Additional Genitourinary Assessment</h7>
              <TextField
                name="test_field" defaultValue="enter additional assessments" rows={5}
              />

              <h7>Genitourinary Interventions</h7>
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

  export default GeniForm;