// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const AddHospInfo = () => {
    const [show, setShow] = useState(false)
    const [startDate, setStartDate] = useState(new Date())
    return (
      <div style={{ textAlign: 'center' }}>
        <Button color="info" class="btn btn-warning" onClick={() => setShow(!show)} style={{float: 'right', marginTop: '50px', marginRight: '32px', background: '#F5DE36', color: 'black'}}>
          Edit Hospital Info
        </Button>
        <Modal
          show={show}
          toggle={() => setShow(!show)}
          title="Hospital Information Form"
          body={
            <div>
              <h7>Room Number</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="number"
                placeholder="room number"
              />
              <h7>Admit Date</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="date"
                placeholder="Admit Date"
              />
              
              <h7>Code Status</h7>
              <Dropdown
                text="Code Status"
                size= "sm"
                items={[
                    {text: 'Full Code', onClick: () => {} },
                    {text: 'Do not Resuscitate', onClick: () => {} },
                    {text: 'Comfort Measures Only', onClick: () => {} },
                    {text: 'Do not Intubate', onClick: () => {} },
                    {text: 'Terminal Weaning', onClick: () => {} },
                ]}
              />
              <h7>Isolation Status</h7>
              <Dropdown
                text="Isolation Status"
                size="sm"
                items={[
                    {text: 'standard', onClick: () => {} },
                    {text: 'contact', onClick: () => {} },
                    {text: 'droplet', onClick: () => {} },
                    {text: 'airborne', onClick: () => {} },
                ]}
                
              />
              <h7>Activity Level</h7>
              <Dropdown
                text="Activity Level"
                items={[
                    {text: 'Bedrest', onClick: () => {} },
                    {text: 'BRP only', onClick: () => {} },
                    {text: 'Bedside commode only', onClick: () => {} },
                    {text: 'Dangle', onClick: () => {} },
                    {text: 'Up as tolerated', onClick: () => {} }
                ]}
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

  export default AddHospInfo;