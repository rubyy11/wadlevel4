const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "finish homework",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    add({
      title: "practice ",
      completed: false,
      dueDate: new Date(
        new Date().setDate(new Date().getDate() - 3)
      ).toLocaleDateString("en-CA"),
    });
    add({
      title: "running",
      completed: false,
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 3)
      ).toLocaleDateString("en-CA"),
    });
    add({
      title: "sleeping",
      completed: false,
      dueDate: new Date(
        new Date().setDate(new Date().getDate() + 11)
      ).toLocaleDateString("en-CA"),
    });
  });
  test("should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });
  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Should check retrieval of overdue items", () => {
    let x = overdue().length;
    let i = 0;
    todaysDate = new Date().toLocaleDateString("en-CA");
    while (i < x) {
      expect(overdue()[i].dueDate < todaysDate).toBe(true);
      i++;
    }
  });
  test("Should checks retrieval of due today items", () => {
    let x = dueToday().length;
    //happy coding
    let i = 0;
    todaysDate = new Date().toLocaleDateString("en-CA");
    while (i < x) {
      expect(dueToday()[i].dueDate === todaysDate).toBe(true);
      i++;
    }
  });
  test("Should checks retrieval of due later items", () => {
    let x = dueLater().length;
    let i = 0;
    todaysDate = new Date().toLocaleDateString("en-CA");
    while (i < x) {
      expect(dueLater()[i].dueDate > todaysDate).toBe(true);
      i++;
    }
  });
});
