import {useCallback, useEffect, useState} from 'react';

const useClick = ()=> {
  const [countClick,setCountClick] = useState(0);
  const handlerClick = useCallback(() => {
    setCountClick(countClick+1)
  },[countClick])
  useEffect(() => {
    window.addEventListener('click',handlerClick);
    return ()=>{
      window.removeEventListener('click',handlerClick);
    }
  },[handlerClick])

  return {countClick}
}

export default useClick;