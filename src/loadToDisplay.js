import { PROJECTSARRAY, STACKARRAY } from ".";
import removeChecklist from "./removeChecklist";
const titleDisplay = document.querySelector(".titleValue");
const descDisplay = document.querySelector(".descValue");
const dueDateDisplay = document.querySelector(".dueDateValue");
const priorityDisplay = document.querySelector(".priorityValue");
const notesDisplay = document.querySelector("footer p");
const checkListDisplay = document.querySelector("form");

export default function () {
  titleDisplay.textContent = PROJECTSARRAY[0].getTitle() || "Default";
  descDisplay.textContent = PROJECTSARRAY[0].getDesc() || "Default";
  dueDateDisplay.textContent = PROJECTSARRAY[0].getDueDate() || "01-01-1970";
  priorityDisplay.textContent = PROJECTSARRAY[0].getPriority() || "Normal";
  notesDisplay.textContent = PROJECTSARRAY[0].getNotes() || "Aucune";

  checkListDisplay.innerHTML = "";
  if (PROJECTSARRAY[0].getCheckLists().length) {
    PROJECTSARRAY[0].getCheckLists().forEach((e) => {
      const label = document.createElement("label");
      const inputCheckList = document.createElement("input");
      const buttonRemove = document.createElement("button");
      const labelSpan = document.createElement("span");

      label.setAttribute("for", e.getId());
      inputCheckList.setAttribute("type", "checkbox");
      inputCheckList.setAttribute("id", e.getId());
      buttonRemove.classList.add("deleteTaskButton");
      buttonRemove.addEventListener("click", (e) => removeChecklist(e));
      buttonRemove.textContent = "Remove";
      labelSpan.textContent = e.getContent();

      checkListDisplay.appendChild(label);
      label.appendChild(inputCheckList);
      label.appendChild(labelSpan);
      label.appendChild(buttonRemove);
    });
  }
}
