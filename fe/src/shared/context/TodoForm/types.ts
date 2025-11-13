import {Dispatch, SetStateAction} from 'react';

export interface TodoFormContextType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const TodoFormVoid = {
    isOpen: false,
    setIsOpen: () => {},
};
