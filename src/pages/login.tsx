import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { SubmitHandler, useForm } from 'react-hook-form';
import clsx from 'clsx';
import { EMAIL_PATTERN } from '../constants/validation';
import { login } from '../services/auth';
import { useIdentity } from '../common/identity';
import { useAxiosErrorHandler, useNavigator } from '../common/hooks';
import { MainLayout } from '../components/layouts';

type LoginFormData = {
  email: string;
  password: string;
  remember: boolean;
};

const LoginPage: NextPage = () => {
  const [, setIdentity] = useIdentity();
  const { goBack } = useNavigator();
  const handleAxiosError = useAxiosErrorHandler();
  const { register, handleSubmit, errors, formState } = useForm<LoginFormData>({
    mode: 'onBlur',
    defaultValues: {
      remember: false,
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (values) => {
    const { email, password } = values;
    let identity;
    try {
      identity = await login(email, password);
    } catch (error) {
      handleAxiosError(error);
      return;
    }

    // login success
    setIdentity(identity);
    goBack();
  };

  return (
    <MainLayout>
      <Head>
        <title>NextDemo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="blog-main">
        <h3 className="pb-4 mb-4 font-italic border-bottom">Login</h3>
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  id="exampleInputEmail1"
                  type="email"
                  name="email"
                  ref={register({ required: true, maxLength: 20, pattern: EMAIL_PATTERN })}
                  className={clsx('form-control', { 'is-invalid': errors.email })}
                />
                {errors.email && (
                  <div className="invalid-feedback">Please provide a valid email.</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  name="password"
                  ref={register({ required: true, minLength: 6 })}
                  className={clsx('form-control', { 'is-invalid': errors.password })}
                  id="exampleInputPassword1"
                />
                {errors.password && (
                  <div className="invalid-feedback">Please provide a valid password.</div>
                )}
              </div>

              <div className="form-group form-check">
                <input
                  type="checkbox"
                  name="remember"
                  className="form-check-input"
                  id="exampleCheck1"
                  ref={register}
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>

              <button
                type="submit"
                disabled={!formState.isValid || formState.isSubmitting}
                className="btn btn-primary"
              >
                {formState.isSubmitting ? 'Loging In...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
