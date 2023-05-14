import toast from 'react-hot-toast';

// AUTH TOASTERS
export const notifyErrorLogin = () =>
  toast.error(
    'something went wrong, please check your email and password are entered correctly'
  );
export const notifyFulfilledLogin = () => toast.success('Welcome');

export const notifyErrorRegistration = () =>
  toast.error(
    'something went wrong, please check your name, email and password are entered correctly'
  );
// FOR WORK WITH CONTACT TOASTERS
export const notifyCreacteNewContact = () =>
  toast.success('Successfully created!');

export const notifyDeleteContact = () => toast.success('Successfully deleted!');

export const notifyUpdateContact = () => toast.success('Successfully update!');
