import {render, fireEvent,act } from "@testing-library/react-native";
import { PersonProvider } from "../../hooks/PersonContext";
import { mockVal } from "../../mocks/Mock";
import Navigator from "../../navigation/Navigator";
import renderer from 'react-test-renderer';


it('matches snapShot', () => {
    const comp = renderer.create(<Navigator/>).toJSON();
    expect(comp).toMatchSnapshot();
});


it('should render loginscreen on initial load',()=>{ 
    const {getByTestId}=render(<Navigator/>);
    getByTestId('loginScreen')
})

it('should navigate to dashboard after login/ login navigation test',()=>{ 

    const {getByTestId,debug}=render(<PersonProvider mock={mockVal}>
                                        <Navigator/>
                                        </PersonProvider>);
    fireEvent.changeText(getByTestId('usernameInput'),'aaaa1')
    fireEvent.changeText(getByTestId('passwordInput'),'a@a1a')
    act(()=> {
        fireEvent.press( getByTestId('loginButton'))
    })
    getByTestId('dashboard')
})

it('should navigate to login after logout / logout navigation test',()=>{ 

    const {getByTestId,queryByTestId,debug}=render(<PersonProvider mock={mockVal}>
                                        <Navigator mock={true}/> // set initial page to dashboard
                                        </PersonProvider>);
   
            getByTestId('dashboard') // confirm it rendered dashboard page
            fireEvent.press(getByTestId('logoutButton'))
            getByTestId('loginScreen') // confirm it is login screen
            expect(queryByTestId('dashboard')).toBe(null) // doublecheck now it's not on dashboard page


})

