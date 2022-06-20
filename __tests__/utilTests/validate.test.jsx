import validate ,{ validateUser,validatePassword} from "../../utils/validate";
import {describe} from '@jest/globals';

describe('validate user function unit test',()=>{
    it('should output false if input empty',()=>{
        expect(validateUser("")).toBe(false)
    })
    it('should output false if input has space',()=>{
        expect(validateUser("hello hi")).toBe(false)
    })
    it('should output false if input has special chars',()=>{
        expect(validateUser("hell@")).toBe(false)
    })
    it('should output true if input is alphanumeric without spaces',()=>{
        expect(validateUser("hello")).toBe(true)
        expect(validateUser("001")).toBe(true)
        expect(validateUser("hell01")).toBe(true)
    })

})

describe('validate password function unit test',()=>{
    it('should output false if input empty',()=>{
        expect(validatePassword("")).toBe(false)
    })
    it('should output false if input has space',()=>{
        expect(validatePassword("hello hi")).toBe(false)
    })
    it('should output false if input does not have any special chars',()=>{
        expect(validatePassword("hello")).toBe(false)
    })
    it('should output true if input is alphanumeric without spaces with at least one special char',()=>{
        expect(validatePassword("hello!")).toBe(true)
        expect(validatePassword("001#@")).toBe(true)
        expect(validatePassword("hell01{}")).toBe(true)
    })

})


describe('Integration test: validate function',()=>{
    it('should output 12 if both input empty or invalid',()=>{
        expect(validate("","")).toBe(12)
        expect(validate("a@","aa")).toBe(12)
        expect(validate("al l","l@ l")).toBe(12)
    })
    it('should output 1 if user input empty or invalid',()=>{
        expect(validate("","a@")).toBe(1)
        expect(validate("a@","a@")).toBe(1)
        expect(validate("al l","l@l")).toBe(1)
    })
    it('should output 2 if password input empty or invalid',()=>{
        expect(validate("aa","")).toBe(2)
        expect(validate("aa","aa")).toBe(2)
        expect(validate("all","l@ l")).toBe(2)
    })
    
    it('should output null if password input empty or invalid',()=>{
        expect(validate("aa","l@l")).toBe(null)
        expect(validate("aa","l@l")).toBe(null)
        expect(validate("all","l@l")).toBe(null)
    })

})