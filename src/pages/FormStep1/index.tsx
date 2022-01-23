import * as C from './styles';
import { Theme } from '../../components/theme';

export const FormStep1 = () => {
    return(
        <Theme>
            <C.Container>
                <p> Passo 1/3 </p>
                <h1>Vamos começar com seu nome </h1> 
                <p>Preencha o campo abaixo com seu nome completo </p>

                <hr />

                <label>
                    Seu nome Completo
                    <input 
                        type="text"
                        autoFocus    
                     />
                </label>
            </C.Container>
        </Theme>
    )
}