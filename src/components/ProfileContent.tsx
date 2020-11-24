import React from 'react';
import { AxiosError } from 'axios';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { withAuth } from '../common/hocs';
import { useHttpErrorHandler, useLoadingState } from '../common/hooks';
import { getService } from '../common/utils';
import { ProfileService } from '../services';
import { UpdateProfileData } from '../services/profile';

const ProfileForm: React.FC<{ data: UpdateProfileData }> = ({ data }) => {
  const handleHttpError = useHttpErrorHandler();
  const { handleSubmit, errors, formState, control } = useForm<UpdateProfileData>({
    mode: 'onBlur',
    defaultValues: data,
  });

  const onSubmit: SubmitHandler<UpdateProfileData> = async (values) => {
    try {
      await getService(ProfileService).updateProfile(values);
    } catch (submitError) {
      handleHttpError(submitError);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Controller
          type="text"
          name="name"
          id="name"
          invalid={!!errors.name}
          as={Input}
          control={control}
          rules={{ required: true }}
          autoComplete="new-password"
        />
        <FormFeedback>Please provide a valid name.</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone</Label>
        <Controller
          type="text"
          name="phone"
          id="phone"
          invalid={!!errors.phone}
          as={Input}
          control={control}
          rules={{ required: true }}
          autoComplete="new-password"
        />
        <FormFeedback>Please provide a valid phone.</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="currentPassword">Current Password</Label>
        <Controller
          type="password"
          name="currentPassword"
          id="currentPassword"
          invalid={!!errors.currentPassword}
          as={Input}
          control={control}
          rules={{ minLength: 6 }}
          autoComplete="new-password"
        />
        <FormFeedback>Please provide a valid password.</FormFeedback>
      </FormGroup>

      <Button type="submit" color="primary" disabled={!formState.isValid || formState.isSubmitting}>
        {formState.isSubmitting ? 'Updating...' : 'Update'}
      </Button>
    </Form>
  );
};

const ProfileContent: React.FC = () => {
  const getProfile = React.useCallback(() => getService(ProfileService).getProfile(), []);
  const { data: profile, loading, error } = useLoadingState(getProfile);
  const handleHttpError = useHttpErrorHandler();

  React.useEffect(() => {
    if (error) {
      handleHttpError(error as AxiosError);
    }
  }, [error]);

  if (error) {
    return <p>Error occured while loading data.</p>;
  }

  const formData: UpdateProfileData = {
    currentPassword: '',
    newPassword: '',
    name: '',
    phone: '',
    ...profile,
  };

  return (
    <div className="blog-main">
      <h3 className="pb-4 mb-4 font-italic border-bottom">Update Profile</h3>
      <div className="row">
        <div className="col-md-8">
          {error && <p>Error occured while loading data.</p>}
          {loading && <p>Loading...</p>}
          {!loading && profile && <ProfileForm data={formData} />}
        </div>
      </div>
    </div>
  );
};

export default withAuth(ProfileContent);
