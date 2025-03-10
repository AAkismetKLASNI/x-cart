import { Button } from '@/components/ui/button';
import { useAuthForm } from '../hooks/use.auth.form';
import { Field } from '@/components/ui/field';
import { Loader } from '@/components/ui/loaders/loader';

export function AuthForm({ isLogin }: { isLogin: boolean }) {
  const { handleSubmit, isLoading, onSubmit, register } = useAuthForm(isLogin);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='space-y-4'>
        <div className='flex justify-between items-center'>
          <h2>{isLogin ? 'Sign in' : 'Sign up'}</h2>
          {isLoading && <Loader />}
        </div>
        <Field
          {...register('email', { required: true })}
          type='email'
          placeholder='Email'
        />
        <Field
          {...register('password', {
            required: true,
            minLength: {
              value: 6,
              message: 'The password must be at least 6 characters long',
            },
            maxLength: {
              value: 25,
              message: 'The password must be no more than 25 characters long.',
            },
          })}
          type='password'
          placeholder='Password'
        />
        <Button
          className='w-full'
          type='submit'
        >
          {isLogin ? 'Sign in' : 'Sign up'}
        </Button>
      </div>
    </form>
  );
}
