import {render, fireEvent } from "@testing-library/react-native";
import TileItem from "../../components/cards/TileItem.jsx"
import renderer from 'react-test-renderer';



it('matches snapShot', () => {
    const comp = renderer.create(<TileItem name="Aung"
                                    avatar={1} // mock
                                    email="gmail.com"
                                    phone="999"
                                    location="bago"
                                    />).toJSON();
    expect(comp).toMatchSnapshot();
});



it('should render component correctly',()=>{ 
    
    const {getByText,getByTestId}=render(
                        <TileItem name="Aung"
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
