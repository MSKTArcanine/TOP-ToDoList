import { PROJECTSARRAY } from ".";
import { activeProject } from "./activeProject";
import save from "./save";
import load from "./load";
import loadToDisplay from "./loadToDisplay";

export default function () {
  PROJECTSARRAY.splice(activeProject.active, 1);
  save();
  location.reload();
}
