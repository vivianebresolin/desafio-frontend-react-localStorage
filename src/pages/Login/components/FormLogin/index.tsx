import { FormEvent, useRef } from 'react';
import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import { useAuth } from '../../../../hooks/useAuth';
import styles from './styles.module.scss';

export function FormLogin() {
  const { usersInLocalStorage } = useAuth();
  const userNameRef = useRef<HTMLInputElement>(null);
  const userPasswordRef = useRef<HTMLInputElement>(null);

  function handleLogin(event: FormEvent) {
    event.preventDefault();

    const enteredName = userNameRef.current!.value
    const enteredPassword = userPasswordRef.current!.value

    if (enteredName.length === 0 || enteredPassword.length === 0) {
      alert('É necessário informar usuário e senha.');
      return;
    }

    const userFound = usersInLocalStorage.filter(userSaved => userSaved.name === enteredName)

    if (userFound.length === 1) {
      if (userFound[0].password === enteredPassword) {
        console.log('senha correta', userFound);
        return;
        // ao invés do return, redirecionar para a página principal da aplicação
      }
    }

    alert('Usuário e/ou senha inválidos.');
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
      />
      <Input
        label="Senha *"
        type="password"
        ref={userPasswordRef}
      />
      <Button type="submit" text={'Entrar'} />
    </form>
  );
}