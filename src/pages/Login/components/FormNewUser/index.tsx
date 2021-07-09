import { useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import styles from './styles.module.scss';
import { FormLogin } from "../FormLogin";

type UserFormData = {
  name: string;
  password: string;
  password_confirmation: string;
}

type UserStorage = {
  name: string;
  password: string;
}

const userSchema = yup.object().shape({
  name: yup.string().required('O usuário é obrigatório'),
  password: yup.string().required('A senha é obrigatória').min(8, 'A senha deve ter pelo menos 8 caracteres').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'A senha deve conter ao menos um caracter especial, um caracter numérico, um caracter maiúsculo e um caracter minúsculo'),
  password_confirmation: yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais')
});

export function FormNewUser() {
  const [newUser, setNewUser] = useState(true);
  const [usersInLocalStorage, setUsersInLocalStorage] = useState<UserStorage[]>(
    localStorage.hasOwnProperty('users')
      ? JSON.parse(localStorage.getItem('users')!)
      : []
  );
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(userSchema)
  });
  const { errors } = formState;

  const handleSubmitFormLogin: SubmitHandler<UserFormData> = (values) => {
    const userExists = usersInLocalStorage.filter(user => user.name === values.name);
    console.log(userExists, typeof userExists);

    if (userExists.length !== 0) {
      alert('Usuário já cadastrado!');
      reset();
      return;
    }

    const updatedUsers = [...usersInLocalStorage, {
      name: values.name,
      password: values.password
    }];

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsersInLocalStorage(updatedUsers);

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