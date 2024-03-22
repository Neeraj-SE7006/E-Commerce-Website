// App.jsx
import React, { useState, useEffect, useCallback } from 'react';
import AddContact from './AddContact';
import Footer from '../Footer/Footer';

function ContactApp() {


async function addContactHandler(contact) {
      const response = await fetch('https://customer-report-data-default-rtdb.asia-southeast1.firebasedatabase.app/contacts.json', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
          'Content-Type': 'application/json'
        }
      })
}
      


  



  return (
    <React.Fragment>
        <AddContact onAddContact={addContactHandler} />
        <Footer />
    </React.Fragment>
  );
}

export default ContactApp;
