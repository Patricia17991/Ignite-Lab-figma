import {Meta,StoryObj} from '@storybook/react';
import {Heading, HeadingProps} from './Heading';

export default { //sempre esportar como default
    title: 'Components/Heading', //titulo da documentação
    component: Heading, //componente que estou exportando
    args: {
        children: 'Lorem ipsum.',
        size: 'md',
    },
    argsTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
              type: 'inline-radio'
            }
        }
    },
} as Meta<HeadingProps>

//para corrigir o erro no storybook.
//precisa exportar pelo menos uma variante: que não está como default
export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}


export const CustomComponent: StoryObj<HeadingProps> = {
    args:{
        asChild: true,
        children: (
            <p>Testando</p>
        )
    },
    argTypes: {
      children: {
        table: {
            disable: true,
        },
      },
    },
};


