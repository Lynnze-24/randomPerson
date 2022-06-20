import {render } from "@testing-library/react-native";
import TableItem from "../../components/cards/TableItem.jsx"
import renderer from 'react-test-renderer';



it('matches snapShot', () => {
    const comp = renderer.create( <TableItem name="Aung"
                                    avatar={1} // mock
                                    email="gmail.com"
                                    phone="999"
                                    location="bago"
                                    />).toJSON();
    expect(comp).toMatchSnapshot();
});



it('should render component correctly',()=>{ 
    
    const {getByText,getByTestId}=render(
                        <TableItem name="Aung"
                                   avatar={1} // mock
                                   email="gmail.com"
                                   phone="999"
                                   location="bago"
                                    />
                        );
            getByTestId('avatar')
            getByText("Aung")
            getByText("gmail.com")
            getByText("999")
            getByText("bago")
        
})
