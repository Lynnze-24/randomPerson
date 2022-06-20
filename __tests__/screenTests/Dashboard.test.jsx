import {render, fireEvent } from "@testing-library/react-native";
import { PersonProvider } from "../../hooks/PersonContext";
import { mockVal } from "../../mocks/Mock";
import Dashboard from "../../screens/Dashboard"
import renderer from 'react-test-renderer';



it('matches snapShot', () => {
    const comp = renderer.create( <PersonProvider mock={mockVal}>
                                    <Dashboard />
                                 </PersonProvider>).toJSON();
    expect(comp).toMatchSnapshot();
});

it('should render component correctly',()=>{ 
   //  should render topbar and personlist component 
    const {getByTestId}=render(
                         <PersonProvider mock={mockVal}>
                            <Dashboard />
                         </PersonProvider>
                        );
      getByTestId('topBar')                  
     getByTestId('personlist')
        
        
})

it('should render error text if fetch fail',()=>{ 
   const mock2 = {...mockVal,isError:true} 
    const {getByText,getByTestId}=render(
                         <PersonProvider mock={mock2}>
                            <Dashboard />
                         </PersonProvider>
                        );
      getByTestId('topBar')                    
      getByText('Something went wrong!Please check your connection.')
})

it('should render loading indicator while loading',()=>{ 
   const mock2 = {...mockVal,isLoading:true} 
    const {getByText,debug,getByTestId}=render(
                         <PersonProvider mock={mock2}>
                            <Dashboard />
                         </PersonProvider>
                        );
    getByTestId('topBar') 
    getByTestId('loading')                       
     
})
