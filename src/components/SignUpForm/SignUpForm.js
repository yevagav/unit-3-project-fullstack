import { useState } from 'react'
import * as userService from '../../utilities/users-service'


export default function SignUpForm({ setUser, setShowSignUp }) {
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        confirm: '',
        skinType: '',
        skinConcerns: '',
        skinTone: '',
        eyeColor: ''
    })
    const [error, setError] = useState('')

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const formData = { ...credentials }
            delete formData.confirm
            const user = await userService.signUp(formData)
            setUser(user)
        } catch (error) {
            setError('Sign Up Failed')
        }
    }

    const handleChange = (evt) => {
        setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    }

    const disable = credentials.password !== credentials.confirm
    return  (
        <div>
          <div className="form-container">
            <h3>Sign Up</h3>
            <form autoComplete="off" onSubmit={handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" value={credentials.name} onChange={handleChange} required />
              <label>Email</label>
              <input type="email" name="email" value={credentials.email} onChange={handleChange} required />
              <label>Password</label>
              <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
              <label>Confirm</label>
              <input type="password" name="confirm" value={credentials.confirm} onChange={handleChange} required />
              <label>Skin Type:</label>
              <input type='text' name='skinType' value={credentials.skinType} onChange={handleChange} />
              <label>Skin Concerns:</label>
              <input type='text' name='skinConcerns' value={credentials.skinConcerns} onChange={handleChange} />
              <label>Skin Tone:</label>
              <input type='text' name='skinTone' value={credentials.skinTone} onChange={handleChange} />
              <label>Eye Color:</label>
              <input type='text' name='eyeColor' value={credentials.eyeColor} onChange={handleChange} />
              <button type="submit" disabled={disable}>SIGN UP</button>
              <button
                  className='create-btn' onClick={() => {
                    setShowSignUp(false)
                  }}
                > Back To Log In
                </button>
            </form>
          </div>
          <p className="error-message">&nbsp;{error}</p>
        </div>
      );
}