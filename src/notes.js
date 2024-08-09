import { PROJECTSARRAY } from ".";
export default function () {
  PROJECTSARRAY[0].setNotes(prompt("Notes : "));
  console.log(PROJECTSARRAY);
}
