import AppRouter from 'app/providers/router/ui/AppRouter';
import React from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import Navbar from 'widgets/Navbar/ui/Navbar';

const App = () => {

    const {
        theme,
        toggleTheme,
    } = useTheme();

    return (
        <div
            className={classNames(
                'app',
                {},
                [theme],
            )}
        >
            <Navbar />
            <AppRouter />
            <button
                onClick={toggleTheme}
            >
                toggle theme
            </button>
        </div>
    );
};

export default App;