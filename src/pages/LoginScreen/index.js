import React, {} from 'react';
import { 
    Container, 
    BoxContentArea,
    ContentArea,
    Logo,
    Title,
    FormArea,
    ContactArea
} from './styled';
import { useHistory } from 'react-router-dom';


import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';

import api from '../../services/api'

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

  
const signUpSchemaStep1 = yup.object().shape({
    email: yup.string().required('O email é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
    
});


export default () => {
    const history = useHistory();

    const signUpStep1Form = useForm({
        resolver: yupResolver(signUpSchemaStep1),
    });

    async function handleStep1FormSubmit(data) {
        signUpStep1Form.setValue("email", data.email)
        signUpStep1Form.setValue("password", data.password)

        try {
            const products_response = await api.signIn(signUpStep1Form.getValues("email"),  signUpStep1Form.getValues("password"));
            if(products_response) {
                history.push("/adm");
            }

        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <Container>
            <BoxContentArea>
                <ContentArea>
                    <Logo src="/assets/logo.svg"></Logo>
                    <Title>Acesse com seu e-mail e senha abaixo</Title>
                        <FormArea>
                            <form onSubmit={signUpStep1Form.handleSubmit(handleStep1FormSubmit)}>
                                <Input 
                                    label={"E-mail"} 
                                    placeholder={"Digite seu e-mail aqui..."} 
                                    searchInput={false} 
                                    paddingLeft={"10px"}
                                    error={signUpStep1Form.formState.errors.email}
                                    {...signUpStep1Form.register("email")}
                                />
                                <Input 
                                    label={"Senha"} 
                                    placeholder={"Digite sua senha aqui..."} 
                                    searchInput={false} 
                                    paddingLeft={"10px"}
                                    error={signUpStep1Form.formState.errors.password}
                                    {...signUpStep1Form.register("password")}
                                />
                                <Button text={'Entrar'} width={'100%'} height={"48px"} isSubmit={true}/>
                            </form>
                        </FormArea>
                    <ContactArea>
                    © 2021 Caffeine Army. CNPJ: 27.403.527/0001-13 Endereço: Rua Rubens Guelli, 68, Itaigara, Salvador - BA, 41815-135 E-mail: contato@caffeinearmy.com.br | Telefone: +55 11 91106-4910
                    </ContactArea>
                </ContentArea>
            </BoxContentArea>
            
        </Container>
    );
}