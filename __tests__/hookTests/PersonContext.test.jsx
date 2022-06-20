import {render, fireEvent } from "@testing-library/react-native";
import PersonList from "../../components/PersonList";
import { PersonProvider } from "../../hooks/PersonContext";
import Topbar from "../../components/Topbar"
import Dashboard from "../../screens/Dashboard"
import { act } from "react-test-renderer";

it('should switch table and tileview when user click switch button',()=>{ 
    const {getAllByTestId,getByTestId}=render(
        <PersonProvider mockFetch={true}>
            <Topbar/>
         <PersonList/>
        </PersonProvider>
        );
        expect(getAllByTestId('tableItem').length).toBe(2) // before clicking table view
        fireEvent.press(getByTestId('switchBtn'))
        expect(getAllByTestId('tileItem').length).toBe(2)// after clicking table view

    
})

it('should refresh when click refresh button',()=>{ 
    const {getByTestId}=render(
        <PersonProvider mockFetch={true}>
            <Dashboard/>
        </PersonProvider>
        );
       
        fireEvent.press(getByTestId('refreshBtn'))
        getByTestId('loading') // loding indicator should be shown
        // fetch func is mocked
       
    
})


it('should filter person if user type in searchbox',()=>{ 
    const {getByTestId,getByText,getAllByTestId,queryByText}=render(
        <PersonProvider mockFetch={true}>
            <Dashboard/>
        </PersonProvider>
        );
            fireEvent.changeText(getByTestId('searchBox'),'Htet')
           
        getByText("Mrs Htet Htet")
        expect(queryByText("Mr Aung Linn")).toBe(null)
        expect(getAllByTestId('tableItem').length).toBe(1)
        
    
})