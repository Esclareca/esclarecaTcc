import React from 'react';
import {StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:12,
    paddingHorizontal:32,
    backgroundColor:'#365478',
    borderBottomWidth:1,
    borderBottomColor:'#D8D9DB',
    height:70,
    alignItems:'center',
    height:hp('12%'),
  },
  addButton: {
    position: 'absolute',
    right: hp('2%'),
    bottom: hp('9%'),
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#566F8E',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgb(0, 0, 0)',
            shadowOffset: {
              width: 3,
              height: 3,
            },
            shadowOpacity: 0.5,
            shadowRadius: 5,
            elevation: 3,
  },
  modalView:{
    alignItems:'center',
    justifyContent:'center'
  },
  modalContent:{
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute'
  },
  modalBody:{
    bottom: 0,
    position: 'absolute',
    height: '38%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  indicator:{
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 8
  },
  input: {
    paddingHorizontal: 8,
    fontSize: hp('1.6%'),
    color: '#444',
    height: hp('4%'),
    borderRadius: 2,
    },
    input2: {
      paddingHorizontal: 8,
      fontSize: hp('1.6%'),
      color: '#444',
      height: hp('4%'),
      borderRadius: 2,
      },
    modalSubtitle:{
      fontSize:hp('1.8%'),
      color: "#365478",
      marginTop:3
    },
    modalSubtitle2:{
      fontSize:hp('1.8%'),
      color: "#365478",
    },
    button: {
      height: hp('5%'),
      width: wp('30%'),
      backgroundColor: '#365478',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius:15,
      flexDirection:'row',
      paddingHorizontal:20
  },
  buttonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: hp('2%'),
  },
  buttonView:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    paddingHorizontal:36, 
    paddingVertical:hp('2.8%')
  },
  modalPerfil:{
    alignItems:'center', 
    justifyContent:'center', 
    marginTop:hp('1.5%'), 
    flexDirection:'row'
  },
  perfilTitle:{
    fontSize:hp('2.2%'), 
    fontWeight:'bold', 
    color:'#444'
  },
  viewInput:{
    paddingVertical:hp('0%'), 
    paddingHorizontal:16
  },
  perfilName:{
    alignItems:'center', 
    marginTop:hp('4.8%'),
    justifyContent:'center'
  },
  header: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:15,
    paddingHorizontal:32,
    backgroundColor:'#365478',
    borderBottomWidth:1,
    borderBottomColor:'#D8D9DB',
    height:hp('10%'),
    alignItems:'center',
    paddingTop: hp('2%'),
  },
  postTitle: {
    fontSize: 16,
    color: '#365478',
    fontWeight: 'bold',
  },
  postTag:{
    fontSize: 12,
    color: '#737380'
  },
  postDescricao: {
    fontSize: 15,
  },
  postHeader:{
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    paddingRight:24,
    paddingLeft:24,
    paddingTop:10,
    paddingBottom:8
  },

  postDesc:{
    backgroundColor: 'white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius:8,
    paddingRight:24,
    paddingLeft:24,
    paddingTop:10,
    paddingBottom:12,
  },

  postTitulo:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:2,
    justifyContent: 'space-between'
  },

  headerTags:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },

  Ver:{
    paddingRight:20,
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'center'
  },
  Nomepost:{
    fontSize:10,
    color:'#C8C8C8',
    marginRight:10
  },
  post: {
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 5,
    shadowColor: 'rgb(0, 0, 0)',
            shadowOffset: {
              width: 3,
              height: 3,
            },
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 3,
  },
});

export default styles;