import { PROJECTSARRAY } from ".";
import { activeProject } from "./activeProject";
export default class StackArray {
  constructor(savedArray = "") {
    this.stackArray = Array.from(savedArray);
  }
  addToStack = (id) => this.stackArray.push(id);
  searchId = (id) => this.stackArray.indexOf(id);
  removeFromStack = (id) => {
    const SearchedElementIndex = this.searchId(id);
    PROJECTSARRAY[activeProject.active].removeCheckListFromArray(
      SearchedElementIndex
    );
    this.stackArray.splice(SearchedElementIndex, 1);
  };
}
