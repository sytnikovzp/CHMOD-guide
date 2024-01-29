'use strict';

let accessMode = Number(prompt('Enter access mode, please:'));

switch (accessMode) {
  case 0:
    console.log(
      `Entered access mode is ${accessMode} || 000 || --- || none none none`
    );
    break;
  case 1:
    console.log(
      `Entered access mode is ${accessMode} || 001 || --x || none none executable`
    );
    break;
  case 2:
    console.log(
      `Entered access mode is ${accessMode} || 010 || -w- || none write none`
    );
    break;
  case 3:
    console.log(
      `Entered access mode is ${accessMode} || 011 || -wx || none write executable`
    );
    break;
  case 4:
    console.log(
      `Entered access mode is ${accessMode} || 100 || r-- || read none none`
    );
    break;
  case 5:
    console.log(
      `Entered access mode is ${accessMode} || 101 || r-x || read none executable`
    );
    break;
  case 6:
    console.log(
      `Entered access mode is ${accessMode} || 110 || rw- || read write none`
    );
    break;
  case 7:
    console.log(
      `Entered access mode is ${accessMode} || 111 || rwx || read write executable`
    );
    break;
  default:
    console.log(
      'Entered incorrect data! Please, refresh this page and try again.'
    );
}
