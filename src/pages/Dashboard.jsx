import React from "react";
import EmployeeList from "../components/EmployeeList";
import TaskList from "../components/TaskList";
import Modal from "../components/Modal";

export default function Dashboard(){
  const [selEmp, setSelEmp] = React.useState(null);
  const [selTask, setSelTask] = React.useState(null);

  return (
    <div className="grid">
      <div>
        <EmployeeList onSelect={e=>setSelEmp(e)} />
      </div>
      <aside>
        <TaskList onSelectTask={t=>setSelTask(t)} />
      </aside>

      <Modal open={!!selEmp} onClose={()=>setSelEmp(null)} title="Employee">
        {selEmp && (
          <div>
            <div style={{fontWeight:600}}>{selEmp.name}</div>
            <div className="small">{selEmp.role} • {selEmp.department}</div>
            <div style={{marginTop:10}}><strong>Email:</strong> {selEmp.email}</div>
          </div>
        )}
      </Modal>

      <Modal open={!!selTask} onClose={()=>setSelTask(null)} title="Task">
        {selTask && (
          <div>
            <div style={{fontWeight:600}}>{selTask.title}</div>
            <div className="small">{selTask.description}</div>
            <div style={{marginTop:10}}><strong>Status:</strong> {selTask.status}</div>
            <div><strong>Due:</strong> {selTask.due_date}</div>
          </div>
        )}
      </Modal>
    </div>
  );
}
