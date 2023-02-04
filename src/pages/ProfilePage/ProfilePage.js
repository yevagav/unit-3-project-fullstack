import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ProfilePage.module.scss'

// ---- import components ------ //
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function ProfilePage({ user, setUser }) {
    return (
        <main className={styles.ProfilePage}>
            <aside>
                <Link to="/orders/new" className="button btn-sm">NEW ORDER</Link>
                <h3>{user.name}'s </h3>
                <UserLogOut user={user} setUser={setUser} />
            </aside>
            <div className={styles.header}>
                <h2>Beauty Prefrences</h2>
                <p>
                    Tell us your beauty traits and shopping preferences to unlock personalized recommendations.
                </p>
                <h3>Complete to Unlock Your Personalized Recommendations</h3>
            </div>
            <div className={styles.questions}>
            <h3>Skin Type:</h3>
            <h3>Skin Concerns:</h3>
            <h3>Skin Tone:</h3>
            <h3>Ingredient Prefrence:</h3>
            <h3>Eye Color:</h3>

            </div>
        </main>
    )
}