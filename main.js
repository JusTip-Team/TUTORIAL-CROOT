import {qrController,deleteCookie,appendGoogleSignin} from "https://cdn.jsdelivr.net/gh/crootjs/lib@0.0.3/auth.js";
import { wauthparam } from "https://cdn.jsdelivr.net/gh/crootjs/lib@0.0.3/config.js";
   
wauthparam.auth_ws="d3NzOi8vYXBpLndhLm15LmlkL3dzL3doYXRzYXV0aC9wdWJsaWM=";
wauthparam.keyword="aHR0cHM6Ly93YS5tZS82MjgzMTMxODk1MDAwP3RleHQ9d2g0dDVhdXRoMA==";
wauthparam.tokencookiehourslifetime=18;
wauthparam.redirect ="/auth"

deleteCookie(wauthparam.tokencookiename);
qrController(wauthparam);
   
const url="https://asia-southeast2-awangga.cloudfunctions.net/bukupedia/auth/users";
const client_id="239713755402-4hr2cva377m43rsqs2dk0c7f7cktfeph.apps.googleusercontent.com";

appendGoogleSignin(client_id,url);
