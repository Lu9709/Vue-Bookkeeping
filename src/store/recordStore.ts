// record store
import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';
const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  createRecords(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createAt = record2.createAt||new Date().toISOString();
    this.recordList && this.recordList.push(record2);
    this.saveRecords();
  },
};
recordStore.fetchRecords();
export default recordStore;
