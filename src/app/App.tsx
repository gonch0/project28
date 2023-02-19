import AppRouter from 'app/providers/router/ui/AppRouter';
import React from 'react';
import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import Navbar from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

const App = () => {

    const { theme } = useTheme();

    return (
        <div
            className={classNames(
                'app',
                {},
                [theme],
            )}
        >
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;