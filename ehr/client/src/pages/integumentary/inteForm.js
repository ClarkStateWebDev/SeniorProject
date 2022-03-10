// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const InteForm = () => {
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
          title="Integumentary Form"
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

              <h7>Color</h7>
              <Dropdown
                text="Color"
                size= "sm"
                items={[
                    {text: 'As expected', onClick: () => {} },
                    {text: 'Erythema', onClick: () => {} },
                    {text: 'Cyanotic', onClick: () => {} },
                    {text: 'Jaundice', onClick: () => {} },
                    {text: 'Pallor', onClick: () => {} },
                    {text: 'Vitiligo', onClick: () => {} },
                ]}
              />

              <h7>Vascularity</h7>
              <Dropdown
                text="Vascularity"
                size= "sm"
                items={[
                    {text: 'None', onClick: () => {} },
                    {text: 'Ecchymosis', onClick: () => {} },
                    {text: 'Petechiae', onClick: () => {} },
                    {text: 'Other (describe in notes)', onClick: () => {} },
                ]}
              />

              <h7>Temperature</h7>
              <Dropdown
                text="Temperature"
                size= "sm"
                items={[
                    {text: 'Warm', onClick: () => {} },
                    {text: 'Cool', onClick: () => {} },
                    {text: 'Hot', onClick: () => {} },
                ]}
              />

              <h7>Texture</h7>
              <Dropdown
                text="Texture"
                size= "sm"
                items={[
                    {text: 'Smooth', onClick: () => {} },
                    {text: 'Rough', onClick: () => {} },
                    {text: 'Loose', onClick: () => {} },
                    {text: 'Wrinkled', onClick: () => {} },
                ]}
              />

              <h7>Moisture</h7>
              <Dropdown
                text="Moisture"
                size= "sm"
                items={[
                    {text: 'Dry', onClick: () => {} },
                    {text: 'Clammy', onClick: () => {} },
                    {text: 'Diaphoretic', onClick: () => {} },
                ]}
              />
              
              <h7>Turgor</h7>
              <Dropdown
                text="Moisture"
                size= "sm"
                items={[
                    {text: 'Brisk recoil', onClick: () => {} },
                    {text: 'Slow recoil', onClick: () => {} },
                    {text: 'Tents', onClick: () => {} },
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

  export default InteForm;