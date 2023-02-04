import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import { createRoutesFromElements, Link, useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.scss'

// ---- import components ------ //
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function ProfilePage({ user, setUser }) {
   // --- state variables ---- //
  const [token, setToken] = useState('')
   const [beautyPrefs, setBeautyPrefs] = useState({
        skinType: '',
        skinConcerns: '',
        skinTone: '',
        ingredientsPrefer: '',
        eyeColor: ''

   })

   // --- api calls ---- //

   // submit beauty prefrences 
   const submitBeautyPref = async () => {
    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ ...beautyPrefs })
        })
        const data = await response.json()
        setBeautyPrefs([data, ...beautyPrefs])
    } catch (error) {
        console.error(error)
    } finally {
        setBeautyPrefs({
            skinType: '',
            skinConcerns: '',
            skinTone: '',
            ingredientsPrefer: '',
            eyeColor: ''
        })
    }
   }


   const handleChange = (event) => {
    setBeautyPrefs({ ...beautyPrefs, [event.target.name]: event.target.value })
  }


    return (
        <main className={styles.ProfilePage}>
            <aside>
                <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
                <h3>{user.name}'s Cosmētika </h3>
                <UserLogOut user={user} setUser={setUser} />
            </aside>
            <div className={styles.header}>
                <h2>Happy {Date().slice(0, -53)}</h2>
                <h2>Beauty Prefrences</h2>
                <p>
                    Tell us your beauty traits and shopping preferences to unlock personalized recommendations.
                </p>
                <h3>Complete to Unlock Your Personalized Recommendations</h3>
            </div>
            <div className={styles.questions}>
                <form onSubmit className='beauty-form'>
                    <label>Skin Type:</label>
                    <input type='text' name='skinType' value={user.skinType} onChange={handleChange}  />
                    <label>Skin Concerns:</label>
                    <input type='text' name='skinConcerns' value={user.skinConcerns} onChange={handleChange}  />
                    <label>Skin Tone:</label>
                    <input type='text' name='skinTone' value={user.skinTone} onChange={handleChange}  />
                    <label>Ingredient Prefrence:</label>
                    <input type='text' name='ingredientPrefer' value={user.ingredientsPrefer} onChange={handleChange}  />
                    <label>Eye Color:</label>
                    <input type='text' name='eyeColor' value={user.eyeColor} onChange={handleChange}  />
                    <input className='post-btn' type='submit' value='save' />
                </form>
            </div>
        </main>
    )
}