import {Meta,StoryObj} from '@storybook/react';
import {Text, TextProps} from './Text';

export default { //sempre esportar como default
    title: 'Components/Text', //titulo da documentação
    component: Text, //componente que estou exportando
    args: {
        children: 'Lorem ipsum.',
    },
} as Meta<TextProps>

//para corrigir o erro no storybook.
//precisa exportar pelo menos uma variante: que não está como default
export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}
