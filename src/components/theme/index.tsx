import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header'
import {useForm} from '../../contexts/FormContext'
import { SidebarItem } from '../SidebarItem'; 

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const {state} = useForm();

    return (
        <C.Container>
            <C.Area>
                <Header/>

                <C.Steps>
                    <C.Sidebar>
                        
                        <SidebarItem
                            title="Pessoal"
                            description="se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title="profiosion"
                            description="conte sobre você"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}

                        />

                        <SidebarItem
                            title="Contatos"
                            description="Como te achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}

                        />

                        <SidebarItem
                            title="Confirme"
                            description="Confirme seus dados"
                            icon="confirm"
                            path="/step4"
                            active={state.currentStep === 4}

                        />
                        

                    </C.Sidebar>
                    <C.Page>
                        {children}
                    </C.Page>    
                </C.Steps>
            </C.Area>
        </C.Container> 
    )
}