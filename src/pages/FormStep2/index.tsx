import * as C from './styles';
import { Theme } from '../../components/theme';
import { useHistory } from 'react-router-dom';
import {useForm, FormActions} from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption/index';
import { Link } from 'react-router-dom';

export const FormStep2 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(()=> {
        if(state.name ===''){
            history.push('/');
        } else{
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2 
        });
    }
    }, []);
  
    function setLevel (level: number){
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    const handleNextStep = () => {
        if(state.name !== ''){
            history.push('/step3');
        } else {
            alert('Preencha os dados! ')
        }
    };

    return(
        <Theme>
            <C.Container>
                <p>Passo 2/3  </p> 
                <h1>{state.name} o que melhor descreve você </h1> 
                <p>Preencha o campo abaixo com a opção profissional que mais te representa </p>

                <hr />

                <SelectOption 
                    title="Sou iniciante"
                    description="Comecei a programar a menos de 2 anos"
                    icon="O"
                    selected={state.level === 0}
                    onClick={() => setLevel(0) }
                />

                <SelectOption 
                    title="Sou programador"
                    description="Já programo a mais de 2 anos"
                    icon="X"
                    selected={state.level === 1}
                    onClick={() => setLevel(1) }

                />
 

                <Link to="/" className='backButton'> Voltar </Link>
                <button onClick={handleNextStep}> Próximo </button>


            </C.Container>
        </Theme>
    )
};