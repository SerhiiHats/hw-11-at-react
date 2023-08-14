import {useEffect} from 'react';
import ReactDOM from "react-dom";

const Portal = ({children}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";                                            // блокує прокрутку у body, при Mounting
    return () => document.body.style.overflow = "";                                     // знімає блокування прокрутки у body, при Unmounting
  }, []);
  return ReactDOM.createPortal(children, document.getElementById("modal"));    // Вставляемо children в блок з id = "modal"
};

export default Portal;