import {BaseService} from './BaseService.js';

// file liên kết với back end
export class TaskService extends BaseService{
    constructor() {
      super();
    };
    
    // Định nghĩa phương thức getAllTask
    getAllTask = () => {
      return this.get("http://svcy.myclass.vn/api/ToDoList/GetAllTask");
    };

    // Định nghĩ hàm đưa dữ liệu về backend
    addTask = (task) => {
        return this.post("http://svcy.myclass.vn/api/ToDoList/AddTask",task);
    }

    // Định nghĩa hàm xóa dữ liệu từ backend
    deleteTask = (taskName) => {
      return this.delete(`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`);
    }

    // Định nghĩa hàm done dữ liệu từ backend
    doneTask = (taskName) => {
      return this.put(`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,taskName);
    }

    // Định nghĩa hàm reject dữ liệu từ backend
    rejectTask = (taskName) => {
      return this.put(`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,taskName);
    }
  }