type Nullable<T> = T | null;

type PartialFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
