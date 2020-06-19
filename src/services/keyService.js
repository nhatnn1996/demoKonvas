import _ from "lodash";
window.glxplay = {};
window.glxplay.platform = "tv_tizen";

let key = {
  NUMBER: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
  RETURN: 8,
  ENTER: 13,
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
};

if (window.glxplay.platform === "tv_tizen" || window.glxplay.platform === "tizen_sandbox") {
  let keyTizen = {
    RETURN: 10009,
    PAGE_UP: 427,
    PAGE_DOWN: 428,
    BACKWARD: 412,
    FORWARD: 417,
    PLAY: 415,
    PAUSE: 19,
    PLAY_PAUSE: 10252,
    STOP: 413,
    BTVOICE: 10224,
  };
  key = _.extend(key, keyTizen);
}

if (window.glxplay.platform === "tv_webos" || window.glxplay.platform === "lg_sandbox") {
  let keyWebOS = {
    RETURN: 461,
    BACKWARD: 412,
    FORWARD: 417,
    PAUSE: 19,
    PLAY: 415,
    STOP: 413,
  };
  key = _.extend(key, keyWebOS);
}

const KeyServices = key;

export default KeyServices;
