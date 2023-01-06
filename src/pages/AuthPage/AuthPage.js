import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"
import styles from './AuthPage.module.scss';

export default function AuthPage(props){
    return(
        <main>
            <h1>Auth Page</h1>
            <SignUpForm setUser={props.setUser}/>
            <LoginForm setUser={props.setUser}/>
        </main>
    )
}