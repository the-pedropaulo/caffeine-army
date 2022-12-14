import React, { useEffect, useState, useLayoutEffect} from 'react';
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

import api from '../../../services/api'

import Button from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import CardInfo from '../../../components/CardInfo';
import CardData from '../../../components/CardData';
import Modal from '../../../components/Modal'
import ModalAlert from '../../../components/modals/ModalAlert';

import StorefrontIcon from '@mui/icons-material/Storefront';

import { handleMaskCPF } from '../../../utils/masks'

import { useSelector } from 'react-redux';

let searchTimer = null;

export default () => {
    const token = useSelector(state => state.user.token);
    const [search, setSearch] = useState('')
    const [enterprise, setEnterprise] = useState({});
    const [width] = useWindowSize();

    const [modalStatus, setModalStatus] = useState(false);
    const [modalData, setModalData] = useState({});

    function handleGetEnterprise() {
        if(search !== '') {
            (async () => {
            
                const formatSearch = search.replaceAll(".", "");
                const midFormatSearch = formatSearch.replaceAll("/", "");
                const lastFormatSearch = midFormatSearch.replaceAll("-", "");

                const products_response = await api.getEnterprise(lastFormatSearch, token);
                
                if(products_response !== undefined) {
                    setEnterprise(products_response)
                } else {
                    setModalData({message: 'Erro ao realizar consulta!'});
                    setModalStatus(true)
                }

                setSearch('') 
            })()
        } else {
            return;
        }
    }

    useEffect(() => {
        clearTimeout(searchTimer)
        if(search !== '') {
            searchTimer = setTimeout(() => {
                (async () => {
                
                    const formatSearch = search.replaceAll(".", "");
                    const midFormatSearch = formatSearch.replaceAll("/", "");
                    const lastFormatSearch = midFormatSearch.replaceAll("-", "");
    
                    const products_response = await api.getEnterprise(lastFormatSearch, token);
                    
                    if(products_response !== undefined) {
                        setEnterprise(products_response)
                    } else {
                        setModalData({message: 'Erro ao realizar consulta!'});
                        setModalStatus(true)
                    }
    
                    setSearch('') 
                })()
            }, 5000)
        } else {
            return;
        }
        
       
    }, [search, token])

    
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {

      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }

      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);

    return size;
  }

    function handleCloseModal() {
        setModalStatus(false);
    }

    function handleCloseModalAlternative(e) {
        if(e.target.classList.contains('modalBg')) {
            setModalStatus(false)
        }
    }
    

    return (
        <Container>
            <BoxContentArea>
                <ContentArea>
                    <BoxSearchArea>
                        <SearchArea>
                            <IconSearch src={"/assets/search.svg"}/>
                            <Input
                                placeholder={"Digite um CNPJ"} 
                                searchInput={true} 
                                paddingLeft={"60px"}
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                                onKeyPress={handleMaskCPF}
                            />
                        </SearchArea>
                        <Button text={width < 780 ? '' : 'Buscar loja'} height={"58px"} width={'200px'} isSearch={'75px'} onClick={handleGetEnterprise}/>
                    </BoxSearchArea>

                    <BoxTitle>
                        <BoxIcon>
                           <StorefrontIcon style={{color: 'rgb(137, 128, 187)', width: '46px', height: '46px'}}/>
                        </BoxIcon>
                        <Title>LOJA DE SUPLEMENTOS {''} 
                            {width > 780 && (
                            <TitleStyle>
                                - LOJA DE SUPLEMENTOS LTDA.
                            </TitleStyle>
                            )}
                        </Title>
                    </BoxTitle>

                    <InfoArea>
                        <SectionTitle>INFORMA????ES ADICIONAIS</SectionTitle>
                        <CardInfo isDescription={true}> 
                            {enterprise.description}
                        </CardInfo>

                        <SectionTitle>DADOS CADASTRAIS</SectionTitle>
                        <CardInfo title={"Lojista"}> 
                            <CardData 
                                options={['Nome', 'Telefone 1', 'E-mail', 'Telefone 2']} 
                                corresponding={
                                    [
                                        enterprise.shopkeeperName, 
                                        enterprise.shopkeeperPhone, 
                                        enterprise.shopkeeperEmail, 
                                        enterprise.shopkeeperPhoneOther
                                    ]
                                }/>
                        </CardInfo>

                        <CardInfo title={"Dados do Lojista"}> 
                            <CardData 
                                options={['CNPJ', 'E-mail', 'Nome Fantasia', 'Telefone', 'Raz??o Social']} 
                                corresponding={
                                    [
                                        enterprise.cnpj, 
                                        enterprise.email, 
                                        enterprise.fantasyName, 
                                        enterprise.phone,
                                        enterprise.socialReason
                                    ]
                                }/>
                        </CardInfo>
    
                    </InfoArea>
                    
                </ContentArea>
            </BoxContentArea>
            <Modal status={modalStatus} close={handleCloseModalAlternative}>
                <ModalAlert data={modalData} close={handleCloseModal}/>
            </Modal>
        </Container>
    );
}