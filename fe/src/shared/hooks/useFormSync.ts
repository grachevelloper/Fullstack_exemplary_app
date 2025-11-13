import {Form} from 'antd';
import {useEffect} from 'react';

import {useLocalStorage} from './useLocalStore';

export function useFormSync<T>(
    fieldKey: string,
    initialValue: T,
    objectLocalName?: string
) {
    const [localValue, setLocalFormValue] = useLocalStorage<T>(
        objectLocalName || fieldKey,
        initialValue
    );

    const form = Form.useFormInstance();
    const fieldValue = Form.useWatch<T>(fieldKey, form);
    useEffect(() => {
        if (fieldValue !== undefined) {
            if (objectLocalName) {
                setLocalFormValue((prev) => {
                    if (prev?.[fieldKey as keyof T] === fieldValue) {
                        return prev;
                    }
                    return {
                        ...prev,
                        [fieldKey]: fieldValue,
                    };
                });
            } else {
                setLocalFormValue((prev) =>
                    prev === fieldValue ? prev : fieldValue
                );
            }
        }
    }, [fieldValue, setLocalFormValue, objectLocalName, fieldKey]);

    if (objectLocalName) {
        return localValue?.[fieldKey as keyof T];
    }

    return localValue;
}
