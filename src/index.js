import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactNativePlugin } from '@microsoft/applicationinsights-react-native';
var RNMPlugin = new ReactNativePlugin();
var appInsights = new ApplicationInsights({
    config: {
        instrumentationKey: '',
        extensions: [RNMPlugin]
    }
});

export function initAppInsights() {
    appInsights.loadAppInsights();
}

export function trackPageView(name) {
    appInsights.trackPageView({ name: name });
}

export function trackDeviceModel(
    deviceModel,
    deviceManufacturer,
    deviceBrand,
    deviceID,
    deviceSystemName,
    deviceSystemVersion,
    deviceBundleID,
    deviceBuildNumber
) {
    appInsights.trackEvent({ name: "Device Model", properties: { 
        deviceModel: deviceModel,
        deviceManufacturer: deviceManufacturer,
        deviceBrand: deviceBrand,
        deviceID: deviceID,
        deviceSystemName: deviceSystemName,
        deviceSystemVersion: deviceSystemVersion,
        deviceBundleID: deviceBundleID,
        deviceBuildNumber: deviceBuildNumber
     } });
}

export function trackUserProfile(
    name,
    email,
    phoneNumber,
    province,
    city,
    village,
    subDistrict,
    gender,
    address,
    education,
    religion,
    hobby,
    occupation,
    occupationCity,
    monthlyExpend,
    referalCode,
    point
) {
   
    appInsights.trackEvent({ 
        name: "User Profile", 
        properties: { 
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            province: province,
            city: city,
            village: village,
            subDistrict: subDistrict,
            gender: gender,
            address: address,
            education: education,
            religion: religion,
            hobby: hobby,
            occupation: occupation,
            occupationCity: occupationCity,
            monthlyExpend: monthlyExpend,
            referalCode: referalCode,
            point: point
        } });
}

export function trackCampaignDetails( 
    campaignId, 
    campaignName,
    campaignTitle,
    campaignType,
    campaignUrl,
    campaignDescription,
    campaignCategory,
    campaignStartDate,
    campaignEndDate,
    campaignImage
     ) {
    appInsights.trackEvent({ 
        name: "Campaign Details", 
        properties: { 
            campaignID: campaignId, 
            campaignName: campaignName,
            campaignTitle: campaignTitle,
            campaignType: campaignType,
            campaignUrl: campaignUrl,
            campaignDescription: campaignDescription,
            campaignCategory: campaignCategory,
            campaignStartDate: campaignStartDate,
            campaignEndDate: campaignEndDate,
            campaignImage: campaignImage
          } });
} 

export function trackPopUpClose () {
    appInsights.trackEvent({ name: "Pop Up Close" })
}

export function trackPopUpClick () {
    appInsights.trackEvent({ name: "Pop Up Click" })
}

export function trackPopUpView () {
    appInsights.trackEvent({ name: "Pop Up View" })
}

export function trackVoucherRedeem ( voucherCode ) {
    appInsights.trackEvent({ name: "Vocuher Redeem", properties: { voucherCode: voucherCode } })
}
