import { ReactNode } from 'react';
import * as C from './styles';
import { Header } from '../Header'

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    return (
        <C.Container>
            <C.Area>
                <Header/>

                <C.Steps>
                    <C.Sidebar>
                        Sidebar
                    </C.Sidebar>

                    <C.Page>
                        {children}
                    </C.Page>    
                </C.Steps>
            </C.Area>
        </C.Container> 
    )
}