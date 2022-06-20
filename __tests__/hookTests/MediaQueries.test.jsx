import {describe} from '@jest/globals';
import useMediaQueries from '../../hooks/MediaQueries';
import { Dimensions } from 'react-native';
import { View,Text } from 'react-native';
import { render } from '@testing-library/react-native';


  



const Mock = ()=>{
    const{isLessThanXS,
        isLessThanSM,
        isLessThanXSM,
        isLessThanMD,
        isLessThanLG,
        isLessThanXLG,
        isLessThanXL}= useMediaQueries();
    return(<View>
        {isLessThanXS ? <Text>isLessThanXS</Text>:null}
        {isLessThanSM ? <Text>isLessThanSM</Text>:null}
        {isLessThanXSM ? <Text>isLessThanXSM</Text>:null}
        {isLessThanMD ? <Text>isLessThanMD</Text>:null}
        {isLessThanLG ? <Text>isLessThanLG</Text>:null}
        {isLessThanXLG ? <Text>isLessThanXLG</Text>:null}
        {isLessThanXL ? <Text>isLessThanXL</Text>:null}
         </View>)
}



    describe('Mock window width test', () => {
        jest.spyOn(Dimensions, 'get').mockReturnValue({ width: 900, height: 818 });
        it('should return only XLG and XL',()=>{
            const {queryByText,getByText,debug} = render(<Mock/>)
             expect(queryByText('isLessThanXS')).toBe(null)
             expect(queryByText('isLessThanSM')).toBe(null)
             expect(queryByText('isLessThanXSM')).toBe(null)
             expect(queryByText('isLessThanMD')).toBe(null)
             expect(queryByText('isLessThanLG')).toBe(null)
             getByText('isLessThanXLG')
             getByText('isLessThanXL')
            
        })
    });

    

    

