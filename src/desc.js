import { PROJECTSARRAY } from ".";
export default function () {
  PROJECTSARRAY[0].setDesc(prompt("Description : "));
  console.log(PROJECTSARRAY);
}
