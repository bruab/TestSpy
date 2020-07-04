import checkOptimizelyClassic from './app/optimizely/classic'
import checkOptimizelyX from './app/optimizely/optimizelyX'
import checkAdobeTestAndTarget from './app/adobe/target'
import checkGoogleOptimize from './app/googleOptimize/optimize'
import {tesSpyObj,cookieName} from './app/services/constant';
import { updateDom, evaluateAccordian } from '../js/popup/popup';
import {
    log
} from './app/services/helper'

/**
 * ***************
 * Begin execution
 * ***************
 */
// Store messages and utility functions in a global object

if(document.querySelector('.bm-popup.do_no_popunder').style.display == 'block'){
    document.querySelector('.bm-popup.do_no_popunder').style.display = 'none';
}else if(document.querySelector('.bm-popup.do_no_popunder').style.display == 'none'){
    document.querySelector('.bm-popup.do_no_popunder').style.display = 'block';

    if (!document.querySelector(".bm-popup").classList.contains("bm-slidein")){
        document.querySelector(".bm-popup").classList.add("bm-slidein");
      }
}

// restrict script injection if data is already there
if(!document.querySelector('.box-item')){
    window.TestSpy = tesSpyObj;

    logGreeting();
    checkOptimizelyClassic();
    checkOptimizelyX();
    checkGoogleOptimize();


    // after registering it in chrome  replace it with given by chrome
    // https://developer.chrome.com/extensions/messaging
    updateDom(window.TestSpy);

    function logGreeting() {
        log('TestSpy');
        log('--------------------');
    }
}
