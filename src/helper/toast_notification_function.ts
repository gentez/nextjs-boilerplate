import { toast, ToastOptions } from 'react-hot-toast';

export const displaySuccessToast = (message: string): void => {
  const toastOptions: ToastOptions = {
    position: 'top-center',
    duration: 2000,
    style: {
      display: 'none',
    },
  };

  toast.success(message, toastOptions);
};

export const displayErrorToast = (error: any): void => {
  let errorMessage: string;

  if (error.response) {
    if (error.response.data) {
      if (error.response.data.message) {
        if (error.response.data.message[0]) {
          errorMessage = error.response.data.message[0];
        } else {
          errorMessage = 'An error occurred';
        }
      } else {
        errorMessage = 'An error occurred';
      }
    } else {
      errorMessage = 'An error occurred';
    }
  } else {
    errorMessage = 'An error occurred';
  }

  const toastOptions: ToastOptions = {
    position: 'top-center',
    duration: 2000,
    style: {
      display: 'none',
    },
  };

  toast.error(errorMessage, toastOptions);
};
