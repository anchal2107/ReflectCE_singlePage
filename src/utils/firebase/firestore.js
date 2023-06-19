
import { firebaseConfig } from "./config.js";
import { getFirestore, collection, addDoc, getDocs, query, where, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);


// // Create a document
// function createDocument(collectionName, documentData) {
//   const collectionRef = collection(db, collectionName);
//  return addDoc(collectionRef, documentData)
//     .then(docRef => {
//       console.log('Document created with ID:', docRef.id);
//     })
//     .catch(error => {
//       console.error('Failed to create document:', error);
//     });
// }


// Create a document
 async function createDocument(collectionName, documentData) {
  try {
    // const collectionRef = collection(db, collectionName);
    //  return addDoc(collectionRef, documentData)
    // .then(docRef => {
    //   return { code: 'SUCCESS',status:201, message: 'Document created successfully', data:{docId:docRef.id} };
    // })
    // .catch(error => {
    //   return { code: 'ERROR',status:500, message: 'Failed to create document', error:error };
    // });
    const docRef = await addDoc(collection(db, collectionName), documentData);
    return { code: 'SUCCESS',status:201, message: 'Document created successfully', data:{docId:docRef.id} };
  } catch (error) {
    return { code: 'ERROR',status:500, message: 'Failed to create document', error:error };
  }
}


// Read all documents
async function readAllDocuments(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const documents = [];

    querySnapshot.forEach(doc => {
      documents.push({
        id: doc.id,
        data: doc.data()
      });
    });

    return documents.length > 0 ? documents : null;
  } catch (error) {
    console.error('Failed to read documents:', error);
    return null;
  }
}
async function searchDocuments(collectionName, field, value) {
  const q = query(collection(db, collectionName), where(field, '==', value));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const documents = [];
    querySnapshot.forEach(doc => {
      documents.push({ id: doc.id, data: doc.data() });
    });
    return documents;
  }

  return null;
}


// Delete a document by ID
function deleteDocumentById(collectionName, documentId) {
  deleteDoc(doc(db, collectionName, documentId))
    .then(() => {
      console.log('Document deleted successfully');
    })
    .catch(error => {
      console.error('Failed to delete document:', error);
    });
}

// Delete documents based on search criteria
function deleteDocumentsBySearch(collectionName, field, value) {
  const q = query(collection(db, collectionName), where(field, '==', value));
  getDocs(q)
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        deleteDoc(doc.ref)
          .then(() => {
            console.log('Document deleted successfully:', doc.id);
          })
          .catch(error => {
            console.error('Failed to delete document:', doc.id, error);
          });
      });
    })
    .catch(error => {
      console.error('Failed to search documents for deletion:', error);
    });
}

// Update document fields based on search criteria
function updateDocumentFields(collectionName, field, value, updateData) {
  const q = query(collection(db, collectionName), where(field, '==', value));
  getDocs(q)
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        updateDoc(doc.ref, updateData)
          .then(() => {
            console.log('Document updated successfully:', doc.id);
          })
          .catch(error => {
            console.error('Failed to update document:', doc.id, error);
          });
      });
    })
    .catch(error => {
      console.error('Failed to search documents for update:', error);
    });
}
function updateDocumentFieldsOnDocId(collectionName, docId, updateData) {
  const docRef = doc(db, collectionName, docId);
  updateDoc(docRef, updateData)
    .then(() => {
      console.log('Document updated successfully:', docId);
    })
    .catch(error => {
      console.error('Failed to update document:', docId, error);
    });
}
  module.exports = {
    createDocument,
    readAllDocuments,
    searchDocuments,
    deleteDocumentById,
    deleteDocumentsBySearch,
    updateDocumentFields,
    updateDocumentFieldsOnDocId
    }
  
// sample code
// const collectionUser = 'users';
// const emailResult = await searchDocuments(collectionUser, 'email', email);
// const users = await readAllDocuments(collectionUser);


// // Create a document
// function createDocument(collectionName, documentData) {
//   const collectionRef = collection(db, collectionName);
//  return addDoc(collectionRef, documentData)
//     .then(docRef => {
//       console.log('Document created with ID:', docRef.id);
//     })
//     .catch(error => {
//       console.error('Failed to create document:', error);
//     });
// }
// // Read all documents
// function readAllDocuments(collectionName) {
//   getDocs(collection(db, collectionName))
//     .then(querySnapshot => {
//       querySnapshot.forEach(doc => {
//         console.log('Document ID:', doc.id);
//         console.log('Document data:', doc.data());
//       });
//     })
//     .catch(error => {
//       console.error('Failed to read documents:', error);
//     });
// }

// // Search documents based on email or phone number
// function searchDocuments(collectionName, field, value) {
//   const q = query(collection(db, collectionName), where(field, '==', value));
//   getDocs(q)
//     .then(querySnapshot => {
//       querySnapshot.forEach(doc => {
//         console.log('Document ID:', doc.id);
//         console.log('Document data:', doc.data());
//       });
//     })
//     .catch(error => {
//       console.error('Failed to search documents:', error);
//     });
// }

// const {createDocument,readAllDocuments,searchDocuments,deleteDocumentById, deleteDocumentsBySearch,updateDocumentFields } = require('../utils/firebase_rest_api/firebase_firestore');
// createDocument('users', { name: 'John', email: '11john@example.com', phone: '123456789' });
// readAllDocuments('users');
// searchDocuments('users', 'email', '11john@example.com');
// deleteDocumentById('users', '4bsJXrr7vICShWh1e5Dc');
// deleteDocumentsBySearch('users', 'email',"john@example.com"  );
// updateDocumentFields('users','email', '11john@example.com',  { name: 'John', email: 'anhcal2107@email.com', phone: '123456789' });