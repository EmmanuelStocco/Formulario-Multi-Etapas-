import * as C from './styles';
import { Theme } from '../../components/theme';
import { useHistory, Link } from 'react-router-dom';
import {useForm, FormActions} from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { stringify } from 'querystring';
import confirm from 'antd/lib/modal/confirm';

export const FormStep4 = () => {
        const history = useHistory();
        const { state, dispatch } = useForm();
 
        useEffect(()=> {
            if(state.name ==='' || state.email === '' || state.github === ''){
                alert("Preencha seus dados!")
                history.push('/');
            } else{
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4 
            }
            );
        }
        }, []); 
     
        const handleNextStep = () => {
            if(state.email !== '' && state.github !== '' && state.name !== '') {
                console.log(state);
                alert("Parabéns formulario cadastrado com sucesso")
            } else {
              alert('Preencha com seus dados! ')
            }            
        }; 

        const handleRedirectHome = () => {
            history.push('/');
        }
    

    return(
        <Theme>
            <C.Container>
                <p>Passo 4  </p> 
                <h1>Ficamos Feliz em te encontrar {state.name} ! </h1> 
                <p> Confirme seus dados:  </p>

                <hr />

                <div>
                    Seu email: {state.email}
                </div>
                <hr />

                <div>
                    Seu Github: {state.github}
                </div>
                <hr />

                <div>
                    Vocé é um programador: {
                        (state.level == 0) ? "iniciante" : "experiente"
                    }
                </div>
                <hr />



                <button onClick={handleNextStep}> Finalizar Cadastro </button>
                <button id='button2' onClick={handleRedirectHome}> Recomeçar Cadastro </button>

                <Link to="/step3" className='backButton'> Voltar </Link>

            </C.Container>
        </Theme>
    )
};