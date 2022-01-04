import firebase from 'firebase/app';
import 'firebase/firestore';
const firestore = firebase.firestore();
firestore.collection('users').doc(
    '0fKJFhfXxaDMrpNWaC0T').collection('cartitems').doc(
    '3QdjsSCLVAYHLBfbMWd4');
firestore.doc('/users/fKJFhfXxaDMrpNWaC0T/cartitems/3QdjsSCLVAYHLBfbMWd4');
firestore.collection('/users/fKJFhfXxaDMrpNWaC0T/cartitems');
    