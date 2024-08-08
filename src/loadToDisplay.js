import { PROJECTSARRAY } from ".";
const titleDisplay = document.querySelector(".titleValue");
export default function () {
  titleDisplay.textContent = PROJECTSARRAY[0].getTitle();
}
