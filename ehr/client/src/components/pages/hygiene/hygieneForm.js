// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const HygieneForm = () => {
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
          title="Hygiene Form"
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

              <h7>Bathing</h7>
              <Dropdown
                text="Bathing"
                size= "sm"
                items={[
                    {text: 'Shower', onClick: () => {} },
                    {text: 'Bed bath with assist', onClick: () => {} },
                    {text: 'Bed bath total care', onClick: () => {} },
                    {text: 'Sitz bath', onClick: () => {} },
                    {text: 'Perineal care', onClick: () => {} },
                    {text: 'Pre-surgical Skin cleanser/prep', onClick: () => {} },
                    {text: 'Refused', onClick: () => {} },
                ]}
              />

              <h7>Dressing</h7>
              <Dropdown
                text="Dressing"
                size= "sm"
                items={[
                    {text: 'Applies hospital gown independently', onClick: () => {} },
                    {text: 'Applies own clothes independently', onClick: () => {} },
                    {text: 'Needs assistance with dressing', onClick: () => {} },
                    {text: 'Needs total dressing care', onClick: () => {} },
                ]}
              />

              <h7>Oral Care</h7>
              <Dropdown
                text="oral care"
                size= "sm"
                items={[
                    {text: 'Independent oral care', onClick: () => {} },
                    {text: 'Needs assistance with oral care', onClick: () => {} },
                    {text: 'Needs total oral care', onClick: () => {} },
                    {text: 'Refused', onClick: () => {} },
                ]}
              />

              <h7>Linen</h7>
              <Dropdown
                text="Linen"
                size= "sm"
                items={[
                    {text: 'No linen change needed', onClick: () => {} },
                    {text: 'Complete linen change', onClick: () => {} },
                    {text: 'Partial linen change', onClick: () => {} },
                    {text: 'Gown only', onClick: () => {} },
                    {text: 'Refused', onClick: () => {} },
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

  export default HygieneForm;