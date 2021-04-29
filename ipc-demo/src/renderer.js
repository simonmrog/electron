const electron = require("electron");

const ipc = electron.ipcRenderer;

document.getElementById("start-button").addEventListener("click", (_) => {
  ipc.send("countdown-start");
});

ipc.on("countdown", (evt, count) => {
  document.getElementById("count").innerHTML = count;
});
