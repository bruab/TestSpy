import {
    adobeTestAndTargetIsPresent,
    getAdobeTestAndTargetInfo,
    log
} from '../services/helper'

export default function() {

    if (adobeTestAndTargetIsPresent()) {
        window.TestSpy.adobeTestAndTarget['present'] = true;
        log('Adobe Test & Target present:');
        log(getAdobeTestAndTargetInfo());
    } else {
        window.TestSpy.adobeTestAndTarget['present'] = false;
        log('Adobe Test & Target not present');
    }

}