import {render, fireEvent } from "@testing-library/react-native";
import Login from "../../screens/Login"
import renderer from 'react-test-renderer';



it('matches snapShot', () => {
    const comp = renderer.create( <Login />).toJSON();
    expect(comp).toMatchSnapshot();
});

it('should render component correctly',()=>{ 
    
    const {getByText,getByTestId,queryByText}=render(
                        <Login />
                        );
    
        getByText('Random Person');
        getByTestId('usernameInput')
        getByTestId('passwordInput')
        getByTestId('loginButton')
        expect(queryByText('Invalid Username')).toBe(null);
        expect(queryByText('Invalid Password')).toBe(null);
})

it('should show user error message if user not valid',()=>{ 
    
    const {getByText,getByTestId,queryByText,debug}=render(
                        <Login />
                        );

    fireEvent.changeText(getByTestId('passwordInput'),'a@')
    fireEvent.press(getByTestId('loginButton'))
    getByText('Invalid Username')
    expect(queryByText('Invalid Password')).toBe(null);
       
})

it('should show user error message if password not valid',()=>{ 
    
    const {getByText,getByTestId,queryByText}=render(
                        <Login />
                        );

    fireEvent.changeText(getByTestId('usernameInput'),'aa')
    fireEvent.press(getByTestId('loginButton'))
    getByText('Invalid Password')
    expect(queryByText('Invalid Username')).toBe(null);
       
})

it('should show both user and password error message if both not valid',()=>{ 
    
    const {getByText,getByTestId,queryByText}=render(
                        <Login />
                        );

    fireEvent.press(getByTestId('loginButton'))
    getByText('Invalid Password')
    getByText('Invalid Username')
})

it('should call login function if both user and password valid',()=>{ 
    const login = jest.fn()
    const {getByText,getByTestId,queryByText}=render(
                        <Login login={login} />
                        );
    fireEvent.changeText(getByTestId('usernameInput'),'aa')
    fireEvent.changeText(getByTestId('passwordInput'),'a@')
    fireEvent.press(getByTestId('loginButton'))
    expect(login).toHaveBeenCalled()
})






