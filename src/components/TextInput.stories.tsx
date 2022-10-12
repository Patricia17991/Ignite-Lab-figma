import {Meta,StoryObj} from '@storybook/react';
import {TextInput, TextInputInputProps, TextInputRootProps} from './TextInput';

export default { //sempre esportar como default
    title: 'Components/TextInput', //titulo da documentação
    component: TextInput.Root, //componente que estou exportando
    args: {
        children: (
            <TextInput.Input placeholder='Type your e-mail address' />
        ),
     },
    argsTypes: {}
} as Meta<TextInputInputProps>

//para corrigir o erro no storybook.
//precisa exportar pelo menos uma variante: que não está como default
export const Default: StoryObj<TextInputRootProps> = {}
