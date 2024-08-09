import { PROJECTSARRAY, STACKARRAY } from ".";
import { activeProject } from "./activeProject";
import removeChecklist from "./removeChecklist";
import onclickActive from "./onclickActive";
const titleDisplay = document.querySelector(".titleValue");
const descDisplay = document.querySelector(".descValue");
const dueDateDisplay = document.querySelector(".dueDateValue");
const priorityDisplay = document.querySelector(".priorityValue");
const notesDisplay = document.querySelector("footer p");
const checkListDisplay = document.querySelector("form");

export default function () {
  titleDisplay.textContent =
    PROJECTSARRAY[activeProject.active].getTitle() || "Default";
  descDisplay.textContent =
    PROJECTSARRAY[activeProject.active].getDesc() || "Default";
  dueDateDisplay.textContent =
    PROJECTSARRAY[activeProject.active].getDueDate() || "01-01-1970";
  priorityDisplay.textContent =
    PROJECTSARRAY[activeProject.active].getPriority() || "Normal";
  notesDisplay.textContent =
    PROJECTSARRAY[activeProject.active].getNotes() || "Aucune";

  checkListDisplay.innerHTML = "";
  if (PROJECTSARRAY[activeProject.active].getCheckLists().length) {
    PROJECTSARRAY[activeProject.active].getCheckLists().forEach((e) => {
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
  if (PROJECTSARRAY.length) {
    const flexDiv = document.querySelector("#projectsDiv");
    flexDiv.innerHTML = "";
    PROJECTSARRAY.forEach((o) => {
      const projectCard = document.createElement("div");
      projectCard.classList.add("projectCard");
      projectCard.id = o.getId();
      projectCard.textContent = o.getId() + 1;
      projectCard.addEventListener("click", function (e) {
        console.log(activeProject.active, "old");
        activeProject.active = +e.target.id;
        console.log(activeProject.active, "new");
        onclickActive();
      });
      flexDiv.appendChild(projectCard);
    });
  }
}
