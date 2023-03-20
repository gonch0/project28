import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entites/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <div>
            {t('Главная страница')}
            <Counter />
            <Input
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default MainPage;