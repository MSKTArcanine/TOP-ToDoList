import { PROJECTSARRAY } from ".";
import { activeProject } from "./activeProject";
export default function () {
  PROJECTSARRAY[activeProject.active].setDesc(prompt("Description : "));
  console.log(PROJECTSARRAY);
}
