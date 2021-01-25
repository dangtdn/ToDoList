import { Task } from '../models/Task.js';
import { TaskService } from '../services/TaskService.js';

// Khai báo đối tượng service
const taskSV = new TaskService();
const getAllTask = async () => {
    try {
        // B2:
        //Dùng service để gọi api từ backend lấy dữ liệu về
        const result = await taskSV.getAllTask();
        // console.log('result', result);

        // B3: từ dữ liệu lấy về tách ra 2 mảng => render dữ liệu lên giao diện
        // Đang làm
        let taskToDo = result.data.filter(task => task.status === false);
        // console.log('task chưa làm', taskToDo);
        renderTaskToDo(taskToDo);

        // Đã làm
        let taskCompleted = result.data.filter(task => task.status === true);
        // console.log('task đã làm', taskCompleted);
        renderTaskCompleted(taskCompleted);
    } catch (err) {
        console.log(err);
    }

}

const renderTaskToDo = (taskToDo) => {
    let contentTaskToDo = taskToDo.reduce((content,item,index) => {
        content += `<li>
                        <span>
                        ${item.taskName}
                        </span>
                        <span>
                            <span onclick="delTask('${item.taskName}')" class="buttons" style="cursor: pointer;"><i class="fa fa-trash"></i></span>
                            <span onclick="doneTask('${item.taskName}')" class="buttons" style="cursor: pointer;"><i class="fa fa-check"></i></span>
                        </span>
                    </li>`;
        return content;
    },'');

    document.getElementById("todo").innerHTML = contentTaskToDo;        
}
const renderTaskCompleted = (taskCompleted) => {
    let contentTaskCompleted = taskCompleted.reduce((content,item,index) => {
        content += `<li>
                        <span>
                        ${item.taskName}
                        </span>
                        <span>
                            <span class="buttons" onclick="delTask('${item.taskName}')" style="cursor: pointer;"><i class="fa fa-trash"></i></span>
                            <span class="buttons" onclick="rejectTask('${item.taskName}')" style="cursor: pointer;"><i class="fa fa-check"></i></span>
                        </span>
                    </li>`;
        return content;
    },'');

    document.getElementById("completed").innerHTML = contentTaskCompleted;        
}

// B1: Định nghĩa và gọi hàm
getAllTask();

// ======================= Nghiệp vụ thêm task ============================
// B1: Định nghĩa sự kiện click cho button#addItem
document.getElementById("addItem").onclick = async (event) => {
    // event.preventDefault(); // Chặn sự kiện hiện tại của thẻ submit hay thẻ href thẻ a
    // event.target <= đại diện cho thẻ button đang được onclick

    // Lấy thông tin người dùng nhập từ giao diện
    let taskName = document.getElementById('newTask').value;
    
    // Tạo ra object backend yêu cầu
    const taskModel = new Task();
    taskModel.taskName = taskName;
    // Gọi api đưa dữ liệu về serve
    try{   
        let result = await taskSV.addTask(taskModel);
        console.log('Kết quả thêm task: ',result.data);
        // Sau khi thêm thành công gọi aip getAllTask từ hàm có sẵn
        getAllTask();
    }catch(err){
        console.log(err);
    }
}

// ===================== Nghiệp vụ xóa dữ liệu =========================
window.delTask = async (taskName) => {
    let cfm = confirm("Are you sure?");

    if(cfm){
        try{   
            let result = await taskSV.deleteTask(taskName);
            console.log('Kết quả thêm task: ',result.data);
            // Sau khi thêm thành c ông gọi aip getAllTask từ hàm có sẵn
            getAllTask();
        }catch(err){
            console.log(err);
        }
    }
}

// ======================== Nghiệp vụ done dữ liệu ====================================
window.doneTask = async (taskName) => {
    // alert(taskName);
    try{
        let resutl = await taskSV.doneTask(taskName);
        console.log(resutl.data);
        getAllTask();
    }catch(err){
        console.log(err);
    }
}

// ======================== Nghiệp vụ reject dữ liệu ====================================
window.rejectTask = async (taskName) => {
    // alert(taskName);
    try{
        let resutl = await taskSV.rejectTask(taskName);
        console.log(resutl.data);
        getAllTask();
    }catch(err){
        console.log(err);
    }
}