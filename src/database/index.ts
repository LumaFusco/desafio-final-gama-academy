import Connection from "./Connection";

const mongoDB = new Connection("mongodb://localhost:27017/Teal_Book");

export { mongoDB };