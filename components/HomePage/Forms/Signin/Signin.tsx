import { useState } from 'react';
import styles from '../Forms.module.scss';
import { useAuth } from '../../../../context/AuthUserContext';
import { useRouter } from 'next/router';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { signInWithEmailAndPassword } = useAuth();
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

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <input onClick={handleSubmit} className={styles.submit} type="submit" value="SIGN IN" />
    </form>
  );
};

export default Signin;
