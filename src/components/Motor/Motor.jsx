import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import ToggleButton from "@mui/material/ToggleButton";
import CircularProgress from "@mui/material/CircularProgress";
import MotorGameplay from "../../assets/eldenring.jpg";
import "./Motor.scss";

function Motor() {
  const [sensitivity, setSensitivity] = useState(70.4);
  const [eyeTrackerConnected, setEyeTrackerConnected] = useState(true);
  const [switchesConnected, setSwitchesConnected] = useState(false);
  const [adaptiveControllerConnected, setAdaptiveControllerConnected] =
    useState(true);

  const [eyeTrackerLoading, setEyeTrackerLoading] = useState(false);
  const [switchesLoading, setSwitchesLoading] = useState(false);
  const [adaptiveControllerLoading, setAdaptiveControllerLoading] =
    useState(false);

  const [eyeTrackerCalibrated, setEyeTrackerCalibrated] = useState(false);
  const [adaptiveControllerCalibrated, setAdaptiveControllerCalibrated] =
    useState(false);
  const [switchesCalibrated, setSwitchesCalibrated] = useState(false);

  const [eyeTrackerCalibrating, setEyeTrackerCalibrating] = useState(false);
  const [adaptiveControllerCalibrating, setAdaptiveControllerCalibrating] =
    useState(false);
  const [switchesCalibrating, setSwitchesCalibrating] = useState(false);

  const calculateZoom = () => {
    return 1.0 + (sensitivity / 100) * 1.0;
  };

  const handleSensitivityChange = (event, newValue) => {
    setSensitivity(newValue);
    console.log(`Setting sensitivity to ${newValue}`);
  };

  const handleEyeTrackerToggle = () => {
    if (eyeTrackerConnected) {
      setEyeTrackerConnected(false);
      console.log("Eye Tracker disconnected");
      return;
    }

    setEyeTrackerLoading(true);

    setTimeout(() => {
      setEyeTrackerLoading(false);
      setEyeTrackerConnected(true);
      console.log("Eye Tracker connected");
    }, 1000);
  };

  const handleSwitchesToggle = () => {
    if (switchesConnected) {
      setSwitchesConnected(false);
      console.log("Switches disconnected");
      return;
    }

    setSwitchesLoading(true);

    setTimeout(() => {
      setSwitchesLoading(false);
      setSwitchesConnected(true);
      console.log("Switches connected");
    }, 1000);
  };

  const handleAdaptiveControllerToggle = () => {
    if (adaptiveControllerConnected) {
      setAdaptiveControllerConnected(false);
      console.log("Adaptive Controller disconnected");
      return;
    }

    setAdaptiveControllerLoading(true);

    setTimeout(() => {
      setAdaptiveControllerLoading(false);
      setAdaptiveControllerConnected(true);
      console.log("Adaptive Controller connected");
    }, 1000);
  };

  const handleEyeTrackerCalibrate = () => {
    if (eyeTrackerCalibrated) {
      setEyeTrackerCalibrated(false);
      console.log("Eye Tracker calibration reset");
      return;
    }

    setEyeTrackerCalibrating(true);

    setTimeout(() => {
      setEyeTrackerCalibrating(false);
      setEyeTrackerCalibrated(true);
      console.log("Eye Tracker calibrated");
    }, 1000);
  };

  const handleAdaptiveControllerCalibrate = () => {
    if (adaptiveControllerCalibrated) {
      setAdaptiveControllerCalibrated(false);
      console.log("Adaptive Controller calibration reset");
      return;
    }

    setAdaptiveControllerCalibrating(true);

    setTimeout(() => {
      setAdaptiveControllerCalibrating(false);
      setAdaptiveControllerCalibrated(true);
      console.log("Adaptive Controller calibrated");
    }, 1000);
  };

  const handleSwitchesCalibrate = () => {
    if (switchesCalibrated) {
      setSwitchesCalibrated(false);
      console.log("Switches calibration reset");
      return;
    }

    setSwitchesCalibrating(true);

    setTimeout(() => {
      setSwitchesCalibrating(false);
      setSwitchesCalibrated(true);
      console.log("Switches calibrated");
    }, 1000);
  };

  const getButtonContent = (loading, connected) => {
    if (loading) {
      return (
        <>
          <CircularProgress
            size={16}
            color="inherit"
            style={{ marginRight: "8px" }}
          />
          Connecting...
        </>
      );
    }
    return connected ? (
      <span style={{ color: "#c3fffc" }}>Connected</span>
    ) : (
      "Find Device"
    );
  };

  const getCalibrateButtonContent = (calibrating, calibrated) => {
    if (calibrating) {
      return (
        <>
          <CircularProgress
            size={16}
            color="inherit"
            style={{ marginRight: "8px" }}
          />
          Calibrating...
        </>
      );
    }
    return calibrated ? (
      <span style={{ color: "#c3fffc" }}>Calibrated</span>
    ) : (
      "Calibrate"
    );
  };

  return (
    <>
      <div className="motor-section-wrapper">
        <div className="device-detection">
          <h2 className="device-detection__title">Connect Assistive Devices</h2>
          <div className="device-buttons">
            <h3 className="device-buttons__title">Eye Tracker</h3>
            <ToggleButton
              value="check"
              selected={eyeTrackerConnected}
              onChange={handleEyeTrackerToggle}
              color="primary"
              disabled={eyeTrackerLoading}
            >
              {getButtonContent(eyeTrackerLoading, eyeTrackerConnected)}
            </ToggleButton>
          </div>

          <div className="device-buttons">
            <h3 className="device-buttons__title">Switches</h3>
            <ToggleButton
              value="check"
              selected={switchesConnected}
              onChange={handleSwitchesToggle}
              color="primary"
              disabled={switchesLoading}
            >
              {getButtonContent(switchesLoading, switchesConnected)}
            </ToggleButton>
          </div>

          <div className="device-buttons">
            <h3 className="device-buttons__title">Adaptive Controller</h3>
            <ToggleButton
              value="check"
              selected={adaptiveControllerConnected}
              onChange={handleAdaptiveControllerToggle}
              color="primary"
              disabled={adaptiveControllerLoading}
            >
              {getButtonContent(
                adaptiveControllerLoading,
                adaptiveControllerConnected
              )}
            </ToggleButton>
          </div>
          <div className="connected-devices">
            <h2 className="connected-devices__title">Connected Devices</h2>

            <div className="devices-container">
              <h3 className="connected__title">Eye Tracker:</h3>
              <div className="connected-devices__wrapper">
                <p className="connected-devices__name">Tobii Eye Tracker 4C</p>
                <ToggleButton
                  value="calibrate"
                  selected={eyeTrackerCalibrated}
                  onChange={handleEyeTrackerCalibrate}
                  color="primary"
                  disabled={eyeTrackerCalibrating || !eyeTrackerConnected}
                >
                  {getCalibrateButtonContent(
                    eyeTrackerCalibrating,
                    eyeTrackerCalibrated
                  )}
                </ToggleButton>
              </div>
            </div>

            <div className="devices-container">
              <h3 className="connected__title">Adaptive Controller:</h3>
              <div className="connected-devices__wrapper">
                <p className="connected-devices__name">
                  Xbox Adaptive Controller
                </p>
                <ToggleButton
                  value="calibrate"
                  selected={adaptiveControllerCalibrated}
                  onChange={handleAdaptiveControllerCalibrate}
                  color="primary"
                  disabled={
                    adaptiveControllerCalibrating ||
                    !adaptiveControllerConnected
                  }
                >
                  {getCalibrateButtonContent(
                    adaptiveControllerCalibrating,
                    adaptiveControllerCalibrated
                  )}
                </ToggleButton>
              </div>
            </div>

            {switchesConnected && (
              <div className="devices-container">
                <h3 className="connected__title">Switches:</h3>
                <div className="connected-devices__wrapper">
                  <p className="connected-devices__name">Adaptive Switches</p>
                  <ToggleButton
                    value="calibrate"
                    selected={switchesCalibrated}
                    onChange={handleSwitchesCalibrate}
                    color="primary"
                    disabled={switchesCalibrating || !switchesConnected}
                  >
                    {getCalibrateButtonContent(
                      switchesCalibrating,
                      switchesCalibrated
                    )}
                  </ToggleButton>
                </div>
              </div>
            )}

            <div className="calibration"></div>

            <div className="sensitivity-control">
              <h3 className="sensitivity-control__title">
                AI Recommended Eye Tracker
              </h3>
              <p className="sensitivity-control__info">
                Recommendation is based off past user input.
              </p>
              <h3 className="sensitivity-control__stat">
                Sensitivity:{" "}
                <span className="sensitivity-control__num">
                  {sensitivity.toFixed(1)}
                </span>
              </h3>

              <Slider
                value={sensitivity}
                onChange={handleSensitivityChange}
                aria-labelledby="eye-tracker-sensitivity-slider"
                min={0}
                max={100}
                step={1}
                valueLabelDisplay="auto"
                sx={{ width: 300 }}
              />
            </div>
          </div>
        </div>{" "}
        <div className="motor-gameplay-images">
          <img
            src={MotorGameplay}
            alt="elden ring gameplay"
            className="motor-gameplay-img"
          ></img>
          <div className="motor-gameplay-img-container">
            <img
              src={MotorGameplay}
              alt="elden ring gameplay with zoom effect"
              className="motor-gameplay-img motor-gameplay-img--zoomable"
              style={{
                transform: `scale(${calculateZoom()})`,
                transformOrigin: "center center",
                transition: "transform 0.3s ease-out",
              }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Motor;
