declare global {
    type Nullable<T> = T | null;
    type Undefinable<T> = T | undefined;

    type PartialFields<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;
}

interface AuthUser {
    id: string;
    iat: number;
    exp: number;
}

declare global {
    namespace Express {
        interface Request {
            user: AuthUser;
        }
    }
}

export {};
