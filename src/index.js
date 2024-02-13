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
        name: "User Login", 
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

export function trackSliderDetail( campaignTitle, campaignType, campaignMdId, campaignImage, campaignUrl, campaignReference) {
    appInsights.trackEvent({ name: "User OPEN Slider Detail", properties: { 
        campaignTitle: campaignTitle,
        campaignType: campaignType,
        campaignMdId: campaignMdId,
        campaignBannerType: "Slider",
        campaignImage: campaignImage,
        campaignUrl: campaignUrl,
        campaignReference: campaignReference
        
    } })
}

export function trackBannerDetail( campaignTitle, campaignType, campaignMdId, campaignImage, campaignUrl, campaignReference) {
    appInsights.trackEvent({ name: "User OPEN Banner Detail", properties: {
        campaignTitle: campaignTitle,
        campaignType: campaignType,
        campaignMdId: campaignMdId,
        campaignBannerType: "Banner",
        campaignImage: campaignImage,
        campaignUrl: campaignUrl,
        campaignReference: campaignReference
    } })

}

export function trackBannerClose( campaignTitle, campaignType, campaignMdId, campaignImage, campaignUrl, campaignReference) {
    appInsights.trackEvent({ name: "User CLOSE Banner", properties: {
        campaignTitle: campaignTitle,
        campaignType: campaignType,
        campaignMdId: campaignMdId,
        campaignBannerType: "Banner",
        campaignImage: campaignImage,
        campaignUrl: campaignUrl,
        campaignReference: campaignReference
    } })
}

export function trackVoucherRedeem ( voucherCode ) {
    appInsights.trackEvent({ name: "Vocuher Redeem", properties: { voucherCode: voucherCode } })
}
