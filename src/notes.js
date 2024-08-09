import { PROJECTSARRAY } from ".";
import { activeProject } from "./activeProject";
export default function () {
  PROJECTSARRAY[activeProject.active].setNotes(prompt("Notes : "));
  console.log(PROJECTSARRAY);
}
