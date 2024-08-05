export const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

export const tasks = [
  {
    id: "1",
    userId: "410544b2-4001-4271-9855-fec4b6a6442a",
    title: "Task 1",
    description: "Description 1",
    dueDate: new Date("2022-12-31"),
    categoryId: "1",
    statusId: "1",
  },
  {
    id: "2",
    userId: "410544b2-4001-4271-9855-fec4b6a6442a",
    title: "Task 2",
    description: "Description 2",
    dueDate: new Date("2023-01-01"),
    categoryId: "2",
    statusId: "2",
  },
  {
    id: "3",
    userId: "410544b2-4001-4271-9855-fec4b6a6442a",
    title: "Task 3",
    description: "Description 3",
    dueDate: new Date("2023-01-02"),
    categoryId: "3",
    statusId: "3",
  },
];

export const categories = [
  {
    id: "1",
    name: "Category 1",
  },
  {
    id: "2",
    name: "Category 2",
  },
  {
    id: "3",
    name: "Category 3",
  },
];

export const statuses = [
  {
    id: "1",
    name: "To Do",
  },
  {
    id: "2",
    name: "Urgent",
  },
  {
    id: "3",
    name: "Done",
  },
];
