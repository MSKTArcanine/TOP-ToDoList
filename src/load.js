import loadToDisplay from "./loadToDisplay";
import Project from "./projectClass";
import { PROJECTSARRAY } from ".";
export default function () {
  const loadedProjectArray = JSON.parse(localStorage.projectsArray);
  loadedProjectArray.forEach((e) => {
    PROJECTSARRAY.push(
      new Project(e.title, e.desc, e.dueDate, e.priority, e.notes, e.id)
    );
    console.log(e.checklists);
    e.checklists.forEach((c) => PROJECTSARRAY[e.id].addCheckList(c.content));
  });
  loadToDisplay();
}
