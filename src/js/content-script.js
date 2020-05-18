import checkOptimizelyClassic from './app/optimizely/classic'
import checkOptimizelyX from './app/optimizely/optimizelyX'
import checkAdobeTestAndTarget from './app/adobe/target'
import checkGoogleOptimize from './app/googleOptimize/optimize'
import {tesSpyObj,cookieName} from './app/services/constant';
import {
    log
} from './app/services/helper'

/**
 * ***************
 * Begin execution
 * ***************
 */
// Store messages and utility functions in a global object
window.TestSpy = tesSpyObj;

logGreeting();
checkOptimizelyClassic();
checkOptimizelyX();
checkAdobeTestAndTarget();
checkGoogleOptimize();


// after registering it in chrome  replace it with given by chrome
// https://developer.chrome.com/extensions/messaging

document.cookie = cookieName+"="+JSON.stringify(window.TestSpy);+'Secure;'

function logGreeting() {
    log('TestSpy');
    log('--------------------');
}