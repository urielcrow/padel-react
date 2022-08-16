import {createContext,useState} from 'react';

export const ContextTournaments = createContext();

export const TournamentsProvider = ({children})=>{
    const [screen,setScreen] = useState(1);
    const [searchTournaments, setSearchTournaments] = useState(true);
    return (
        <ContextTournaments.Provider value={{screen,setScreen,searchTournaments,setSearchTournaments}}>
            {children}
        </ContextTournaments.Provider>
    )
}

