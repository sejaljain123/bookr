import { useState } from 'react';
import styles from '../Forms.module.scss';
import { useAuth } from '../../../../context/AuthUserContext';

const Register = () => {
  const { createUserWithEmailAndPassword } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (event: any) => {
    createUserWithEmailAndPassword(formData.email, formData.password)
      .then((authUser) => {
        console.log('Success. The user is created in Firebase');
      })
      .catch((error) => {
        // An error occurred. Set error message to be displayed to user
        console.log(error);
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
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.formheading}> NEW HERE?</h1>
        <input
          onChange={updateInput}
          className={styles.formfield}
          type="name"
          name="name"
          placeholder="Name"
          value={formData.name || ''}
        />
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
          id="password"
          placeholder="Password"
          value={formData.password || ''}
        />
        <button onClick={handleSubmit} className={styles.submit} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
