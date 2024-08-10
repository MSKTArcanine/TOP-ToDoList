import Checklist from "./checklistClass";
import { PROJECTSARRAY } from ".";
import StackArray from "./ChecklistStack";
export default class Project {
  constructor(title, desc, dueDate, priority, notes, id = "") {
    this.id = id || PROJECTSARRAY.length;
    this.title = title || "";
    this.desc = desc || "";
    this.dueDate = dueDate || "";
    this.priority = priority || "";
    this.notes = notes || "";
    this.checklists = [];
    this.stackArray = new StackArray();
  }

  getStackArray = () => this.stackArray;
  getTitle = () => this.title;
  getDesc = () => this.desc;
  getDueDate = () => this.dueDate;
  getPriority = () => this.priority;
  getNotes = () => this.notes;
  getCheckLists = () => this.checklists;
  getId = () => this.id;

  setTitle = (value) => (this.title = value);
  setDesc = (value) => (this.desc = value);
  setDueDate = (value) => (this.dueDate = value);
  setPriority = (value) => (this.priority = value);
  setNotes = (value) => (this.notes = value);
  setChecklists = (value) => (this.checklists = value);
  removeCheckListFromArray = (index) => {
    console.log("Appelé avec index : ", index);
    this.checklists.splice(index, 1);
  };
  setId = (value) => (this.id = value);

  addCheckList = (value) => {
    if (value || 0) {
      console.log(value, "value de la addCheckList");
      const checkListItem = new Checklist();
      checkListItem.setContent(value); // Ici c'est la bonne value de CONTENT qui est convertie en ID.
      console.log(checkListItem.getContent(), "value de la content");
      console.log(checkListItem.getId(), "value de ID");
      this.checklists.push(checkListItem); // Ici on push l'OBJET Checklist. avec bonne ID et bon content
      this.stackArray.addToStack(checkListItem.getId()); // Donne l'ID qui est bonne a la stackarray
      console.log(this.stackArray);
    }
  };
}
