import { PROJECTSARRAY } from ".";
import Project from "./projectClass";

export default function () {
  const id = PROJECTSARRAY.length;
  PROJECTSARRAY.push(new Project());
  PROJECTSARRAY[id].setId(id);
  console.log(PROJECTSARRAY);
}
