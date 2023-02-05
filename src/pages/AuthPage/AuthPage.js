import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import styles from './AuthPage.module.scss';
import { useState } from 'react'

export default function AuthPage(props){
    const [showSignUp, setShowSignUp] = useState(false)

    return(
        <main className={styles.AuthPage}>
            <div className={styles.forms}>
            <p>All your favorites in one stop.</p> 
            {
            showSignUp
              ? <SignUpForm setUser={props.setUser} setShowSignUp={setShowSignUp} />
              : <LoginForm setUser={props.setUser} setShowSignUp={setShowSignUp}/>
            }
            </div>
        </main>
    )
}