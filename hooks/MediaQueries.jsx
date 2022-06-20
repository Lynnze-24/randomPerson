import React,{ useMemo } from 'react';
import { useWindowDimensions } from 'react-native'

const useMediaQueries = () => {
    const {  width } = useWindowDimensions();
   
    const isLessThanXS = useMemo(() => {
        return width <= 465;
      }, [width]);
    
      const isLessThanSM = useMemo(() => {
        return width <= 550;
      }, [width]);

      const isLessThanXSM = useMemo(() => {
        return width <= 600;
      }, [width]);
    
      const isLessThanMD = useMemo(() => {
        return width <= 700;
      }, [width]);
    
    
      const isLessThanLG = useMemo(() => {
        return width <= 840;
      }, [width]);

      const isLessThanXLG = useMemo(() => {
        return width <= 1000;
      }, [width]);

      const isLessThanXL = useMemo(() => {
        return width <= 1260;
      }, [width]);

      
    

      return {
        width,
        isLessThanXS,
        isLessThanSM,
        isLessThanXSM,
        isLessThanMD,
        isLessThanLG,
        isLessThanXLG,
        isLessThanXL,
      };
}

export default useMediaQueries;
