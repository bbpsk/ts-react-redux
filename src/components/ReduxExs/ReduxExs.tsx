import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { changeMessage, allCaps } from '../../store/messageSlice';
import './ReduxExs.scss';

const ReduxExs = () => {
  const message: string = useSelector((state: any) => state.message.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const update = () => {
    if(input){
      dispatch(changeMessage(input))
    }
    if(isChecked){
      dispatch(allCaps())
    }
    setInput('');
    setIsChecked(false);
  }

  return (
    <div className='ExContainer'>
      <div className='h5 font-monospace'>Redux Examples</div>
      <div className='py-2 font-monospace'>Below, you will find some examples which showcase the power of Redux Toolkit. 
        Try interacting with the forms and see the effects on the home page!</div>
      <Form.Group className="my-3 reduxForm">
        <Form.Label htmlFor="messageInput">Welcome Message</Form.Label>
        <Form.Control id="messageInput" type="text" placeholder={message} 
          value={input} onChange={(event) => setInput(event.target.value)}/>
        <div className="form-check my-3">
          <input className="form-check-input" type="checkbox" id="check" 
            checked={isChecked} onChange={(event) => setIsChecked(event.target.checked)}/>
          <label className="form-check-label" htmlFor="checkbox">
            All Caps
          </label>
        </div>
        <Button onClick={update}>Update</Button>
      </Form.Group>
    </div>
  )
}

export default ReduxExs;