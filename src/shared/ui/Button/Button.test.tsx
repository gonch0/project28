import {
    render,
    screen,
} from '@testing-library/react';
import {
    Button,
    ThemeButton,
} from 'shared/ui/Button/Button';

describe('Button', () => {
    test('toBeInTheDocument 1', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('toBeInTheDocument 2', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
        screen.debug();
    });
});
