//tag store
import tagsListModel from '@/models/tagsListModel';
export  default {
  tagList: tagsListModel.fetch(),
  createTag: (name: string) => {
    const message = tagsListModel.create(name);
    if (message === 'duplicated') {
      alert('标签名重复了');
    } else if (message === "success") {
      window.alert('添加成功');
    }
  },
  findTag (id: string) {
    return tagsListModel.data.filter(t => t.id === id)[0];
  },
  removeTag: (id: string) => {
    return tagsListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagsListModel.update(id, name);
  }
}
