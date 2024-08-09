import Checklist from "./checklistClass";
export default class Project {
  constructor(title, desc, dueDate, priority, notes, checklists) {
    this.title = title || "";
    this.desc = desc || "";
    this.dueDate = dueDate || "";
    this.priority = priority || "";
    this.notes = notes || "";
    this.checklists = checklists || new Array();
  }

  getTitle = () => this.title;
  getDesc = () => this.desc;
  getDueDate = () => this.dueDate;
  getPriority = () => this.priority;
  getNotes = () => this.notes;
  getCheckLists = () => this.checklists;

  setTitle = (value) => (this.title = value);
  setDesc = (value) => (this.desc = value);
  setDueDate = (value) => (this.dueDate = value);
  setPriority = (value) => (this.priority = value);
  setNotes = (value) => (this.notes = value);
  setChecklists = (value) => (this.checklists = value);

  addCheckList = (value) => {
    const checkListItem = new Checklist();
    checkListItem.setContent(value);
    this.checklists.push(checkListItem);
  };
}
