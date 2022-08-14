import { axiosFetch } from './api.config';

export const auth = async payload => {
  return await axiosFetch
    .post('/authorization/login', payload)
    .then(({ data }) => ({
      hasError: false,
      data,
    }))
    .catch(({ response: { data } }) => ({
      hasError: true,
      data,
    }));
};
