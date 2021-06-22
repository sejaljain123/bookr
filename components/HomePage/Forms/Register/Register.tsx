import { useState } from 'react';
import styles from '../Forms.module.scss';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  // eslint-disable-next-line
  const [_, setSubmitted] = useState(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleName = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
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
      <h1 className={styles.formheading}> NEW HERE?</h1>
      <input
        onChange={handleName}
        className={styles.formfield}
        type="name"
        name="name"
        id="name"
        placeholder="Name"
        value={values.name}
      />
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
      <input onClick={handleSubmit} className={styles.submit} type="submit" value="REGISTER" />
    </form>
  );
};

export default Register;
