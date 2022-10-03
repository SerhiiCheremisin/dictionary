import '.././appStyles.css';
import { ReactNode } from "react";
interface Props {
    children?: ReactNode
}

const ContentBlock = ( {children} :Props ) => {
    return(
        <div className='content-block'>
         {children}
        </div>
    )
}

export default ContentBlock;