// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const VascularTableForm = () => {
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
          title="Vascular Access Form"
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

              <h7>Type of Access</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Peripheral venous catheter', onClick: () => {} },
                    {text: 'Midline peripheral catheter', onClick: () => {} },
                    {text: 'Peripherally inserted central catheter (PICC)', onClick: () => {} },
                    {text: 'Nontunneled percutaneous central venous catheter', onClick: () => {} },
                    {text: 'Tunneled central venous catheter', onClick: () => {} },
                    {text: 'Implanted Port', onClick: () => {} },
                ]}
              />

              <h7>Date Initiated</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="date"
                placeholder="Date"
              />

              <h7>Catheter Size</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: '18 Gauge', onClick: () => {} },
                    {text: '20 Gauge', onClick: () => {} },
                    {text: '22 Gauge', onClick: () => {} },
                    {text: '24 Gauge', onClick: () => {} },
                    {text: 'Other (describe in notes)', onClick: () => {} },
                ]}
              />

              <h7>Lumens</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: '1', onClick: () => {} },
                    {text: '2', onClick: () => {} },
                    {text: '3', onClick: () => {} },
                    {text: '4', onClick: () => {} },
                ]}
              />

              <h7>Location</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="location"
              />

              <h7>Skin Assessment</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Clean and dry', onClick: () => {} },
                    {text: 'Edema', onClick: () => {} },
                    {text: 'Pallor', onClick: () => {} },
                    {text: 'Cold', onClick: () => {} },
                    {text: 'Warm', onClick: () => {} },
                    {text: 'Tender', onClick: () => {} },
                    {text: 'Erythema', onClick: () => {} },
                    {text: 'Drainage', onClick: () => {} },
                    {text: 'Palpable cord', onClick: () => {} },
                    {text: 'Other (describe in notes)', onClick: () => {} },
                ]}
              />

              <h7>Dressing</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Clean and dry', onClick: () => {} },
                    {text: 'Soiled', onClick: () => {} },
                    {text: 'Wet', onClick: () => {} },
                ]}
              />

              <h7>Dressing Changed</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Patency</h7>
              <Dropdown
                text="Select"
                size= "sm"
                items={[
                    {text: 'Patent catheter with Saline Lock', onClick: () => {} },
                    {text: 'Patent catheter with Infusion fluids', onClick: () => {} },
                    {text: 'No patent', onClick: () => {} },
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

  export default VascularTableForm;