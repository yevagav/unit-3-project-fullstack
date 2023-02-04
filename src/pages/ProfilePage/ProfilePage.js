import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import { createRoutesFromElements, Link, useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.scss'

// ---- import components ------ //
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function ProfilePage({ user, setUser }) {

    return (
        <main className={styles.ProfilePage}>
            <aside>
                <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
                <h3>{user.name}'s Cosmētika </h3>
                <UserLogOut user={user} setUser={setUser} />
            </aside>
            <div className={styles.header}>
                <h2>Happy {Date().slice(0, -53)}</h2>
                <h2> Beauty Prefrences </h2>
            </div>
            <div className={styles.questions}>
                <div className='beauty-form'>
                    <div>Skin Type: {user.skinType} </div>
                    <div>Skin Concerns: {user.skinConcerns}</div>
                    <div>Skin Tone: {user.skinTone}</div>
                    <div>Eye Color: {user.eyeColor}</div>
                </div>
            </div>
        </main>
    )
}