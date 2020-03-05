import {
    googleOptimizeIsPresent,
    getGoogleOptimizeExperimentId,
    getGoogleOptimizeVariationInfo,
    log
} from '../services/helper'

export default function() {

    if (googleOptimizeIsPresent()) {
        window.TestSpy.googleOptmize['present'] = true;
        log('googleOptmize present:');
        const exId = getGoogleOptimizeExperimentId()
        log('ExpiremtID:',exId);
        log('variationId:',getGoogleOptimizeVariationInfo(exId));
    } else {
        window.TestSpy.googleOptmize['present'] = false;
        log('oops... googleOptmize not present');
    }

}