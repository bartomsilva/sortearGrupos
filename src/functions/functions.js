import { db } from '../firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export const fetchData = async (setNames) => {
  const peopleCollectionRef = collection(db, 'peoples');
  const data = await getDocs(peopleCollectionRef);
  const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  setNames(dataArray);
};

export const addDataToFirestore = (newPeople) => {
  const data = {
    name: newPeople
  };
  // Adiciona os dados ao Firestore
  addDoc(collection(db, 'peoples'), data)
    .then((docRef) => {
      console.log('Documento adicionado com ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Erro ao adicionar documento: ', error);
    });
};

export const updateName = async (itemId, newName) => {
  try {
    const itemDocRef = doc(db, 'peoples', itemId);
    await updateDoc(itemDocRef, {
      name: newName
    });
    console.log('Nome atualizado com sucesso!');
  } catch (error) {
    console.error('Erro ao atualizar nome:', error);
  }
};

export const deleteItem = async (itemId) => {
  try {
    const itemDocRef = doc(db, 'peoples', itemId);  // 'peoples' é o nome da coleção
    await deleteDoc(itemDocRef);
    console.log('Item deletado com sucesso!');
  } catch (error) {
    console.error('Erro ao deletar item:', error);
  }
};