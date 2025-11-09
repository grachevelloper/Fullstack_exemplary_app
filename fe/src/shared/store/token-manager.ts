interface TokenManagerType {
    refreshToken: string | undefined;
    authToken: string | undefined;
}

export class TokenManager implements TokenManagerType {
    refreshToken: string | undefined = undefined;
    authToken: string | undefined = undefined;
}
