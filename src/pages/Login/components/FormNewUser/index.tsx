import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import styles from './styles.module.scss';
import { FormLogin } from "../FormLogin";
import { useAuth } from "../../../../hooks/useAuth";

type UserFormData = {
  name: string;
  password: string;
  password_confirmation: string;
}

const userSchema = yup.object().shape({
  name: yup.string().required('O usuário é obrigatório'),
  password: yup.string().required('A senha é obrigatória').min(8, 'A senha deve ter pelo menos 8 caracteres').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'A senha deve conter ao menos um caracter especial, um caracter numérico, um caracter maiúsculo e um caracter minúsculo'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
});

export function FormNewUser() {
  const [newUser, setNewUser] = useState(true);
  const { verifyIfUserExists, updateUsersInLocalStorage } = useAuth();
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(userSchema)
  });
  const { errors } = formState;

  const handleSubmitFormLogin: SubmitHandler<UserFormData> = (values) => {
    if (verifyIfUserExists(values.name)) {
      reset();
      return;
    }

    updateUsersInLocalStorage(values);
    reset();
  }

  return (
    <>
      {newUser ? (
        <form
          className={styles.formContent}
          onSubmit={handleSubmit(handleSubmitFormLogin)}
        >
          <Input
            label="Usuário *"
            type="text"
            {...register('name')}
            error={errors.name?.message}
          />
          <Input
            label="Senha *"
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <Input
            label="Confirmação de senha *"
            type="password"
            {...register('password_confirmation')}
            error={errors.password_confirmation?.message}
          />
          <Button text={'Registrar'} />
          <p className={styles.question}>
            Já possui cadastro?
            <button
              type="button"
              className={styles.buttonClickHere}
              onClick={() => setNewUser(false)}
            >
              <strong>Clique aqui.</strong>
            </button>
          </p>
        </form>
      ) : (
        <FormLogin />
      )}
    </>
  );
}