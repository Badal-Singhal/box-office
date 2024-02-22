import { useEffect, useReducer } from "react";


export default function useStarredShows() {
  return usePersistedReducer(Reducerfun,[],'starredShow');
  
}


export const usePersistedReducer = (reducer, initialState, storageKey) => {
    const [state, dispatch] = useReducer(reducer, initialState, initial => {
      const value = localStorage.getItem(storageKey);
      return value ? JSON.parse(value) : initial;
    });
    useEffect(() => {
      localStorage.setItem(storageKey, JSON.stringify(state));
    }, [state, storageKey]);
    return [state, dispatch];
  };

export const Reducerfun = (state, action) => {
    switch (action.type) {
      case 'STAR':
        return state.concat(action.showId);
      case 'UNSTAR':
        return state.filter(showId => showId !== action.showId);
      default:
        return state;
    }
};
