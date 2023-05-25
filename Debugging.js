https://drive.google.com/drive/folders/1JkO8gw7GwlAT25tDdqVbwVWv--8PLZ2j?usp=share_link
Watch the videos 7 till the end from this link





DEBUUGGING steps
-------------
click on run-debugger
take breakpoint
click on view-debug console

clear all ur terminal 







installation start now 
again start steps below


      now click on Run-addconfiguration
      (.vscode) folder apper -with (launch.json)

itshows like yhis in launch.json
      {
        // Use IntelliSense to learn about possible attributes.
        // Hover to view descriptions of existing attributes.
        // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "type": "pwa-node",
                "request": "launch",
                "name": "Launch Program",
                "skipFiles": [
                    "<node_internals>/**"
                ],
                "program": "${workspaceFolder}\\Writingandreadingfrom a file.js"
            }
        ]
    }



now u should add last 3 line  and add filename to this line "program": "${workspaceFolder}/server.js",

{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [

      {
          "type": "node",
          "request": "launch",
          "name": "Launch Program",
          "skipFiles": [
              "<node_internals>/**"
          ],
          "program": "${workspaceFolder}/server.js",
          "restart":true,
          "runtimeExecutable": "nodemon",
          "console": "integratedTerminal"
      }
  ]
}
type 

PS C:\Users\Dell\backend devlopement> npm install -g

or
PS C:\Users\Dell\backend devlopement> sudo npm install -g (this is for linux users)



clear all terminal 
PS C:\Users\Dell\backend devlopement> npm start(if did not (npm start) follow (nodemon installation) in github)

link: https://github.com/kirankiranbang/nodemoninstallation/commit/b9e5925828541000b55c497042538f8c68fca08c

open new terminal-click on (Debug Console)

now click on run-debugger

*take a breakpoint (click it shows like red point on left of code)
*now go to front end and pass any message and click on SubmitEvent
*now debugger is locked like (shows arrow mark for locked that line)
*now type any code in (DEBUG CONSOLE)
*eg:parsedBODY.split('=') this code made breakpoint and this locked
now enter
how it showing it shows
to QUIT shift+f5

//