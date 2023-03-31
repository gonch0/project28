import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import React, {
    memo,
    useCallback,
    useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
    useDispatch,
    useSelector,
    useStore,
} from 'react-redux';
import i18n from 'shared/config/i18n/i18n';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    Button,
    ButtonTheme,
} from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import {
    Text,
    TextTheme,
} from 'shared/ui/Text/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import {
    loginActions,
    loginReducer,
} from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string;
}

const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);



    useEffect(() => {
        store.reducerManager.add('loginForm', loginReducer);

        return () => {
            store.reducerManager.remove('loginForm');
        };
    }, []);



    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({
            username,
            password,
        }));
    }, [
        username,
        password,
        dispatch,
    ]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text
                text={i18n.t('Вы ввели неверный пароль или логин')}
                theme={TextTheme.ERROR}
            />}
            <Input
                type='text'
                className={cls.input}
                onChange={onChangeUsername}
                placeholder={t('Введите username')}
                value={username}
            />
            <Input
                type='text'
                className={cls.input}
                onChange={onChangePassword}
                placeholder={t('Введите пароль')}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});

export default LoginForm;