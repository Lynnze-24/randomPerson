import {render, fireEvent } from "@testing-library/react-native";
import BarButton from "../../components/buttons/BarButton";
import { PersonProvider } from "../../hooks/PersonContext";
import { mockVal } from "../../mocks/Mock";
import renderer from 'react-test-renderer';

const mockPress= jest.fn()


it('matches snapShot', () => {
    const comp = renderer.create( <PersonProvider mock={mockVal}>
                                <BarButton onPress={mockPress} testID="test"/>
                                </PersonProvider>).toJSON();
    expect(comp).toMatchSnapshot();
});



it('should render component correctly',()=>{ 
    const {getByTestId}=render(
                        <PersonProvider mock={mockVal}>
                        <BarButton onPress={mockPress} testID="test"/>
                        </PersonProvider>
                        );
    const barBtn =getByTestId("test")  // check if component renders
    fireEvent.press(barBtn)
    expect(mockPress).toHaveBeenCalled() // check onPress call
})

it('should disable according to loading state if refresh icon',()=>{ 
    const mock2 = {...mockVal,isLoading:true} // change loading state to true
    const {getByTestId,debug}=render(
                        <PersonProvider mock={mock2}>
                        <BarButton icon="refresh" onPress={mockPress} testID="test"/>
                        </PersonProvider>
                        );
        expect(getByTestId('test')).toHaveProp('accessibilityState',{"disabled": true})
     
})