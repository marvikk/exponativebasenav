import { observable, action } from 'mobx';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

class TaskListStore {

  @observable list = [
  ]

  @action finishItem (index) {
    const copiedList = this.list.slice()
    const isFinished = copiedList[index].isFinished
    if (isFinished) return

    copiedList[index].isFinished = true
    this.list = copiedList // update store by re-assigning
  }

  @action searchForUser = async () => {
    axios.get('/chicken').then(res=>{
      console.log(res);
    })
  };

  @action deleteItem (index) {
    this.list = this.list.filter((item, i) => i != index)
  }
}

const store = new TaskListStore()
export default store