import { PROJECTSARRAY } from ".";
import { activeProject } from "./activeProject";
export default function () {
  PROJECTSARRAY[activeProject.active].setTitle(prompt("title : "));
  console.log(PROJECTSARRAY);
}
