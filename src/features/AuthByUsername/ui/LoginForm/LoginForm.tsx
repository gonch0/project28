import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import React, {
    memo,
    useCallback,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
    useDispatch,
    useSelector,
} from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    Button,
    ButtonTheme,
} from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const {
        username,
        password,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback((value: string) => {
    }, [dispatch]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
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
            >
                {t('Войти')}
            </Button>
        </div>
    );
});