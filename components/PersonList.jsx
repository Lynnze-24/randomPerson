import React,{useMemo} from 'react'
import {View,Text,FlatList,StyleSheet} from 'react-native'
import useMediaQueries from '../hooks/MediaQueries';
import { usePersonContext } from '../hooks/PersonContext';
import cusTheme from '../theme/Theme';
import TableItem from './cards/TableItem';
import TileItem from './cards/TileItem';


const PersonList = () => {

    
    const {isLessThanXL,isLessThanXS,isLessThanLG,width} = useMediaQueries();
    const {personData,filter,isTableView} = usePersonContext();

    const colNum = useMemo(()=>{
      return (isTableView?1:(width>1260)?3:(width>840)?2:1)
    },[width,isTableView]) // for tile view responsive style





    let filteredPerson = personData.filter(item=>{
       return (`${item.name.title} ${item.name.first} ${item.name.last}`).toLowerCase().includes(filter.toLowerCase())
    }) // filtered with query

    let sortedFilterPerson = filteredPerson.sort((a,b)=> a.email.localeCompare(b.email)); 
      // sorted by email column
   
    const renderTableItem = ({ item}) => <TableItem   
                                        name={`${item.name.title} ${item.name.first} ${item.name.last}`} 
                                        avatar={item.picture.thumbnail}
                                        email={item.email}
                                        phone={item.cell}
                                        location={`${item.location.city}, ${item.location.country}`}
                                         />
     const renderTileItem = ({ item}) => <TileItem   
                                         name={`${item.name.title} ${item.name.first} ${item.name.last}`} 
                                         avatar={item.picture.thumbnail}
                                         email={item.email}
                                         phone={item.cell}
                                         location={`${item.location.city}, ${item.location.country}`}
                                          />                                    
    
    return (
        sortedFilterPerson.length?(
                            <FlatList contentContainerStyle={isTableView ?[styles.table,isLessThanXS && styles.tableXS ]
                                                                :[styles.tiles,isLessThanXL && styles.tilesLG ]}
                            data={sortedFilterPerson}
                            testID="personlist"
                            numColumns={colNum}
                            key={colNum}
                            renderItem={isTableView ?renderTableItem:renderTileItem} 
                            keyExtractor={item => item.login.md5} />)
                            :<View  testID="personlist" style={styles.empty}>
                                <Text>There is no such person</Text>
                            </View>
    )
}

const styles = StyleSheet.create({
    table: {
      marginHorizontal:40,
      borderTopColor:cusTheme.lpr,
      borderTopWidth:2,
      flex:1,
      marginVertical:50
   },
   tableXS:{
    marginHorizontal:10,
    marginVertical:20
   },
   tiles: {
        maxWidth:1260,
        paddingVertical:30,
        alignSelf:'center',
       
    },
    tilesLG:{
        justifyContent:'center'
    },
    empty:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default PersonList
