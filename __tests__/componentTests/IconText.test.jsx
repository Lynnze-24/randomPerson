import {render, fireEvent } from "@testing-library/react-native";
import IconText from "../../components/IconText";
import renderer from 'react-test-renderer';



it('matches snapShot', () => {
    const comp = renderer.create(<IconText icon="email-outline" text="Email" />).toJSON();
    expect(comp).toMatchSnapshot();
});

it('should render component correctly',()=>{ 
    
    const {getByText}=render(
                        <IconText icon="email-outline" text="Email" />
                        );
    //expo vector icons were ignored in transformpatterns so not show up here
        getByText("Email")
        
})
