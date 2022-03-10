// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const AddHealth = () => {

    const [show, setShow] = useState(false)

    const [startDate, setStartDate] = useState(new Date())
    
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" class="btn btn-warning" onClick={() => setShow(!show)} style={{float: 'right', marginTop: '50px', marginRight: '32px', background: '#F5DE36', color: 'black'}}>
          Edit Health
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="Health Form"
          body={
            <div>
              <h7>Medical Number</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Medical Number"
              />
              <h7>Braden Score</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Braden Score"
              />
              <h7>Fall Risk</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="Fall risk score"
              />
              <h7>Diet</h7>
              <TextField
                name="test_field" defaultValue="enter patient diet" rows={5}
              />
              <h7>Allergies</h7>
              <TextField
                name="test_field" defaultValue="enter allergies" rows={5}
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
          middleButton=
          {<Button color="warning" onClick={() => setShow(!show)} style={{float: 'right', marginTop: '50px', marginRight: '32px', background: '#F5DE36', color: 'black'}}>
            Edit Vitals
          </Button>}
          /* {{
            children: 'Skip',
            color: 'warning',
            iconLocation: 'left',
            onClick: () => {
              console.log('clicked skip')
              setShow(!show)
            },
          }} */
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

  export default AddHealth;