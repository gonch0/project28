import { useTheme } from 'app/providers/ThemeProvider';
import { userActions } from 'entites/User';
import React, {
    Suspense,
    useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import AppRouter from 'app/providers/router/ui/AppRouter';

const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div
            className={classNames(
                'app',
                {},
                [theme],
            )}
        >
            <Suspense fallback={<Loader />}>
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
