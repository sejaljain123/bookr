import { useState } from 'react';
import styles from '../Forms.module.scss';

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  // eslint-disable-next-line
  const [_, setSubmitted] = useState(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleEmail = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  const handlePassword = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.formheading}>ALREADY AN USER?</h1>
      <input
        onChange={handleEmail}
        className={styles.formfield}
        type="email"
        name="email-address"
        id="email-address"
        placeholder="Email"
        value={values.email}
      />
      <input
        onChange={handlePassword}
        className={styles.formfield}
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={values.password}
      />
      <input onClick={handleSubmit} className={styles.submit} type="submit" value="SIGN IN" />
    </form>
  );
};

export default Signin;
