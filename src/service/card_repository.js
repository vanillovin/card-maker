import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';
// https://firebase.google.com/docs/database/web/read-and-write

class CardRepository {
  constructor(app) {
    this.db = getDatabase(app);
  }

  syncCards(userId, onUpdate) {
    const query = ref(this.db, `${userId}/cards`);
    // on으로 지속적으로 데이터베이스가 업데이트될 때마다 콜백 함수가 호출됨
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    // 계속 sync되는 것을 끌 수 있는 함수를 리턴
    return () => off(query);
  }

  saveCard(userId, card) {
    // 사용자별로 데이터를 관리
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    // const cardRef = ref(this.db, `${userId}/cards/${card.id}`);
    // remove(cardRef);
    remove(ref(this.db, `${userId}/cards/${card.id}`));
  }
}

export default CardRepository;
