// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const WoundCharTableForm = () => {
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
          title="Wound Characteristics Form"
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

              <h7>Tissue Type</h7>
              <Dropdown
                text="Tissue Type"
                size= "sm"
                items={[
                    {text: 'Granulating', onClick: () => {} },
                    {text: 'Slough', onClick: () => {} },
                    {text: 'Necrotic', onClick: () => {} },
                ]}
              />
              
              <h7>Exudate</h7>
              <Dropdown
                text="Exudate"
                size= "sm"
                items={[
                    {text: 'Serous', onClick: () => {} },
                    {text: 'Serosanguineous', onClick: () => {} },
                    {text: 'Sanguineous', onClick: () => {} },
                    {text: 'Purulent', onClick: () => {} },
                ]}
              />

              <h7>Tunneling</h7>
              <Dropdown
                text="Tunneling"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Wound Edges</h7>
              <Dropdown
                text="Wound Edges"
                size= "sm"
                items={[
                    {text: 'Well approximated', onClick: () => {} },
                    {text: 'Staples intact', onClick: () => {} },
                    {text: 'Sutures intact', onClick: () => {} },
                    {text: 'Gaping', onClick: () => {} },
                    {text: 'Macerated', onClick: () => {} },
                    {text: 'Dehydrated', onClick: () => {} },
                    {text: 'Undermining', onClick: () => {} },
                    {text: 'Rolled edges', onClick: () => {} },
                ]}
              />

              <h7>Periwound</h7>
              <Dropdown
                text="Periwound"
                size= "sm"
                items={[
                    {text: 'Skin without deficit', onClick: () => {} },
                    {text: 'Maceration', onClick: () => {} },
                    {text: 'Excoriation', onClick: () => {} },
                    {text: 'Dry', onClick: () => {} },
                    {text: 'Hyperkeratosis', onClick: () => {} },
                    {text: 'Callus', onClick: () => {} },
                    {text: 'Edema', onClick: () => {} },
                    {text: 'Warm', onClick: () => {} },
                    {text: 'Pain', onClick: () => {} },
                ]}
              />

              <h7>Dehiscence</h7>
              <Dropdown
                text="Dehiscence"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
                ]}
              />

              <h7>Evisceration</h7>
              <Dropdown
                text="Evisceration"
                size= "sm"
                items={[
                    {text: 'Yes', onClick: () => {} },
                    {text: 'No', onClick: () => {} },
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

  export default WoundCharTableForm;