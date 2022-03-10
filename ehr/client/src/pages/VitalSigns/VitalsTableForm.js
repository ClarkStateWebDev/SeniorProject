// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const VitalsTableForm = () => {
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" class="btn btn-warning" onClick={() => setShow(!show)} style={{background: '#F5DE36', color: 'black'}}>
          Edit Entry
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="Vitals Form"
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

              <h7>BP Site</h7>
              <Dropdown
                text="BP Site"
                size= "sm"
                items={[
                    {text: 'Left arm', onClick: () => {} },
                    {text: 'Right arm', onClick: () => {} },
                    {text: 'Left leg', onClick: () => {} },
                    {text: 'Right leg', onClick: () => {} },
                    {text: 'Monitor', onClick: () => {} },
                ]}
              />

              <h7>BP Position</h7>
              <Dropdown
                text="BP Position"
                size= "sm"
                items={[
                    {text: 'Lying', onClick: () => {} },
                    {text: 'Sitting', onClick: () => {} },
                    {text: 'Standing', onClick: () => {} },
                ]}
              />
              
              <h7>Pulse Rate</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="number"
                placeholder="Pulse Rate"
              />

              <h7>Pulse Site</h7>
              <Dropdown
                text="Pulse Site"
                size= "sm"
                items={[
                    {text: 'Radial', onClick: () => {} },
                    {text: 'Brachial', onClick: () => {} },
                    {text: 'Apical', onClick: () => {} },
                    {text: 'Pedal', onClick: () => {} },
                    {text: 'Monitor', onClick: () => {} },
                ]}
              />

              <h7>Pulse Rhythm</h7>
              <Dropdown
                text="Pulse Rhythm"
                size= "sm"
                items={[
                    {text: 'Regular', onClick: () => {} },
                    {text: 'Irregular', onClick: () => {} },
                ]}
              />

              <h7>Pulse Amplitude</h7>
              <Dropdown
                text="Pulse Amplitude"
                size= "sm"
                items={[
                    {text: '0/absent', onClick: () => {} },
                    {text: '+1/diminished', onClick: () => {} },
                    {text: '+2/Brisk (normal)', onClick: () => {} },
                    {text: '+3/bounding', onClick: () => {} },
                ]}
              />

              <h7>Respiratory Rate</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="number"
                placeholder="Respiratory Rate"
              />

              <h7>Respiratory Quality</h7>
              <Dropdown
                text="Respiratory Quality"
                size= "sm"
                items={[
                    {text: 'Unlabored/Eupnea', onClick: () => {} },
                    {text: 'Labored/Dyspnea', onClick: () => {} },
                ]}
              />

              <h7>Temperature</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="number"
                placeholder="Temperature"
              />

              <h7>Temperature Site</h7>
              <Dropdown
                text="Temperature Site"
                size= "sm"
                items={[
                    {text: 'Temporal', onClick: () => {} },
                    {text: 'Tympanic', onClick: () => {} },
                    {text: 'Oral', onClick: () => {} },
                    {text: 'Axillary', onClick: () => {} },
                    {text: 'Rectal', onClick: () => {} },
                ]}
              />
              
              <h7>Oxygen Saturation</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="number"
                placeholder="Oxygen Saturation"
              />

              <h7>O2 Site</h7>
              <Dropdown
                text="O2 Site"
                size= "sm"
                items={[
                    {text: 'Finger', onClick: () => {} },
                    {text: 'Toe', onClick: () => {} },
                    {text: 'Earlobe', onClick: () => {} },
                ]}
              />

              <h7>Comments</h7>
              <TextField
                name="test_field" defaultValue="enter comments" rows={5}
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

  export default VitalsTableForm;