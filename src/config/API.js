import axios from "axios";
import Cookies from "js-cookie";

// import { store } from "../store";

const ENVIROMENT_SETUP = (isLogin = false) => {
  const api = axios.create({
    baseURL: "https://staging.api.solides.jobs/v2",
  });

  api.interceptors.request.use(async (config) => {
    const { authentication } = Cookies.getJSON();
    const { token } = authentication ? authentication : {};

    console.log("token", token);
    // const token = store.getState().auth.authentication.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      config.headers.Authorization = "";
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      return Promise.resolve(response);
    },
    (error) => {
      // if (!!error && error.response === undefined) {
      //     if (error.message === "Network Error") {
      //         notification.error({
      //             message: "Erro",
      //             description:
      //                 "Algo de errado aconteceu. Entre em contato com a nossa equipe de suporte.",
      //         });
      //         return Promise.reject(error);
      //     }
      // } else {
      //     const { status } = error.response;

      //     switch (status) {
      //         case 401:
      //             isLogin
      //                 ? notification.warn({
      //                       message: "Alerta",
      //                       description:
      //                           "Email ou senha incorretos. Por favor, tente novamente.",
      //                   })
      //                 : notification.warn({
      //                       message: "Alerta",
      //                       description:
      //                           "Sua sessão expirou. Por favor, faça o login novamente.",
      //                   });

      //             store.dispatch(actionUtilities.logout());
      //             break;

      //         default:
      //             break;
      //     }
      // }
      return Promise.reject(error);
    }
  );

  return api;
};

export default ENVIROMENT_SETUP;
