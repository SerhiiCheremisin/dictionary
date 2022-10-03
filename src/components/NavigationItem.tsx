import { IRoute } from '../types/commonTypes';
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

const NavigationItem = ( {route, url} : IRoute ):JSX.Element => {

    const [activeBorder, setActiveBorder] = useState<boolean>(false);

    const location = useLocation();

    useEffect(() => {
     if (location.pathname == url) {
        setActiveBorder(true);
        return
     }
     setActiveBorder(false);
    })

  const customStyle: object = activeBorder ? 
  {borderBottom: '2px solid gray'} 
  :
  {};

    return(
        <li style={customStyle} className='navigation-link'>
           <Link to={url}>{route}</Link>
        </li>
    )
}

export default NavigationItem;