import { useEffect, useState } from 'react';

const usePersistedState=(initialState,localstorageKey)=>{
    const [state,setState]=useState(()=>{
        const value = sessionStorage.getItem(localstorageKey);
      return value ? JSON.parse(value) : initialState;
    })
    useEffect(() => {
        sessionStorage.setItem(localstorageKey, JSON.stringify(state));
      }, [state, localstorageKey]);

      return [state, setState];
}

export default function useSearchStr() {
  return usePersistedState("","showslist");
}
