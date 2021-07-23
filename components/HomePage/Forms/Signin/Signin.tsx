import { useState, useEffect, useContext } from 'react';
import styles from '../Forms.module.scss';
import { useAuth } from '../../../../context/AuthUserContext';
import { useRouter } from 'next/router';

interface GoogleUser {
  displayName?: string | null;
  email?: string | null;
}

const Signin = () => {
  const [user, setUser] = useState<GoogleUser>({});
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { signInWithEmailAndPassword, signInWithGoogle } = useAuth();
  const router = useRouter();

  const handleSubmit = (event: any) => {
    signInWithEmailAndPassword(formData.email, formData.password).then((authUser) => {
      router.push('/home');
    });
    event.preventDefault();
  };

  const updateInput = (event: any) => {
    event.persist();
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleGoogleSignIn = async () => {
    const data = await signInWithGoogle();
    console.log(data);
    setUser({
      displayName: data.displayName,
      email: data.email,
    });

    if (user) {
      router.push('/home');
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.formheading}>ALREADY AN USER?</h1>
          <input
            onChange={updateInput}
            className={styles.formfield}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email || ''}
          />
          <input
            onChange={updateInput}
            className={styles.formfield}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password || ''}
          />
          <button onClick={handleSubmit} className={styles.submit} type="submit">
            SIGN IN
          </button>
        </form>
        <div className={styles.google}>
          <span> OR</span>
          <button className={styles.googlesubmit} onClick={handleGoogleSignIn}>
            <img
              src="https://img.icons8.com/ios-filled/30/33272a/google-logo.png"
              alt="google icon"
            />
            <span> Continue with Google</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Signin;
