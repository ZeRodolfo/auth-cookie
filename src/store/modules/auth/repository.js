import API from "../../../config/API";

export const signIn = async (json) => {
  return new Promise((resolve, reject) => {
    const api = API(true);
    api
      .post(`/user/sign-in`, json)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
