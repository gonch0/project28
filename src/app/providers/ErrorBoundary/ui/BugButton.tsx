import React, {
    useEffect,
    useState,
} from 'react';
import {
    Button,
    ButtonTheme,
} from 'shared/ui/Button/Button';

export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onThrow}
        >
            throw error
        </Button>
    );
};