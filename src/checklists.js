import { PROJECTSARRAY } from ".";
import { activeProject } from "./activeProject";
export default function () {
  PROJECTSARRAY[activeProject.active].addCheckList(prompt("title : "));
}
