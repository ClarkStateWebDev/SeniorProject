// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const LungForm = () => {
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
          title="Lung Auscultation Form"
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

              <h7>Anterior Lung Auscultation</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Clear', onClick: () => {} },
                    {text: 'Diminished', onClick: () => {} },
                    {text: 'Wheeze', onClick: () => {} },
                    {text: 'Rhonchi', onClick: () => {} },
                    {text: 'Crackles', onClick: () => {} },
                    {text: 'Stridor', onClick: () => {} },
                    {text: 'Friction Rub', onClick: () => {} },
                ]}
              />

              <h7>Right Lateral Lung Auscultation</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Clear', onClick: () => {} },
                    {text: 'Diminished', onClick: () => {} },
                    {text: 'Wheeze', onClick: () => {} },
                    {text: 'Rhonchi', onClick: () => {} },
                    {text: 'Crackles', onClick: () => {} },
                    {text: 'Stridor', onClick: () => {} },
                    {text: 'Friction Rub', onClick: () => {} },
                ]}
              />

              <h7>Left Lateral Lung Auscultation</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Clear', onClick: () => {} },
                    {text: 'Diminished', onClick: () => {} },
                    {text: 'Wheeze', onClick: () => {} },
                    {text: 'Rhonchi', onClick: () => {} },
                    {text: 'Crackles', onClick: () => {} },
                    {text: 'Stridor', onClick: () => {} },
                    {text: 'Friction Rub', onClick: () => {} },
                ]}
              />

              <h7>Posterior Lung Auscultation</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Clear', onClick: () => {} },
                    {text: 'Diminished', onClick: () => {} },
                    {text: 'Wheeze', onClick: () => {} },
                    {text: 'Rhonchi', onClick: () => {} },
                    {text: 'Crackles', onClick: () => {} },
                    {text: 'Stridor', onClick: () => {} },
                    {text: 'Friction Rub', onClick: () => {} },
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

  export default LungForm;