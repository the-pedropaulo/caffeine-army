import React from 'react';
import { 
    Container, 
    BoxContentArea,
    ContentArea,
    BoxLogo,
    Logo,
    Title,
    FormArea,
    ContactArea
} from './styled';

import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';




export default () => {

    return (
        <Container>
            <BoxContentArea>
                <ContentArea>
                    <Logo src="/assets/logo.svg"></Logo>
                    <Title>Acesse com seu e-mail e senha abaixo</Title>
                    <FormArea>
                        <Input label={"E-mail"} placeholder={"Digite seu e-mail aqui..."} searchInput={false} paddingLeft={"10px"}/>
                        <Input label={"Senha"} placeholder={"Digite sua senha aqui..."} searchInput={false} paddingLeft={"10px"}/>
                        <Button text={'Entrar'} width={'100%'} height={"48px"}/>
                    </FormArea>
                    <ContactArea>
                    © 2021 Caffeine Army. CNPJ: 27.403.527/0001-13 Endereço: Rua Rubens Guelli, 68, Itaigara, Salvador - BA, 41815-135 E-mail: contato@caffeinearmy.com.br | Telefone: +55 11 91106-4910
                    </ContactArea>
                </ContentArea>
            </BoxContentArea>
            
        </Container>
    );
}