import {render, fireEvent } from "@testing-library/react-native";
import PersonList from "../../components/PersonList";
import { PersonProvider } from "../../hooks/PersonContext";
import { mockVal,mockPersonVal } from "../../mocks/Mock";
import renderer from 'react-test-renderer';



it('matches snapShot', () => {
    const comp = renderer.create(<PersonProvider mock={mockVal}>
                                    <PersonList/>
                                </PersonProvider>).toJSON();
    expect(comp).toMatchSnapshot();
});


it('should render there is no such person if filtered person empty',()=>{ 
    
    const {getByText}=render(
                        <PersonProvider mock={mockVal}>
                         <PersonList/>
                        </PersonProvider>
                        );
                 getByText("There is no such person")       
})

it('should show table view initially i.e. isTableview is true',()=>{ 
    
    const {getAllByTestId,debug}=render(
                        <PersonProvider mock={mockPersonVal}>
                         <PersonList/>
                        </PersonProvider>
                        );
        expect(getAllByTestId('tableItem').length).toBe(2)          
})

it('should show tile view if isTableview is false',()=>{ 
    const mock2 = {...mockPersonVal,isTableView:false}
    const {getAllByTestId,debug}=render(
                        <PersonProvider mock={mock2}>
                         <PersonList/>
                        </PersonProvider>
                        );
           expect(getAllByTestId('tileItem').length).toBe(2)         
})

it('should show only filtered item if search',()=>{ 
    const mock2 = {...mockPersonVal,filter:'Htet'}
    const {getByText,queryByText,getAllByTestId,debug}=render(
                        <PersonProvider mock={mock2}>
                         <PersonList/>
                        </PersonProvider>
                        );
           getByText("Mrs Htet Htet")
           expect(queryByText("Mr Aung Linn")).toBe(null)
           expect(getAllByTestId('tableItem').length).toBe(1)         
})


it('should sort personData with email address',()=>{ 
   
    const {queryAllByTestId}=render(
                        <PersonProvider mock={mockPersonVal}>
                         <PersonList/>
                        </PersonProvider>
                        );
            expect(queryAllByTestId('personName')[0]).toHaveTextContent("Mrs Htet Htet")
            expect(queryAllByTestId('personName')[1]).toHaveTextContent("Mr Aung Linn") // sorted with email because
                                                                                        // Htet Htet email starts with 'a'
                   
})
