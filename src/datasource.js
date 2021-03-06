//import SerialPort from "serialport";

const SerialPort = require("electron").remote.require("serialport");

export const DataSource = {
  getPorts() {
    return new Promise((resolve, reject) => {
      SerialPort.list(function(err, ports) {
        if (err) reject(err);
        resolve(ports);
      });
    });
  },
  listPorts() {
    this.getPorts().then(ports =>
      ports.forEach(port =>
        console.log(port.comName + " / " + port.manufacturer)
      )
    );
  },
  write(data, portname) {
    return new Promise((resolve, reject) => {
      var port = new SerialPort(portname, {
        baudRate: 921600
      });

      port.on("data", function(data) {
        console.log("Data:", data);
        resolve(data);
        port.close();
      });

      port.on("error", function(err) {
        console.log("Error: ", err.message);
        reject(err);
      });

      /*
      port.drain(error => {
        console.log("Drain callback returned", error);
        // Now the data has "left the pipe" (tcdrain[1]/FlushFileBuffers[2] finished blocking).
        // [1] http://linux.die.net/man/3/tcdrain
        // [2] http://msdn.microsoft.com/en-us/library/windows/desktop/aa364439(v=vs.85).aportx
        reject(error);
      });
      */
      port.write(data, function(err) {
        if (err) reject(err);
      });
    });
  },
  getVersion(portname) {
    return this.write("VV", portname);
  }
};
