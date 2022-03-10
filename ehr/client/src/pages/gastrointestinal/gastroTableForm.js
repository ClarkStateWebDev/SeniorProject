// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const GastroTableForm = () => {
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
          title="Gastrointestinal Form"
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

              <h7>Abdomen Inspection</h7>
              <Dropdown
                text="Abdomen"
                size= "sm"
                items={[
                    {text: 'Symmetrical', onClick: () => {} },
                    {text: 'Umbilicus Intact', onClick: () => {} },
                    {text: 'Umbilicus Piercings', onClick: () => {} },
                    {text: 'umbilicus Drainage', onClick: () => {} },
                    {text: 'Flat', onClick: () => {} },
                    {text: 'Rounded', onClick: () => {} },
                    {text: 'Concave', onClick: () => {} },
                    {text: 'Distended', onClick: () => {} },
                    {text: 'Visible Masses', onClick: () => {} },
                    {text: 'Visible Pulsations', onClick: () => {} },
                    {text: 'Visible Peristalsis', onClick: () => {} },
                ]}
              />

              <h7>Abdomen Auscultation</h7>
              <Dropdown
                text="Abdomen"
                size= "sm"
                items={[
                    {text: 'Active in all quadrants', onClick: () => {} },
                    {text: 'Hyperactive', onClick: () => {} },
                    {text: 'Hypoactive', onClick: () => {} },
                    {text: 'Absent', onClick: () => {} },
                    {text: 'Other (describe in notes)', onClick: () => {} },
                ]}
              />

              <h7>Last Bowel Movement</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="time"
                placeholder="Time"
              />

              <h7>Stool Type</h7>
              <Dropdown
                text="Stool Type"
                size= "sm"
                items={[
                    {text: 'Formed', onClick: () => {} },
                    {text: 'Hard', onClick: () => {} },
                    {text: 'Soft', onClick: () => {} },
                    {text: 'Watery', onClick: () => {} },
                    {text: 'Bloody', onClick: () => {} },
                    {text: 'Tarry', onClick: () => {} },
                    {text: 'Other (describe in notes)', onClick: () => {} },
                ]}
              />

              <h7>Ostomy "See Integumentary Assessment"</h7>
              <Dropdown
                text="Ostomy"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Tubes "See Drains/Tubes Assessment</h7>
              <Dropdown
                text="Tubes"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Nursing Notes</h7>
              <TextField
                name="test_field" defaultValue="enter notes" rows={5}
              />

              <h7>Interventions</h7>
              <TextField
                name="test_field" defaultValue="enter interventions taken" rows={5}
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

  export default GastroTableForm;