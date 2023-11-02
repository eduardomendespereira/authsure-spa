import axios from "axios";
import store from "@/store/index";
import getAuth from "@/utils/auth";

function verifyURL() {
  const hostname = window.location.hostname;
  // 10.0.0.0 - 10.255.255.255
  // 172.16.0.0 - 172.31.255.255
  // 192.168.0.0 - 192.168.255.255

  const arrHostname = hostname.split(".");
  if (
    arrHostname[0] == "localhost" ||
    arrHostname[0] == 10 ||
    (arrHostname[0] == 172 && arrHostname[1] >= 16 && arrHostname[1] < 32) ||
    (arrHostname[0] == 192 && arrHostname[1] == 168)
  )
    return process.env.VUE_APP_BASEURL || "http://localhost:8000/api/";

  return process.env.VUE_APP_BASEURL_EXTERNAL;
}

const http = axios.create({
  baseURL: verifyURL(),
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization": "Bearer " + getAuth().access
  },
});

// function handlingError(error) {
//   try {
//     // const info = i18n.t('services.networkError')
//     const info = 'Erro de conexão com o servidor.'
//     let response,
//       message = null

//     if (error.code == 'ERR_NETWORK') response = info
//     else if (error.response) response = error.response
//     else if (error.message) response = error.message
//     else response = error

//     if (response && response.data && response.data != undefined) {
//       if (response.status == 422) {
//         // message = i18n.t('login.corrigir') + '<br>'
//         message = 'Corrigir login'
//         Object.keys(response.data.error).forEach((key) => {
//           message += response.data.error[key] + '<br>'
//         })
//       } else {
//         if (response.data.error) {
//           if (response.data.error.message)
//             message =
//               response.data.error.error + ' ' + response.data.error.message
//           else message = response.data.error
//         } else {
//           message =
//             response.status + ' ' + response.statusText + '<br>' + error404()
//         }
//       }
//     } else {
//       message =
//         response == 'Sessão expirada!'
//           ? i18n.t('services.sessionExpired')
//           : info
//     }
//     return Promise.reject(message)
//   } catch (error) {
//     console.error('handl', error)
//   }
// }

// http.interceptors.request.use(async function (config) {
//   const adminContext = store.state.adminModule.adminContext

//   let authUser = null
//   if (adminContext == 'Admin')
//     authUser = store.state.authAdminModule.authAdminUser
//   else authUser = store.state.authModule.authUser

//   const filialAdmin = store.state.adminModule.selectedFilial
//   const filial = store.state.systemModule.system?.CODIGO ?? filialAdmin ?? 1

//   if (authUser) {
//     const token = `Bearer ${authUser.access_token || ''}`
//     config.headers.Authorization = token
//   }

//   config.headers.filial = filial

//   return config
// })

// http.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   async function (error) {
//     store.state.networkError = error.code == 'ERR_NETWORK'

//     const originalRequest = (await error) && error.config ? error.config : null
//     const errorStatus = error && error.response ? error.response.status : null
//     const errorStatusText =
//       error && error.response ? error.response.statusText : null
//     const errorText =
//       error && error.response ? error.response.data?.error : null
//     const urlLogout =
//       error && error.config ? error.config.baseURL + 'auth/logout' : ''

//     /*
//      * Quando a requisição tem status 401 e statusText,
//      * será gerado uma nova requisição para gerar um novo token automaticamente
//      */

//     const adminContext = store.state.adminModule.adminContext

//     let authUser = null
//     if (adminContext == 'Admin')
//       authUser = store.state.authAdminModule.authAdminUser
//     else authUser = store.state.authModule.authUser

//     if (errorStatus === 401 && errorText === 'Token is Expired') {
//       const authPropName = store.state.authModule.storageAuthProperty
//       const access_token = await refreshAccessToken()

//       let user = ''
//       user = JSON.parse(localStorage.getItem(authPropName))
//       if (user && user != '') {
//         user.access_token = access_token.data.token
//         localStorage.setItem(authPropName, JSON.stringify(user))
//       }

//       if (adminContext == 'Admin')
//         await store.dispatch('authAdminModule/updateAuthUser', user)
//       else await store.dispatch('authModule/updateAuthUser', user)

//       originalRequest.headers.Authorization =
//         'Bearer ' + access_token.data.token
//       return axios(originalRequest)
//       /*
//        * Quando expirar o tempo de realizar o refresh automático do token,
//        * será solicitado o relogin para o usuário
//        */
//     } else if (
//       errorStatus === 401 &&
//       (errorText === 'Token is Invalid' || errorText === 'Unauthenticated.')
//     ) {
//       if (adminContext == 'Admin')
//         store.dispatch('authAdminModule/clearAuthUser')
//       else store.dispatch('authModule/clearAuthUser')
//     }
//     return handlingError(error)
//   }
// )

// async function refreshAccessToken() {
//   return await http.post('/mbcommerce/auth-company/refresh')
// }

// async function refreshAdminAccessToken() {
//   return await http.post('/mbcommerce/auth/refresh')
// }

// function error404() {
//   return 'Ooops... nada por aqui'
// }

export default http;
