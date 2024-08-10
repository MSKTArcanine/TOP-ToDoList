import "./style.css";
import title from "./title";
import Project from "./projectClass";
import dueDate from "./dueDate";
import loadToDisplay from "./loadToDisplay";
import desc from "./desc";
import priority from "./priority";
import notes from "./notes";
import checklists from "./checklists";
import StackArray from "./ChecklistStack";
import projectCardCreator from "./projectCardCreator";
import save from "./save";
/*
La logique : 
On fait une classe pour chaque projects obj.
On balance chaque method en tant qu'instance method, osef de la static (moins chiant avec this)
On JSON stringify pour save
On JSON parse puis on rebalance les trucs dans la classe pour ravoir les methods
voila.

DOM : 
On fera un object par défaut si on a rien dans le localStorage.
=> Deja ouvert si possible.
=> On check ça avec onLoad si possible.

Ensuite on a juste a display en fonction du project ouvert.
=> Faire une variable "ACTIVE PROJECT" pour etre sur de bien prendre le bon project dans l'array d'objets.
=> Bien faire gaffe a set un MAX a 12.

On fait les modifs 'temps réel' avec la form validation.
=> Pas oublier de faire un pti pop up tout con.

Ensuite onSave => On stringify le bordel.
onSaveAndQuit => On stringify et on efface le bordel au milieu.
onQuitNoSave => On efface simplement.
onDelete => On delete directement depuis le localStorage l'index de l'array
               => A voir si on peut MAP les arrays pour que la value de "index" soit automatique.
               => Sinon osef, on set la taille à 12 et on fait des trous dans l'array, tfasson c'est pas si grave.
Bref voila. Pas trop compliqué en somme. LOL.
*/
export const PROJECTSARRAY = new Array();
export const STACKARRAY = new StackArray();
export const PROJECTSDIV = document.querySelector("#projectsDiv");
export const PLUSBUTTON = document.querySelector("#projectButtonDiv");
const TITLEBUTTON = document.querySelector(".buttonTitle");
const DESCRIPTIONBUTTON = document.querySelector(".buttonDesc");
const projectDefault = new Project();
const DUEDATEBUTTON = document.querySelector(".buttonDueDate");
const PRIORITYBUTTON = document.querySelector(".buttonPriority");
const NOTESBUTTON = document.querySelector(".buttonNotes");
const CHECKLISTSBUTTON = document.querySelector(".buttonChecklists");
const form = document.querySelector("form");
const SAVEBUTTON = document.querySelector(".saveButton");

PROJECTSARRAY[0] = projectDefault;
form.addEventListener("submit", (e) => e.preventDefault());
TITLEBUTTON.addEventListener("click", function () {
  title(), loadToDisplay();
});
DESCRIPTIONBUTTON.addEventListener("click", function () {
  desc(), loadToDisplay();
});
DUEDATEBUTTON.addEventListener("click", function () {
  dueDate(), loadToDisplay();
});
PRIORITYBUTTON.addEventListener("click", function () {
  priority(), loadToDisplay();
});
NOTESBUTTON.addEventListener("click", function () {
  notes(), loadToDisplay();
});
CHECKLISTSBUTTON.addEventListener("click", function () {
  checklists(), loadToDisplay();
});
PLUSBUTTON.addEventListener("click", function () {
  projectCardCreator(), loadToDisplay();
});
SAVEBUTTON.addEventListener("click", save);
loadToDisplay();
