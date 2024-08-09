import { PROJECTSARRAY } from ".";
import { activeProject } from "./activeProject";
const priorityRegex = new RegExp("(Normal|Urgent)", "i");
export default function () {
  do {
    PROJECTSARRAY[activeProject.active].setPriority(
      prompt("Priority : Normal / Urgent")
    );
    console.log(PROJECTSARRAY[activeProject.active].getPriority());
    console.log(
      priorityRegex.test(PROJECTSARRAY[activeProject.active].getPriority())
    );
  } while (
    !priorityRegex.test(PROJECTSARRAY[activeProject.active].getPriority())
  );
  console.log(PROJECTSARRAY);
}
