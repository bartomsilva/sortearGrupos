import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import Swal from 'sweetalert2'

export const fetchData = async (setNames) => {
  const data = await getDocs(collection(db, "peoples"));
  const dataArray = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  setNames(dataArray);
};

export const addDataToFirestore = async (newPeople) => {
  const data = {
    name: newPeople,
  };
  // Adiciona os dados ao Firestore
  await addDoc(collection(db, "peoples"), data)
    .then((docRef) => {
      modal("Documento adicionado com ID:",docRef.id);
    })
    .catch((error) => {
      modal("Erro ao adicionar documento:",error);
    });
};

export const updateName = async (itemId, newName) => {
  try {
    const itemDocRef = doc(db, "peoples", itemId);
    await updateDoc(itemDocRef, {
      name: newName,
    });
    modal("Nome atualizado com sucesso!");
  } catch (error) {
    modal("Erro ao atualizar nome:",error);
  }
};

export const deleteItem = async (itemId) => {
  try {
    const itemDocRef = doc(db, "peoples", itemId); // 'peoples' é o nome da coleção
    await deleteDoc(itemDocRef);
    modal("Item deletado com sucesso!");
  } catch (error) {
    modal("Erro ao deletar item:",error);
  }
};

export const getItemById = async (collection, id) => {
  try {
    const docRef = doc(db, collection, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // const data = docSnap.data(); // só os dados
      const data = {
        id: docSnap.id,
        ...docSnap.data(),
      };
      modal("Dados do documento:",data);
      return data;
    } else {
      modal("Nenhum documento encontrado com o ID:",id);
      return null;
    }
  } catch (error) {
    modal("Erro ao ler o documento:",error);
    throw new Error("Erro ao ler o documento");
  }
};

export const findByName = async (collection, word) => {
  try {
    const querySnapshot = await getDocs(collection(db, collection));
   
    const results = querySnapshot.docs
      .filter((doc) => doc.data().name.includes(word))
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

    modal("Resultados da pesquisa: ",results);
    return results;
  } catch (error) {
    modal("Erro ao pesquisar:",error);
    throw new Error("Erro ao pesquisar");
  }
};

export const modal=(m1,m2)=> {
  Swal.fire({
    title: m1,
    text: typeof m2 ==="object" ? JSON.stringify(m2) : m2,
    icon: 'info',
    confirmButtonText: 'Ok'
  })
}