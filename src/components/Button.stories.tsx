import {Meta,StoryObj} from '@storybook/react';
import {Button, ButtonProps} from './Button';

export default { //sempre esportar como default
    title: 'Components/Button', //titulo da documentação
    component: Button, //componente que estou exportando
    args: {
        children: 'Create account',
        size: 'md',
    },
    argTypes: {}
} as Meta<ButtonProps>

//para corrigir o erro no storybook.
//precisa exportar pelo menos uma variante: que não está como default
export const Default: StoryObj<ButtonProps> = {}
