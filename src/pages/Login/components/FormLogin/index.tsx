import { Button } from '../../../../components/Button';
import { Input } from '../../../../components/Input';
import styles from './styles.module.scss';

export function FormLogin() {

  function handleLogin() {
    alert(`TESTE!! Dados enviados ao servidor: 
    Usuário: ${''}, 
    Senha: ${''}`);
  }

  return (
    <form
      className={styles.formContent}
      onSubmit={handleLogin}
    >
      <Input
        label="Usuário *"
        type="text"
      />
      <Input
        label="Senha *"
        type="password"
      />
      <Button type="submit" text={'Entrar'} />
    </form>
  );
}