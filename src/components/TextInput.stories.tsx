import {Meta,StoryObj} from '@storybook/react';
import {TextInput, TextInputProps} from './TextInput';

export default { //sempre esportar como default
    title: 'Components/TextInput', //titulo da documentação
    component: TextInput, //componente que estou exportando
    args: {
        placeholder: 'Type your e-mail address'
    },
    argsTypes: {}
} as Meta<TextInputProps>

//para corrigir o erro no storybook.
//precisa exportar pelo menos uma variante: que não está como default
export const Default: StoryObj<TextInputProps> = {}
