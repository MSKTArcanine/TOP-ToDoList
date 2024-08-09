import { PROJECTSARRAY } from ".";
export default class StackArray {
  constructor(savedArray = "") {
    this.stackArray = Array.from(savedArray);
  }
  addToStack = (id) => this.stackArray.push(id);
  searchId = (id) => this.stackArray.indexOf(id);
  removeFromStack = (id) => {
    console.log(id, " ID quon lui donne");
    console.log(PROJECTSARRAY[0].getCheckLists()[0], " Array project 0");
    console.log(this.stackArray, " Array de la stack");
    const SearchedElementIndex = this.searchId(id);
    PROJECTSARRAY[0].removeCheckListFromArray(SearchedElementIndex);
    this.stackArray.splice(SearchedElementIndex, 1);
    console.log(this.stackArray, " Array de la stack");
    console.log(PROJECTSARRAY[0].getCheckLists(), " Array project 0");
  };
}
