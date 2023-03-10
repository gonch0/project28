import {
    render,
    screen,
} from '@testing-library/react';
import {
    Button,
    ButtonTheme,
} from 'shared/ui/Button/Button';

describe('Button', () => {
    test('toBeInTheDocument 1', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('toBeInTheDocument 2', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
        screen.debug();
    });
});
