// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const IntakeTableForm = () => {
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
          title="Intake Form"
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

              <h7>Food Intake Pattern</h7>
              <Dropdown
                text="Food Intake"
                size= "sm"
                items={[
                    {text: 'NPO', onClick: () => {} },
                    {text: 'Eats independently', onClick: () => {} },
                    {text: 'Needs assistance', onClick: () => {} },
                    {text: 'Total feed', onClick: () => {} },
                    {text: 'Total parenternal nutrition', onClick: () => {} },
                    {text: 'Refuses to eat', onClick: () => {} },
                ]}
              />

              <h7>Fluid Intake Pattern</h7>
              <Dropdown
                text="Fluid Intake"
                size= "sm"
                items={[
                    {text: 'NPO', onClick: () => {} },
                    {text: 'Ice chips only', onClick: () => {} },
                    {text: 'Drinks independently', onClick: () => {} },
                    {text: 'Drinks with assistence', onClick: () => {} },
                    {text: 'Intravenous fluids', onClick: () => {} },
                    {text: 'Fluids given via feeding tube', onClick: () => {} },
                    {text: 'Restricted fluids', onClick: () => {} },
                    {text: 'Refuses to drink', onClick: () => {} },
                ]}
              />

              <h7>Feeding Tube</h7>
              <Dropdown
                text="Feeding Tube"
                size= "sm"
                items={[
                    {text: 'None', onClick: () => {} },
                    {text: 'Continuous', onClick: () => {} },
                    {text: 'Intermittent', onClick: () => {} },
                    {text: 'Residual', onClick: () => {} },
                ]}
              />

              <h7>Nursing Notes</h7>
              <TextField
                name="test_field" defaultValue="enter notes" rows={5}
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

  export default IntakeTableForm;