const JOEL_LIST = [
  {id: 1, label: "Can you make a build in one step ?"},
  {id: 2, label: "Do you make daily builds ?"},
  {id: 3, label: "Do you have a bug database ?"},
  {id: 4, label: "Do you fix bugs before writing new code ?"},
  {id: 5, label: "Do you have an up-to-date schedule ?"},
  {id: 6, label: "Do you have a spec ?"},
  {id: 7, label: "Do programmers have quiet working conditions?"},
  {id: 8, label: "Do you use the best tools money can buy?"},
  {id: 9, label: "Do you have testers?"},
  {id: 10, label: "Do new candidates write code during their interview?"},
  {id: 11, label: "Do you do hallway usability testing?"}
];

export default function QuestionLoader() {
  this.load = function (callback) {
    setTimeout(() => callback(JOEL_LIST),1000);
  }
}