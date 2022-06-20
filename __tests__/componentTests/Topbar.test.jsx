import {render, fireEvent } from "@testing-library/react-native";
import Topbar from "../../components/Topbar"
import { PersonProvider } from "../../hooks/PersonContext";
import { mockVal } from "../../mocks/Mock";
import renderer from 'react-test-renderer';



it('matches snapShot', () => {
    const comp = renderer.create( <PersonProvider mock={mockVal}><Topbar/></PersonProvider>).toJSON();
    expect(comp).toMatchSnapshot();
});


it('should render component correctly',()=>{ 
    
    const {getByText,getByTestId}=render(
                     <PersonProvider mock={mockVal}><Topbar/></PersonProvider>
                        );
    getByText('Random Person')
    getByTestId('searchBox')
    getByTestId('refreshBtn')
    getByTestId('switchBtn')
    getByTestId('logoutButton')
     
})


it('should change filter when user type in searchbox',()=>{ 
    
    const {getByTestId}=render(
                     <PersonProvider mock={mockVal}><Topbar/></PersonProvider>
                        );
    const search = getByTestId('searchBox');
   fireEvent.changeText(search,'aa')
   expect(mockVal.setFilter).toHaveBeenCalledWith('aa')
})

it('should call refresh person function when press refresh',()=>{ 
    
    const {getByTestId}=render(
                     <PersonProvider mock={mockVal}><Topbar/></PersonProvider>
                        );
   
   fireEvent.press(getByTestId('refreshBtn'))
   expect(mockVal.refreshPerson).toHaveBeenCalled()
})


it('should call switchView function when press switch icon',()=>{ 
    
    const {getByTestId}=render(
                     <PersonProvider mock={mockVal}><Topbar/></PersonProvider>
                        );
    
   fireEvent.press(getByTestId('switchBtn'))
   expect(mockVal.switchView).toHaveBeenCalled()
})

it('should call logout function when press logout button',()=>{ 
    const logout = jest.fn()
    const {getByTestId}=render(
                     <PersonProvider mock={mockVal}><Topbar logout={logout}/></PersonProvider>
                        );
    
   fireEvent.press(getByTestId('logoutButton'))
   expect(logout).toHaveBeenCalled()
})