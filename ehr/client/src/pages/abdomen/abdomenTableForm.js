// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'

const AbdomenTableForm = () => {
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
          title="Abdomen Form"
          body={
            <div>
              <h7>Nontender RLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />

              <h7>Nontender RUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />

              <h7>Nontender LUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />

              <h7>Nontender LLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />

              <h7>Tender RLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
             
              <h7>Tender RUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Tender LUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Tender LLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Painful RLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
                            
              <h7>Painful RUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Painful LUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Painful LLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Soft RLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Soft RUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Soft LUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Soft LLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Firm RLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Firm RUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Firm LUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Firm LLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Rigid RLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Rigid RUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Rigid LUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Rigid LLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Guarding RLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Guarding RUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Guarding LUQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
              />
              
              <h7>Guarding LLQ</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="text"
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

  export default AbdomenTableForm;