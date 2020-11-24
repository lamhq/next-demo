import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import { EMAIL_PATTERN } from '../constants/validation';
import { useIdentity } from '../common/identity';
import { useHttpErrorHandler, useNavigator } from '../common/hooks';
import { MainLayout } from '../components/layouts';
import { AuthService } from '../services';
import { getService } from '../common/utils';

type LoginFormData = {
  email: string;
  password: string;
  remember: boolean;
};

const LoginPage: NextPage = () => {
  const [, setIdentity] = useIdentity();
  const { goBack } = useNavigator();
  const handleHttpError = useHttpErrorHandler();
  const { handleSubmit, errors, formState, control } = useForm<LoginFormData>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
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
      identity = await getService(AuthService).login(email, password);
    } catch (error) {
      handleHttpError(error);
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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Controller
                  name="email"
                  id="email"
                  type="email"
                  invalid={!!errors.email}
                  as={Input}
                  control={control}
                  rules={{ required: true, maxLength: 20, pattern: EMAIL_PATTERN }}
                />
                <FormFeedback>Please provide a valid email.</FormFeedback>
              </FormGroup>

              <FormGroup>
                <Label for="password">Password</Label>
                <Controller
                  name="password"
                  id="password"
                  type="password"
                  invalid={!!errors.password}
                  as={Input}
                  control={control}
                  rules={{ required: true, minLength: 6 }}
                />
                <FormFeedback>Please provide a valid password.</FormFeedback>
                <FormText>Password is requred and minimum length is 6 characters.</FormText>
              </FormGroup>

              <FormGroup className="form-group" check>
                <Controller
                  name="remember"
                  id="remember"
                  type="checkbox"
                  invalid={!!errors.remember}
                  as={Input}
                  control={control}
                />
                <Label for="remember" check>
                  Remember me
                </Label>
              </FormGroup>

              <Button
                type="submit"
                color="primary"
                disabled={!formState.isValid || formState.isSubmitting}
              >
                {formState.isSubmitting ? 'Loging In...' : 'Login'}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default LoginPage;
