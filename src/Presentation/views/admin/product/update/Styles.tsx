import {StyleSheet} from 'react-native';

const AdminProductUpdateStyles= StyleSheet.create({
    container:{
        flex:1
    },
    imageContainer:{
      paddingTop:50,
      flexDirection:'row',
      justifyContent:'space-around' 
    },
    image:{
        width:110,
        height:110,
        resizeMode:'contain'
    },
    form:{
        backgroundColor:'white',
        height:'70%',
        width:'100%',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        paddingHorizontal:30,
        position:'absolute',
        bottom:0
    },
    buttonContainer:{
        marginTop:80
        //position:'absolute',
        //bottom:30,
        //left:20,
        //right:20
    },
    categoryInfo:{
        //flexDirection:'row',
        marginTop:30,
        justifyContent:'center',
        alignItems:'center'
    },
    imageCategory:{
        width:50,
        height:50
    },
    textCategory:{
        //marginLeft:10,
        fontSize:17,
        fontWeight:'bold'
    }
})

export default AdminProductUpdateStyles;