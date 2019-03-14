<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
      </v-flex>
      <v-btn
          @click="testSerial"
          small
        >serial
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
  import { DataSource } from '../datasource'

  export default {
    data: () => ({
     
    }),
    methods: {
      testSerial () {
        var name = process.argv[2];
        console.log("Hello, and welcome to node," + name);
        
        const serialport = require( "electron" ).remote.require( "serialport" );

        DataSource.listPorts();
        DataSource.getVersion("COM8").then( data => { console.log(data) } );
/*
        serialport.list(function(err, ports) {
          ports.forEach(function(port) {
            console.log(port.comName);
          });
        });

        var myPort = new serialport('COM8', {
          baudRate: 921600 
        })

        myPort.on('data', function (data) {
          console.log('Data:', data)
          myPort.close()
        })

        myPort.write('VV');

        myPort.drain(error => {
          console.log('Drain callback returned', error)
          // Now the data has "left the pipe" (tcdrain[1]/FlushFileBuffers[2] finished blocking).
          // [1] http://linux.die.net/man/3/tcdrain
          // [2] http://msdn.microsoft.com/en-us/library/windows/desktop/aa364439(v=vs.85).aportx
        })
        */
      }
    }
  }
</script>

<style>

</style>
