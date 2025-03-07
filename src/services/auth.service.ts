import { auth, db } from '../config/firebase';
import { 
  signInAnonymously as firebaseSignInAnonymously,
  createUserWithEmailAndPassword,
  updateProfile,
  User
} from 'firebase/auth';
import { 
  collection, 
  query, 
  where, 
  getDocs,
  writeBatch,
  doc,
  serverTimestamp
} from 'firebase/firestore';

export const authService = {
  async signInAnonymously() {
    try {
      const userCredential = await firebaseSignInAnonymously(auth);
      return userCredential.user;
    } catch (error) {
      console.error('Error signing in anonymously:', error);
      throw error;
    }
  },

  async transferAnonymousData(anonymousUid: string, newUid: string, userName: string) {
    const batch = writeBatch(db);
    const collectionsToTransfer = [
      'recipeGenerations',
      'macroGenerations',
      'mealPlanGenerations'
    ];

    try {
      for (const collectionName of collectionsToTransfer) {
        const collectionRef = collection(db, collectionName);
        const q = query(collectionRef, where('userId', '==', anonymousUid));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((document) => {
          const docRef = doc(db, collectionName, document.id);
          batch.update(docRef, { 
            userId: newUid,
            generatedBy: userName 
          });
        });
      }

      await batch.commit();
      console.log('Successfully transferred data for all collections');
    } catch (error) {
      console.error('Error transferring anonymous data:', error);
      throw error;
    }
  },

  async registerWithEmail(email: string, password: string, name: string) {
    if (!name.trim()) {
      throw new Error('Name is required');
    }

    try {
      const currentUser = auth.currentUser;
      const isAnonymous = currentUser?.isAnonymous;
      const anonymousUid = currentUser?.uid;

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });

      if (isAnonymous && anonymousUid) {
        await this.transferAnonymousData(anonymousUid, userCredential.user.uid, name);
      }

      return userCredential.user;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }
};