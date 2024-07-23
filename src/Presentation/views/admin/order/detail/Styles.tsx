import { StyleSheet } from "react-native"
import { MyColors } from "../../../../theme/AppThemes";


const AdminOrderDetailStyles= StyleSheet.create({
    container:{
        flex:1
    },
    products:{
        width:'100%',
        height:'40%'
    },
    info:{
        width:'100%',
        height:'60%',
        backgroundColor:'white',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        paddingHorizontal:30
        
    },
    infoText:{
        flex:1
    },
    infoRow:{
        flexDirection:'row',
        marginTop:15

    },
    infoImage:{
        width:25,
        height:25
    },
    infoTitle:{
        color:'black'
    },
    infoDescription:{
        color:'gray',
        fontSize:13,
        marginTop:3
    },
    deliveries:{
      fontWeight:'bold',
      marginTop:20,
      color:MyColors.primary
    }

});

export default AdminOrderDetailStyles;