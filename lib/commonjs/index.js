"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAppInsights = initAppInsights;
exports.trackBannerClose = trackBannerClose;
exports.trackBannerDetail = trackBannerDetail;
exports.trackDeviceModel = trackDeviceModel;
exports.trackPageView = trackPageView;
exports.trackSliderDetail = trackSliderDetail;
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
    }
  });
}
function trackSliderDetail(campaignTitle, campaignType, campaignMdId, campaignImage, campaignUrl, campaignReference) {
  appInsights.trackEvent({
    name: "User OPEN Slider Detail",
    properties: {
      campaignTitle: campaignTitle,
      campaignType: campaignType,
      campaignMdId: campaignMdId,
      campaignBannerType: "Slider",
      campaignImage: campaignImage,
      campaignUrl: campaignUrl,
      campaignReference: campaignReference
    }
  });
}
function trackBannerDetail(campaignTitle, campaignType, campaignMdId, campaignImage, campaignUrl, campaignReference) {
  appInsights.trackEvent({
    name: "User OPEN Banner Detail",
    properties: {
      campaignTitle: campaignTitle,
      campaignType: campaignType,
      campaignMdId: campaignMdId,
      campaignBannerType: "Banner",
      campaignImage: campaignImage,
      campaignUrl: campaignUrl,
      campaignReference: campaignReference
    }
  });
}
function trackBannerClose(campaignTitle, campaignType, campaignMdId, campaignImage, campaignUrl, campaignReference) {
  appInsights.trackEvent({
    name: "User CLOSE Banner",
    properties: {
      campaignTitle: campaignTitle,
      campaignType: campaignType,
      campaignMdId: campaignMdId,
      campaignBannerType: "Banner",
      campaignImage: campaignImage,
      campaignUrl: campaignUrl,
      campaignReference: campaignReference
    }
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