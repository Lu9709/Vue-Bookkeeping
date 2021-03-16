import tagStore from '@/store/tagStore';
import recordStore from '@/store/recordStore';

const store = {
  ...recordStore,
  ...tagStore
};
export default store