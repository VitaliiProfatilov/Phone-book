import styles from './AddEdit.module.scss';
import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function AddEdit({contactsData, editData, contact}) {
    const [name, setName] = useState(contact?.name || '');
    const [lastName, setLastName] = useState(contact?.lastName || '');
    const [address, setAddress] = useState(contact?.address || '');
    const [city, setCity] = useState(contact?.city || '');
    const [country, setCountry] = useState(contact?.country || '');
    const [onError, setOnError] = useState(false);
    const [renderState, setRenderState] = useState(false);
    const [email, setEmail] = useState(contact?.email || 
        [{
            value: '', id: 1
        }]);
    const [number, setNumber] = useState(contact?.number || 
        [{
            value: '', id: 1
        }]);

    function go() {
        return !!(name && lastName && address && city && country && email[0].value && number[0].value) ? true : false
    }

    function changeEmailArr(value, id) {
        email[id-1].value = value;
        return setRenderState(!renderState)
    }

    function changeNumberArr(value, id) {
        number[id-1].value = value;
        return setRenderState(!renderState)
    }
    
    return (
        <div className={styles.wrapper}>
            <Header/>
            <div className={styles.content}>
                <h2>
                    {window.location.href === 'vitaliiprofatilov.github.io/Phone-book/Add' ? 'Register new contact' : 'Edit contact'}
                </h2>
                <form className={styles.form}>
                    <div> 
                        <label> Name: </label> 
                        <input value={name} placeholder='  Enter the Name' onChange={(e) => setName(e.target.value )} /> 
                        {onError && !name && <div className={styles.error} > Please, fill </div>}
                    </div>
                    <div> 
                        <label> LastName: </label>
                        <input value={lastName} placeholder='  Enter the Last Name' onChange={(e) => setLastName(e.target.value )} /> 
                        {onError && !lastName && <div className={styles.error} > Please, fill </div>}
                    </div>
                    <div> 
                        <label> Address: </label> 
                        <input value={address} placeholder='  Enter the Address' onChange={(e) => setAddress(e.target.value )} /> 
                        {onError && !address && <div className={styles.error} > Please, fill </div>}
                    </div>
                    <div>
                        <label>  City: </label> 
                        <input value={city} placeholder='  Enter the City' onChange={(e) => setCity(e.target.value )} /> 
                        {onError && !city && <div className={styles.error} > Please, fill </div>}
                    </div>
                    <div> 
                        <label> Country: </label> 
                        <input value={country} placeholder='  Enter the Country' onChange={(e) => setCountry(e.target.value )} /> 
                        {onError && !country && <div className={styles.error} > Please, fill </div>}
                    </div>
                    <div> 
                        <label> Email: </label>
                        <div className={`${email.length === 1 && styles.input}`}>
                            {email.map((data) => ( 
                                <input
                                    value={data.value}                                      
                                    key={data.id} 
                                    placeholder='  Enter the Email'
                                    onChange={(e) => changeEmailArr(e.target.value, data.id)} 
                                /> 
                            ))}
                            <div className={`${email.length > 1 && styles.button}`}>
                                <button 
                                    type="button" 
                                    onClick={() => setEmail([...email, {value: '', id: email.length + 1}])} 
                                > Add </button>
                            </div>
                        </div>
                        {onError && !email[0].value && <div className={styles.error} > Please, fill </div>}
                    </div>
                    <div> 
                        <label> Number: </label> 
                        <div className={`${number.length === 1 && styles.input}`} >
                            {number.map((data) => ( 
                                <input
                                    value={data.value} 
                                    key={data.id} 
                                    placeholder='  Enter the Number'
                                    onChange={(e) => changeNumberArr(e.target.value, data.id)} 
                                /> 
                            ))}
                            <div className={`${number.length > 1 && styles.button}`}>
                                <button 
                                    type="button" 
                                    onClick={() => setNumber([...number, {value: '', id: number.length + 1}])} 
                                > Add </button>
                            </div>
                        </div>
                        {onError && !number[0].value && <div className={styles.error} > Please, fill </div>}
                    </div>
                </form>
                <Link to={go() && '/Phone-book' } >
                    <button onClick={() => {window.location.href === 'vitaliiprofatilov.github.io/Phone-book/Add' ? go() && contactsData 
                        ({
                            name: name,
                            lastName: lastName,
                            address: address,
                            city: city,
                            country: country,
                            email: email,
                            number: number,
                            id: null
                        }) 
                        : go() && editData
                        ({
                            name: name,
                            lastName: lastName,
                            address: address,
                            city: city,
                            country: country,
                            email: email,
                            number: number,
                            id: contact?.id
                        }); setOnError(true)}
                    }> 
                        Save 
                    </button>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}