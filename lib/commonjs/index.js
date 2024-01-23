"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAppInsights = initAppInsights;
exports.trackCampaignDetails = trackCampaignDetails;
exports.trackDeviceModel = trackDeviceModel;
exports.trackPageView = trackPageView;
exports.trackPopUpClick = trackPopUpClick;
exports.trackPopUpClose = trackPopUpClose;
exports.trackPopUpView = trackPopUpView;
exports.trackUserProfile = trackUserProfile;
exports.trackVoucherRedeem = trackVoucherRedeem;
var _applicationinsightsWeb = require("@microsoft/applicationinsights-web");
var _applicationinsightsReactNative = require("@microsoft/applicationinsights-react-native");
var RNMPlugin = new _applicationinsightsReactNative.ReactNativePlugin();
var appInsights = new _applicationinsightsWeb.ApplicationInsights({
  config: {
    instrumentationKey: '',
    extensions: [RNMPlugin]
  }
});
function initAppInsights() {
  appInsights.loadAppInsights();
}
function trackPageView(name) {
  appInsights.trackPageView({
    name: name
  });
}
function trackDeviceModel(deviceModel, deviceManufacturer, deviceBrand, deviceID, deviceSystemName, deviceSystemVersion, deviceBundleID, deviceBuildNumber) {
  appInsights.trackEvent({
    name: "Device Model",
    properties: {
      deviceModel: deviceModel,
      deviceManufacturer: deviceManufacturer,
      deviceBrand: deviceBrand,
      deviceID: deviceID,
      deviceSystemName: deviceSystemName,
      deviceSystemVersion: deviceSystemVersion,
      deviceBundleID: deviceBundleID,
      deviceBuildNumber: deviceBuildNumber
    }
  });
}
function trackUserProfile(name, email, phoneNumber, province, city, village, subDistrict, gender, address, education, religion, hobby, occupation, occupationCity, monthlyExpend, referalCode, point) {
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
    }
  });
}
function trackCampaignDetails(campaignId, campaignName, campaignTitle, campaignType, campaignUrl, campaignDescription, campaignCategory, campaignStartDate, campaignEndDate, campaignImage) {
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
    }
  });
}
function trackPopUpClose() {
  appInsights.trackEvent({
    name: "Pop Up Close"
  });
}
function trackPopUpClick() {
  appInsights.trackEvent({
    name: "Pop Up Click"
  });
}
function trackPopUpView() {
  appInsights.trackEvent({
    name: "Pop Up View"
  });
}
function trackVoucherRedeem(voucherCode) {
  appInsights.trackEvent({
    name: "Vocuher Redeem",
    properties: {
      voucherCode: voucherCode
    }
  });
}
//# sourceMappingURL=index.js.map