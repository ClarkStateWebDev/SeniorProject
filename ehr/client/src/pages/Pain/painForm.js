// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const PainForm = () => {
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" class="btn btn-warning" onClick={() => setShow(!show)} style={{float: 'right', marginTop: '50px', marginRight: '32px', background: '#F5DE36', color: 'black'}}>
          Add Entry
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="Pain Form"
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
              <h7>Entered by</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Name"
              />

              <h7>Pain Level</h7>
              <Dropdown
                text="BP Site"
                size= "sm"
                items={[
                    {text: '0 - no pain', onClick: () => {} },
                    {text: '1', onClick: () => {} },
                    {text: '2', onClick: () => {} },
                    {text: '3', onClick: () => {} },
                    {text: '4', onClick: () => {} },
                    {text: '5', onClick: () => {} },
                    {text: '6', onClick: () => {} },
                    {text: '7', onClick: () => {} },
                    {text: '8', onClick: () => {} },
                    {text: '9', onClick: () => {} },
                    {text: '10 - worst pain', onClick: () => {} },
                ]}
              />

              <h7>Location</h7>
              <TextField
                name="test_field" defaultValue="enter pain location" rows={5}
              />

              <h7>Frequency</h7>
              <Dropdown
                text="Frequency"
                size= "sm"
                items={[
                    {text: 'Constant', onClick: () => {} },
                    {text: 'Intermittent', onClick: () => {} },
                    {text: 'Brief', onClick: () => {} },
                    {text: 'Unable to state', onClick: () => {} },
                ]}
              /> 

              <h7>Pain Quality</h7>
              <Dropdown
                text="Pain Quality"
                size= "sm"
                items={[
                    {text: 'Sharp', onClick: () => {} },
                    {text: 'Dull', onClick: () => {} },
                    {text: 'Diffuse', onClick: () => {} },
                    {text: 'Stabbing', onClick: () => {} },
                    {text: 'Burning', onClick: () => {} },
                    {text: 'Sore', onClick: () => {} },
                    {text: 'Aching', onClick: () => {} },
                    {text: 'Tingling', onClick: () => {} },
                    {text: 'Cramping', onClick: () => {} },
                    {text: 'Shifting', onClick: () => {} },
                    {text: 'Vise-like pressure', onClick: () => {} },
                ]}
              />

              <h7>Behavioral & Physiologic Responses to Pain</h7>
              <TextField
                name="test_field" defaultValue="enter patient's response to pain" rows={5}
              />

              <h7>Pain Interventions</h7>
              <TextField
                name="test_field" defaultValue="enter pain interventions" rows={5}
              />
            </div>
          }
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

  export default PainForm;