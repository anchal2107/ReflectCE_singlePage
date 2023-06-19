import {
    searchDocuments,
    createDocument,
    readAllDocuments,
    updateDocumentFieldsOnDocId
  } from "../utils/firebase/firestore";
  const collectionName = "landingPageData";
  const collectionUser = "users";
  async function getAllUsers() {

    const users = await readAllDocuments(collectionUser);
    console.log('users:', users);
    if (users) {
      // Documents found
      return {
        code: "SUCCESS",
        status: 200,
        message: "Users Found",
        data: { users: users },
      };
    } else {
      // No documents found
      return {
        code: "SUCCESS",
        status: 200,
        message: "Users Not Found",
        data: { users: null },
      };
    }
  }
  
  async function getPageData() {
    const resultData = await readAllDocuments(collectionName);
    console.log('resultData:', resultData);
    if (resultData) {
      // Documents found
      return {
        code: "SUCCESS",
        status: 200,
        message: "Users Found",
        data: { resultData },
      };
    } else {
      // No documents found
      return {
        code: "SUCCESS",
        status: 200,
        message: "Users Not Found",
        data: { resultData: null },
      };
    }
  }
  

  module.exports = {
    getPageData,
    getAllUsers
  };
  
  //Sample code
  // const {addUser, getAllUsers} = require('../services/users.js');
  // // const {User} = require('../models/user.js');
  // getAllUsers().then((res)=>console.log('res:', res))
  // const User={
  //   email: 'anchal21107@email.com',
  //   phoneNumber: '1314567',
  //   displayName: 'abcgak',
  //   location: 'athis is location',
  //   specialty: 'codeing',
  // }
  // addUser(User).then((res)=>{
  //   res.code =='SUCCESS' ? console.log('user added successfully') : console.log(res.message);
  // });
  
  ///sample code
  // const {addUser, getAllUsers, checkUserExists} = require('../services/users.js');
  
  // getAllUsers().then((res)=>console.log('registraton page:', res))
  // var User = {
  //   email: '',
  //   phoneNumber: '',
  //   displayName: '',
  //   location: '',
  //   specialty: '',
  //   isEmailVerified: false,
  //   isPhoneVerified: false,
  // };
  //   User.email = 'anch11al'
  //   User.phoneNumber = '12311456789'
  //   User.displayName = 'abc'
  //   User.location = 'this is location'
  //   User.specialty = 'codeing'
  // checkUserExists(User.email, User.phoneNumber).then((res)=>{
  //   if (res.code !== 'NOT_FOUND') {
  //     console.log('restration page: ',res);
  //   }else{
  //     addUser(User).then((res)=>{
  //       res.code =='SUCCESS' ? console.log('user added successfully') : console.log(res.message);
  //     });
  //   }
  // });
  