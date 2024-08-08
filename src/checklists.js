import { PROJECTSARRAY } from ".";
export default function () {
  PROJECTSARRAY[0].setTitle(prompt("title : "));
  console.log(PROJECTSARRAY);
}
