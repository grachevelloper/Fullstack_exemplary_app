// import authApi from '../api/auth';

// import {TokenManager} from './token-manager';
// interface AuthResponse {
//     accessToken?: string;
//     refreshToken?: string;
// }

// export class AuthManager {
//     constructor(private tokenManager: TokenManager) {}

//     @observable private email = '';
//     @observable private password = '';

//     authQuery = new MobxQuery(
//         () => ({
//             queryKey: ['auth'],
//             queryFn: () =>
//                 authApi.getAuthToken({
//                     email: this.email,
//                     password: this.password,
//                 }),
//             enabled: !!this.email && !!this.password,
//         }),
//         queryClient
//     );

//     refreshQuery = new MobxQuery(
//         () => ({
//             queryKey: ['refresh'],
//             queryFn: () =>
//                 authApi.getRefreshToken({
//                     authToken: this.tokenManager.authToken,
//                     refreshToken: this.tokenManager.refreshToken,
//                 }),
//             enabled: !!this.tokenManager.refreshToken,
//         }),
//         queryClient
//     );
// }
