// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const HeadForm = () => {
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
          title="Head Form"
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

              <h7>Head/Scalp</h7>
              <Dropdown
                text="Head/Scalp"
                size= "sm"
                items={[
                    {text: 'Symmetrical', onClick: () => {} },
                    {text: 'Skin intact', onClick: () => {} },
                    {text: 'Lesions', onClick: () => {} },
                    {text: 'Lumps', onClick: () => {} },
                    {text: 'Tenderness', onClick: () => {} },
                    {text: 'Infestations', onClick: () => {} },
                ]}
              />

              <h7>Hair</h7>
              <Dropdown
                text="Hair"
                size= "sm"
                items={[
                    {text: 'Evenly distributed', onClick: () => {} },
                    {text: 'Thinning', onClick: () => {} },
                    {text: 'Patches', onClick: () => {} },
                    {text: 'Alopecia', onClick: () => {} },
                    {text: 'Hirsutism', onClick: () => {} },
                    {text: 'Dry', onClick: () => {} },
                    {text: 'Oily', onClick: () => {} },
                ]}
              />

              <h7>Face</h7>
              <Dropdown
                text="Face"
                size= "sm"
                items={[
                    {text: 'Symmetrical', onClick: () => {} },
                    {text: 'Unusual size', onClick: () => {} },
                    {text: 'Unusual contour', onClick: () => {} },
                    {text: 'Muscle tone intact', onClick: () => {} },
                    {text: 'Facial droop', onClick: () => {} },
                    {text: 'Muscle strength strong', onClick: () => {} },
                    {text: 'Muscle strength weak', onClick: () => {} },
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

  export default HeadForm;