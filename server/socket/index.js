const generateID = require("../middlewares/generateID");
const defaultName = "user";

const activeUsers = new Set();

module.exports = (io) => {
  io.on("connection", (socket) => {
    const id = generateID([...activeUsers]);
    socket.data.fullid = `${defaultName}#${id}`;
    activeUsers.add(socket.data.fullid);

    console.log(`${socket.data.fullid} connected`);
    console.log(`Active users: ${[...activeUsers]}`);

    socket.emit("user-asign-id", { userName: defaultName, id });

    socket.on("user-change-name", ({ userName, id }) => {
      console.log(userName);
      activeUsers.delete(socket.data.fullid);
      socket.data.fullid = `${userName}#${id}`;
      activeUsers.add(socket.data.fullid);
    });

    socket.on("disconnect", () => {
      activeUsers.delete(socket.data.fullid);
      console.log(`${socket.data.fullid} disconnected`);
    });
  });
};
