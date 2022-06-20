import React, { createContext, useContext, useState,useEffect} from 'react';
import { mockPersonData } from '../mocks/MockPersonData';



const PersonContext = createContext();


export function usePersonContext(){
    return useContext(PersonContext)
}

export function PersonProvider({children,mock,mockFetch}) {
    const initialData = mockFetch?mockPersonData:[]
    const initialLoading = mockFetch?false:true
   
   const [personData, setPersonData] = useState(initialData); // for person data
    
    const[isLoading,setIsLoading] = useState(initialLoading); // for loading state
    const [isError,setIsError] = useState(false);   // handle fetch error 
    const[refresh,setRefresh] = useState(false);    // for refresh button
    const[filter,setFilter] = useState('');         // setting filter word to filter person data
    
    const[isTableView,setTableView] = useState(true) // switch view

    const switchView = () =>{
        setTableView(!isTableView)
    }

    const fetchPerson = ((mock||mockFetch))?()=>{} 
                            :()=>{
                                fetch('https://randomuser.me/api?results=50')
                                .then(res=> res.json())
                                .then(person=> {
                                        if(isError)setIsError(false)
                                        setPersonData(person.results)
                                        setIsLoading(false)
                                    
                                })
                                .catch(()=>{
                                    setIsLoading(false)
                                    setIsError(true);
                                
                                })
                        }
  

    const refreshPerson = ()=>{
        setIsLoading(true);
        setRefresh(!refresh)
    }
      
    useEffect(() => {
           fetchPerson()
    }, [refresh])
    
    const val = mock? mock : {personData,
                                isLoading,
                                isError,
                                refreshPerson,
                                filter,
                                setFilter,
                                refresh,
                                isTableView,
                                switchView}
    
    return (
        <PersonContext.Provider value={val}>
        {children}
      </PersonContext.Provider>
    );
}
