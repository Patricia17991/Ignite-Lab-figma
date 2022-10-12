import {Meta,StoryObj} from '@storybook/react';
import {TextInput, TextInputRootProps} from './TextInput';
import {Envelope} from 'phosphor-react';


export default { //sempre esportar como default
    title: 'Components/TextInput', //titulo da documentação
    component: TextInput.Root, //componente que estou exportando
    args: {
        children: [
            <TextInput.Icon>
               <Envelope/>
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type your e-mail address' />
        ],
     },
    argTypes: {
        children: {
            table: {
                disable: true,
             }
     },
    }
} as Meta<TextInputRootProps>

//para corrigir o erro no storybook.
//precisa exportar pelo menos uma variante: que não está como default
export const Default: StoryObj<TextInputRootProps> = {}

export const WhithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Type your e-mail address' />
    }
}
