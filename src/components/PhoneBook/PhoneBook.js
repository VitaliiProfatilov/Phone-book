import styles from './PhoneBook.module.scss';
import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';

export function PhoneBook({contactsInfo, deleteContacts, editContacts}) {


    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.content}>
                <h1>
                    Contacts
                </h1>
                <Link to='Add' className={styles.buttonContainer}>
                    <button className={styles.contactButton}>
                        Add Contact
                    </button>
                </Link>
                {!!contactsInfo &&
                contactsInfo.map((info) => (
                    <div className={styles.infoContainer} key={info.id}>
                        <div className={`${(info.id % 2) ? styles.even : info.id === 0 && styles.firstChild}`}> {info.name} </div>
                        <div className={`${(info.id % 2) ? styles.even : info.id === 0 && styles.firstChild}`}> {info.lastName} </div>
                        <div className={`${(info.id % 2) ? styles.even : info.id === 0 && styles.firstChild}`}> {info.address} </div>
                        <div className={`${(info.id % 2) ? styles.even : info.id === 0 && styles.firstChild}`}> {info.city} </div>
                        <div className={`${(info.id % 2) ? styles.even : info.id === 0 && styles.firstChild}`}> {info.country} </div>
                        <div className={`${(info.id % 2) ? styles.even : info.id === 0 && styles.firstChild}`}> 
                        {info.email.map((data) => ( 
                                <span key={data.id} > {data.value} </span>
                            ))}
                        </div>
                        <div className={`${(info.id % 2) ? styles.even : info.id === 0 && styles.firstChild}`}> 
                        {info.number.map((data) => ( 
                                <span key={data.id} > {data.value} </span>
                            ))}
                        </div>
                        <div className={`${(info.id % 2) ? styles.even : info.id === 0 && styles.firstChild}`}> 
                            <Link to='Edit' 
                                className={`${info.id !== 0 ? styles.edit : styles.noDekor}`}
                                onClick={() => info.id !== 0 && editContacts(info.id)}
                            >
                                Edit 
                            </Link>
                        </div>
                        <div className={`${(info.id % 2) ? styles.even : info.id === 0 && styles.firstChild}`}> 
                            <span  
                                className={`${info.id !== 0 && styles.delete}`}
                                onClick={() => info.id !== 0 && deleteContacts(info.id)}
                            >
                                Delete 
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </div>
    )
}