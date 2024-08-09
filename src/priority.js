import { PROJECTSARRAY } from ".";
const priorityRegex = new RegExp("(Normal|Urgent)", "i");
export default function () {
  do {
    PROJECTSARRAY[0].setPriority(prompt("Priority : Normal / Urgent"));
    console.log(PROJECTSARRAY[0].getPriority());
    console.log(priorityRegex.test(PROJECTSARRAY[0].getPriority()));
  } while (!priorityRegex.test(PROJECTSARRAY[0].getPriority()));
  console.log(PROJECTSARRAY);
}
