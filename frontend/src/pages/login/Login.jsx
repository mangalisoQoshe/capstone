import FormCheckbox from "../../components/shared/form/FormCheckbox";
import FormInput from "../../components/shared/form/FormInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { authService } from "../../firebase";
import styles from "./Login.module.css"; // Import your CSS module styles

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Value Check 
    if (email === '' || password === '') {
      alert('Missing Credentials');
      return;
    }
     
    let response = await signInWithEmailAndPassword(authService, email, password);
    
    // Valid User Is Allowed To Login
    if (response.user != null) {
      window.location.href = '/';
    } else {   
      alert('Login failed, Enter Valid Creditianls');
    }
  };

  return (
    <div className={styles.loginBackground}>
      <div className={styles.loginContainer}>
        <div className={styles.loginContent}>
          <div className={styles.loginHeader}>
            <h1 className={styles.loginTitle}>Sign in</h1>
            <div className={styles.loginDescription}>
              <p className={styles.loginDescriptionText}>
                Welcome to d-school, leaders of excellence in design-led thinking on the continent.
              </p>
            </div>
          </div>
          <div className={styles.loginForm}>
            <FormInput name='email' label='E-mail&nbsp;&nbsp;&nbsp;' type='email'  value={email} onChange={(e) => setEmail(e.target.value)} /> 
            <FormInput name='password' label='Password&nbsp;' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className={styles.loginButton} onClick={handleLogin}>
              Sign In As Admin
            </button>
            <button className={styles.loginButton} onClick={() => { window.location.href = '/'; }}>
              View As Visitor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
