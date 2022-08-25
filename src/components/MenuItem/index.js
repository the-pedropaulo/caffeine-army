import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon} from './styled';

export default ({icon, link, title}) => {

    const history = useHistory();
    const location = useLocation();

    let isActive = location.pathname === link;

    function handleLinkClick(e) {
        e.preventDefault();
        history.push(link);
    }

    return ( 
      <LinkArea 
        href={link} 
        onClick={handleLinkClick}
        active={isActive}  
        data-tip={title}
        data-for='tip-right'
      >
        <LinkIcon  src={icon}/>
      </LinkArea> 
    );
}