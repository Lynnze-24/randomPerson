import {describe} from '@jest/globals';
import { useDevice } from '../../hooks/Device';

describe('platform tests', () => {
    

    let Platform;
    beforeEach(() => {
        Platform = require('react-native').Platform;
    });

    describe('ios tests', () => {
        beforeEach(() => {
            Platform.OS = 'ios';
        });

        it('should return correct values according to Platform',()=>{
            const{isWeb,isAndroid,isIOS}= useDevice()
            expect(isWeb).toBe(false)
            expect(isAndroid).toBe(false)
            expect(isIOS).toBe(true)
           
        })
    });

    describe('android tests', () => {
        beforeEach(() => {
            Platform.OS = 'android';
        });

        it('should return correct values according to Platform',()=>{
            const{isWeb,isAndroid,isIOS}= useDevice()
            expect(isWeb).toBe(false)
            expect(isAndroid).toBe(true)
            expect(isIOS).toBe(false)
            
                    
        })
    });
    describe('web tests', () => {
        beforeEach(() => {
            Platform.OS = 'web';
        });

        it('should return correct values according to Platform',()=>{
            const{isWeb,isAndroid,isIOS}= useDevice()
            expect(isWeb).toBe(true)
            expect(isAndroid).toBe(false)
            expect(isIOS).toBe(false)
            
        })
    });

});