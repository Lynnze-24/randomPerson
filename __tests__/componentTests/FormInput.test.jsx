import {render, fireEvent } from "@testing-library/react-native";
import FormInput from "../../components/FormInput";
import renderer from 'react-test-renderer';



it('matches snapShot', () => {
    const comp = renderer.create(<FormInput testID="test"/>).toJSON();
    expect(comp).toMatchSnapshot();
});

it('should render component correctly',()=>{ 
    const {getByTestId}=render(<FormInput testID="test"/>);
    getByTestId("test")
})

it('should show error message if hasError is true',()=>{ 
    const {getByText}=render(<FormInput errorMessage = "Invalid Username" hasError={true} testID="test"/>);
    getByText( "Invalid Username")
})

it('should not show error message if hasError is false',()=>{ 
    const {queryByText}=render(<FormInput errorMessage = "Invalid Username" hasError={false} testID="test"/>);
    expect(queryByText("Invalid Username")).toBe(null)
})

it('should hide text initially if isPassword is true',()=>{ 
    const {getByTestId,queryByText,debug}=render(<FormInput isPassword={true} testID="test"/>);
   
    const textInput = getByTestId("test");
    expect(textInput).toHaveProp("secureTextEntry",true)
})

it('should switch password visibility when toggle eye button',()=>{ 
    const {getByTestId,queryByText,debug}=render(<FormInput isPassword={true} testID="test"/>);
    const textInput = getByTestId("test");
    expect(textInput).toHaveProp("secureTextEntry",true)
     fireEvent.press(getByTestId("pwToggle")) 
     expect(textInput).toHaveProp("secureTextEntry",false)
})