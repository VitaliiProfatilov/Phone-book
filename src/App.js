import { Routes, Route } from 'react-router-dom';
import { PhoneBook } from './components/PhoneBook';
import { AddEdit } from './components/AddEdit';
import { useState } from 'react';
import React from 'react';

export function App() {
  const [contact, setContact] = useState()
  const [contactsInfo, setContactsInfo] = useState(
    [
      {
        name: 'Name',
        lastName: 'Last Name',
        address: 'Address',
        city: 'Cyti',
        country: 'Country',
        email: [{value: 'Email', id: 1}],
        number: [{value: 'Number', id: 1}],
        id: 0
      },
      {
        name: 'test1',
        lastName: 'test1',
        address: 'test1',
        city: 'test1',
        country: 'test1',
        email: [{value: 'test1@test1.com', id: 1}, {value: 'test1@test1.com', id: 2}],
        number: [{value: '11111111', id: 1}],
        id: 1
      },
      {
        name: 'test2',
        lastName: 'test2',
        address: 'test2',
        city: 'test2',
        country: 'test2',
        email: [{value: 'test2@test2.com', id: 1}],
        number: [{value: '222222', id: 1}],
        id: 2
      },
      {
        name: 'test3',
        lastName: 'test3',
        address: 'test3',
        city: 'test3',
        country: 'test3',
        email: [{value: 'test3@test3.com', id: 1}],
        number: [{value: '333333', id: 1}],
        id: 3
      }
    ]
  );

  function contactsData(newContact) {
    newContact.id = contactsInfo[contactsInfo.length - 1].id + 1;
    return setContactsInfo([...contactsInfo, newContact])
  }

  function deleteContacts(id) {
    return setContactsInfo(contactsInfo.filter((el) => el.id !== id))
  }

  function editContacts(id) {
    setContact(contactsInfo[id])
  }

  function editData(editContact) {
    const array = contactsInfo;
    return array[editContact.id] = editContact
  }

  return (
    <Routes>
      <Route path='/' element={<PhoneBook 
        contactsInfo={contactsInfo} 
        deleteContacts={deleteContacts} 
        editContacts={editContacts} 
      />} />
      <Route path='Add' element={<AddEdit contactsData={contactsData} />} />
      <Route path='Edit' element={<AddEdit 
        contactsData={contactsData}
        editData={editData}
        contact={contact}  
      />} />
    </Routes>
  )
}
