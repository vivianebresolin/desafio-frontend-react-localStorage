import { useState } from "react";
import { Input } from "../../../../components/Input";
import { Button } from "./Button";
import styles from './styles.module.scss';

export function FormLogin() {
  const [newUser, setNewUser] = useState(true);

  return (
    <form className={styles.formContent}>
      <Input label={'Usuário *'} type={'text'} />
      <Input label={'Senha *'} type={'password'} />
      {newUser ? (
        <>
          <Input label={'Confirmação de senha *'} type={'password'} />
          <Button text={'Registrar'} />
          <p className={styles.question}>
            Já possui cadastro?
            <button
              type="button"
              className={styles.buttonClickHere}
              onClick={() => setNewUser(false)}
            >
              <strong>Clique aqui</strong>
            </button>
          </p>
        </>
      ) : (
        <Button text={'Entrar'} />
      )}
    </form>
  );
}