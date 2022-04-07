// import statements
import React, { useState } from 'react';
import {Modal, Button, TextInput, Dropdown, DateTimePicker, TextField} from '@hospitalrun/components'
import {Tabs, Tab, AppBar} from '@material-ui/core';

const CranialForm = () => {
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
          title="Cranial Nerve Assessment Form"
          body={
            
            <div>
               <h5>CN1</h5> 
              <h7>Nerve Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              /> 
              <h7>Type</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="type"
              /> 
              <h7>Functions</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="functions"
              /> 
              <h7>Method</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="method"
              /> 
              <h7>Results</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="results"
              /> 
              <br></br>
              {/* Nerve 2*/}
              <h5>CN2</h5> 
              <h7>Nerve Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              /> 
              <h7>Type</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="type"
              /> 
              <h7>Functions</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="functions"
              /> 
              <h7>Method</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="method"
              /> 
              <h7>Results</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="results"
              /> 
              <br></br>
              {/* Nerve 3*/}
              <h5>CN3</h5> 
              <h7>Nerve Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              /> 
              <h7>Type</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="type"
              /> 
              <h7>Functions</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="functions"
              /> 
              <h7>Method</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="method"
              /> 
              <h7>Results</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="results"
              /> 
              <br></br>
              {/* Nerve 4*/}
              <h5>CN4</h5> 
              <h7>Nerve Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              /> 
              <h7>Type</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="type"
              /> 
              <h7>Functions</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="functions"
              /> 
              <h7>Method</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="method"
              /> 
              <h7>Results</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="results"
              /> 
              <br></br>
              {/* Nerve 5*/}
              <h5>CN5</h5> 
              <h7>Nerve Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              /> 
              <h7>Type</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="type"
              /> 
              <h7>Functions</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="functions"
              /> 
              <h7>Method</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="method"
              /> 
              <h7>Results</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="results"
              />
              <br></br> 
              {/* Nerve 6*/}
              <h5>CN6</h5> 
              <h7>Nerve Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              /> 
              <h7>Type</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="type"
              /> 
              <h7>Functions</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="functions"
              /> 
              <h7>Method</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="method"
              /> 
              <h7>Results</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="results"
              /> 
              <br></br>
              {/* Nerve 7*/}
              <h5>CN7</h5> 
              <h7>Nerve Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              /> 
              <h7>Type</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="type"
              /> 
              <h7>Functions</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="functions"
              /> 
              <h7>Method</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="method"
              /> 
              <h7>Results</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="results"
              /> 
              <br></br>
              {/* Nerve 8*/}
              <h5>CN8</h5> 
              <h7>Nerve Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              /> 
              <h7>Type</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="type"
              /> 
              <h7>Functions</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="functions"
              /> 
              <h7>Method</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="method"
              /> 
              <h7>Results</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="results"
              /> 
              <br></br>
              {/* Nerve 9*/}
              <h5>CN9</h5> 
              <h7>Nerve Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              /> 
              <h7>Type</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="type"
              /> 
              <h7>Functions</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="functions"
              /> 
              <h7>Method</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="method"
              /> 
              <h7>Results</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="results"
              /> 
              <br></br>
              {/* Nerve 10*/}
              <h5>CN10</h5> 
              <h7>Nerve Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              /> 
              <h7>Type</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="type"
              /> 
              <h7>Functions</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="functions"
              /> 
              <h7>Method</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="method"
              /> 
              <h7>Results</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="results"
              /> 
              <br></br>
              {/* Nerve 11*/}
              <h5>CN11</h5> 
              <h7>Nerve Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              /> 
              <h7>Type</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="type"
              /> 
              <h7>Functions</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="functions"
              /> 
              <h7>Method</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="method"
              /> 
              <h7>Results</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="results"
              /> 
              <br></br>
              {/* Nerve 12*/}
              <h5>CN12</h5> 
              <h7>Nerve Name</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="name"
              /> 
              <h7>Type</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="type"
              /> 
              <h7>Functions</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="functions"
              /> 
              <h7>Method</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="method"
              /> 
              <h7>Results</h7>
              <TextInput
                id="text-input"
                name="text-input"
                type="text"
                placeholder="results"
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

  export default CranialForm;