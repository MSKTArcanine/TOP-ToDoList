import { PROJECTSARRAY } from ".";
import { activeProject } from "./activeProject";
import loadToDisplay from "./loadToDisplay";
export default function (e) {
  PROJECTSARRAY[activeProject.active]
    .getStackArray()
    .removeFromStack(e.target.parentNode.getAttribute("for"));
  loadToDisplay();
  console.log("done");
}
