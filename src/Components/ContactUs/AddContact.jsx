// AddContact.jsx
import React, { useRef, useState } from 'react';
import classes from './AddContact.module.css';

function AddContact(props) {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneRef = useRef('');
  const queryRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();
    const contact = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      query: queryRef.current.value
    };
    if(nameRef !== '' && emailRef !== '' && phoneRef !== '' && queryRef !== ''){
      props.onAddContact(contact);
      alert('Thanks For contact us, We will get back to you soon!');
    }
    nameRef.current.value = '';
    emailRef.current.value = '';
    phoneRef.current.value = '';
    queryRef.current.value = '';
  }

 



  return (
    <>
    
    <div className={classes['form-container']}>
      <form onSubmit={submitHandler}>
        <div className={classes['header']}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>Contact Form</h2>
        </div>
        <div className={classes['input-group']}>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' ref={nameRef} required />
        </div>
        <div className={classes['input-group']}>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' ref={emailRef} required/>
        </div>
        <div className={classes['input-group']}>
          <label htmlFor='phone'>Phone</label>
          <input type='tel' id='phone' ref={phoneRef} required/>
        </div>
        <div className={classes['input-group']}>
          <label htmlFor='query'>Describe your issue</label>
          <textarea id='query' ref={queryRef} required></textarea>
        </div>
        
        <button className={classes['submit-btn']} type='submit'>Add Contact</button>
      </form>
    </div>
    </>
  );
}

export default AddContact;
