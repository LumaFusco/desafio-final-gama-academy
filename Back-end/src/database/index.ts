import Connection from "./Connection";

const mongoDB = new Connection("mongodb://127.0.0.1:27017/Teal_Book");

export { mongoDB };