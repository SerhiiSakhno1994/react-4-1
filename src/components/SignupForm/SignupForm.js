// import { useState, useEffect } from 'react';

import styles from './SignupForm.module.css';
import useLocalStorage from '../hooks/useLocalStorage';

export default function SignupForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');
  //   const handleEmailChange = e => {
  //     // console.log(e.target.value);
  //     setEmail(e.target.value);
  //   };
  //   const handlePasswordlChange = e => {
  //     // console.log(e.target.value);
  //     setPassword(e.target.value);
  //     };
  const handledlChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };

  return (
    <form className={styles.form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span>Пошта</span>
        <input
          type="email"
          name="email"
          onChange={handledlChange}
          value={email}
        />
      </label>
      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handledlChange}
          value={password}
        />
      </label>
      <button type="submit">Зареєструватися</button>
    </form>
  );
}

// class OldSignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

// <label className={styles.label}>
//   <span>Пароль</span>
//   <input
//     type="password"
//     name="password"
//     onChange={this.handleChange}
//     value={this.state.password}
//   />
// </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }
