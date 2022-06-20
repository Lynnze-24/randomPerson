jest.useFakeTimers()
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

import  '@testing-library/jest-native/extend-expect';
import { toBeEmpty, toHaveTextContent,toHaveProp,toHaveStyle} from '@testing-library/jest-native';



expect.extend({ toBeEmpty, toHaveTextContent,toHaveProp,toHaveStyle });



  




