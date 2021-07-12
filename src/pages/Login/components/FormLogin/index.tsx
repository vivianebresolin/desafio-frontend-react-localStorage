import { FormEvent, useRef } from 'react';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { useAuth } from '../../../../hooks/useAuth';
import styles from './styles.module.scss';

export function FormLogin() {
  const { usersInLocalStorage } = useAuth();
  const { authenticateUser } = useAuth();
  const history = useHistory();
  const userNameRef = useRef<HTMLInputElement>(null);
  const userPasswordRef = useRef<HTMLInputElement>(null);

  function handleLogin(event: FormEvent) {
    event.preventDefault();

    const enteredName = userNameRef.current!.value
    const enteredPassword = userPasswordRef.current!.value

    const userFound = usersInLocalStorage
      .filter(userSaved => userSaved.name === enteredName);

    if (userFound.length === 1) {
      if (userFound[0].password === enteredPassword) {
        console.log('senha correta', userFound);

        authenticateUser();

        history.push("/");
        return;
      }
    }

    Swal.fire(
      {
        icon: 'error',
        text: 'Usuário e/ou senha inválidos.'
      }
    );
  }

  return (
    <form
      className={styles.formContent}
      onSubmit={event => handleLogin(event)}
    >
      <Input
        label="Usuário *"
        type="text"
        ref={userNameRef}
        required
      />
      <Input
        label="Senha *"
        type="password"
        ref={userPasswordRef}
        required
      />
      <Button type="submit" text={'Entrar'} />
    </form>
  );
}