import { STACKARRAY } from ".";
export default class Checklist {
  constructor() {
    this.content;
    this.id;
  }
  getContent = () => this.content;
  getId = () => this.id;

  setContent = (value) => {
    this.content = value;
    if (value.split(" ").length == 1) {
      this.id =
        "checkbox" +
        value.charAt(0).toUpperCase() +
        value.slice(1).toLowerCase();
      this;
      return;
    }
    let res = value.split(" ");
    res = res.map((e) => e.trim());
    res = res.map((e) => e.toLowerCase());
    res = res.map((e, i) => {
      if (i == 0) return e.charAt(0) + e.slice(1);
    });
    res.unshift("checkbox");
    res.join("");
    this.id = res;
  };
}
