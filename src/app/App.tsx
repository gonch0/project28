import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import AppRouter from 'app/providers/router/ui/AppRouter';

const App = () => {
    return (
        <div
            className={classNames(
                'app',
                {},
                [],
            )}
        >
            <Suspense fallback=''>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
