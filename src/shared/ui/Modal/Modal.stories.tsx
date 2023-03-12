import {
    ComponentMeta,
    ComponentStory,
} from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

import 'app/styles/index.scss';
import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args as {}} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolores, ea, eius eligendi fuga fugiat laborum nostrum odio quae tempore totam veniam voluptas! Animi blanditiis   debitis distinctio dolorem dolorum incidunt molestiae nesciunt optio quis, reiciendis! Ad consequatureius est rem. Aperiam dolorem eligendi molestiae nobis odit quaerat quas quasi sequi.',
};
Primary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolores, ea, eius eligendi fuga fugiat laborum nostrum odio quae tempore totam veniam voluptas! Animi blanditiis   debitis distinctio dolorem dolorum incidunt molestiae nesciunt optio quis, reiciendis! Ad consequatureius est rem. Aperiam dolorem eligendi molestiae nobis odit quaerat quas quasi sequi.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]



