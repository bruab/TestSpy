import {
    optimizelyXIsPresent,
    log,
    getActiveExperiments,
    getActiveCampaigns,
    getActiveAudiences,
    getActivePages
} from '../services/helper'

export default function() {

    if (optimizelyXIsPresent()) {
        window.TestSpy.optimizelyX['present'] = true;
        log('Optimizely X present:');

        getActiveExperiments();
        getActiveCampaigns();
        getActiveAudiences();
        getActivePages();


    } else {
        window.TestSpy.optimizelyX['present'] = false;
        log('Optimizely X not present');
    }

}