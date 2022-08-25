import React from 'react';
import { 
    Container, 
    BoxContentArea,
    ContentArea,
    BoxSearchArea,
    SearchArea,
    IconSearch,
    BoxTitle,
    BoxIcon,
    Title,
    TitleStyle,
    InfoArea,
    SectionTitle
} from './styled';

import Button from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import CardInfo from '../../../components/CardInfo';
import CardData from '../../../components/CardData';

import StorefrontIcon from '@mui/icons-material/Storefront';




export default () => {

    return (
        <Container>
            <BoxContentArea>
                <ContentArea>
                    <BoxSearchArea>
                        <SearchArea>
                            <IconSearch src={"/assets/search.svg"}/>
                            <Input placeholder={"Digite um CNPJ"} searchInput={true} paddingLeft={"60px"}/>
                        </SearchArea>
                        <Button text={'Buscar loja'} height={"58px"} width={'200px'} isSearch={'75px'}/>
                    </BoxSearchArea>

                    <BoxTitle>
                        <BoxIcon>
                           <StorefrontIcon style={{color: 'rgb(137, 128, 187)', width: '46px', height: '46px'}}/>
                        </BoxIcon>
                        <Title>LOJA DE SUPLEMENTOS <TitleStyle>- LOJA DE SUPLEMENTOS LTDA.</TitleStyle></Title>
                    </BoxTitle>

                    <InfoArea>
                        <SectionTitle>INFORMAÇÕES ADICIONAIS</SectionTitle>
                        <CardInfo> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </CardInfo>

                        <SectionTitle>DADOS CADASTRAIS</SectionTitle>
                        <CardInfo title={"Lojista"}> 
                            <CardData options={['Nome', 'Telefone 1', 'E-mail', 'Telefone 2']} corresponding={['Pedro Paulo', '(28) 97424-8734', 'dsjhhd@gmail.com', '']}/>
                        </CardInfo>

                        <CardInfo title={"Dados do Lojista"}> 
                            <CardData options={['CNPJ', 'E-mail', 'Nome Fantasia', 'Telefone']} corresponding={['4024-54540.5455', 'peugdhaghd@jfhdhdgmai.com', 'Caffeine Army', '(28) 97424-8734']}/>
                        </CardInfo>

    
                    </InfoArea>
                    
                </ContentArea>
            </BoxContentArea>
            
        </Container>
    );
}