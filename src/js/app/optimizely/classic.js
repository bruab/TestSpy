import {
    optimizelyClassicIsPresent,
    getOptimizelyClassicInfo,
    log
} from '../services/helper'

export default function() {

    if (optimizelyClassicIsPresent()) {

        window.TestSpy.optimizelyClassic['present'] = true;
        log('Optimizely Classic present:');
        getOptimizelyClassicInfo();
    } else {
        window.TestSpy.optimizelyClassic['present'] = false;
        log('Optimizely Classic not present');
    }

}