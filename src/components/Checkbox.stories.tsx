import {Meta,StoryObj} from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import {Text} from './Text';


export default { //sempre esportar como default
    title: 'Components/Checkbox', //titulo da documentação
    component: Checkbox, //componente que estou exportando
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return(
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">Lembrar-me de mim por 30 dias</Text>
                </div>
            )
        }
    ],
} as Meta<CheckboxProps>

//para corrigir o erro no storybook.
//precisa exportar pelo menos uma variante: que não está como default
export const Default: StoryObj<CheckboxProps> = {}
