import { mockPersonData } from "./MockPersonData"

export const mockVal = {personData:[],
    isLoading:false,
    isError:false,
    refreshPerson:jest.fn(),
    filter:'',
    setFilter:jest.fn(),
    refresh:false,
    isTableView:true,
    switchView:jest.fn()
}




export const mockPersonVal = {...mockVal,
    personData: mockPersonData

}