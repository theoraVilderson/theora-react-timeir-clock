"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _theoraTimeirClock = _interopRequireDefault(require("theora-timeir-clock"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const currentDate = new Date();

function TimeirClock({
  date: userDate = null,
  options = {},
  amPm = false,
  ...props
}) {
  const canvasRef = (0, _react.useRef)(null);
  const canvas = /*#__PURE__*/(0, _jsxRuntime.jsx)("canvas", {
    ref: canvasRef,
    width: 200,
    height: 200
  });
  const [date, setDate] = (0, _react.useState)(userDate !== null && userDate !== void 0 ? userDate : currentDate);
  const [realSec, realMin, realHour] = [date.getSeconds(), date.getMinutes(), date.getHours()];
  const [sec, min, hour] = [("0" + realSec).slice(-2), ("0" + realMin).slice(-2), ("0" + realHour % (amPm ? 12 : 24)).slice(-2)];
  (0, _react.useEffect)(() => {
    function onTick(date) {
      setDate(date);
    }

    let clock = new _theoraTimeirClock.default({
      element: canvasRef.current,
      onTick,
      time: userDate,
      /*you can use optional Date*/
      options
    });
    clock.startClock();
    return () => {
      clock.stopClock();
      clock = null;
    };
  }, [userDate, options]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      width: "200px",
      fontFamily: "sans-serif"
    },
    ...props,
    children: [canvas, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("h2", {
        style: {
          textAlign: "center"
        },
        children: [hour, ":", min, ":", sec, " ", amPm && (realHour >= 12 ? "PM" : "AM")]
      })
    })]
  });
}

var _default = /*#__PURE__*/(0, _react.memo)(TimeirClock);

exports.default = _default;