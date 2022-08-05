import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  changeMessage,
  allCaps,
  selectMessage,
} from "../../store/messageSlice";
import {
  toggleTheme,
  changePrimaryColor,
  selectDarkTheme,
} from "../../store/themeSlice";
import { start, pause, reset, selectTimer } from "../../store/timerSlice";
import "./ReduxExs.scss";
import Timer from "../Timer/Timer";

const ReduxExs = () => {
  const message = useSelector(selectMessage);
  const isDarkTheme = useSelector(selectDarkTheme);
  const timer = useSelector(selectTimer);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [input, setInput] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const colors = ["orchid", "violetred", "coral", "orange"];

  const update = () => {
    if (input) {
      dispatch(changeMessage(input));
    }
    if (isChecked) {
      dispatch(allCaps());
    }
    setInput("");
    setIsChecked(false);
  };
  const toggleDarkMode = () => {
    dispatch(toggleTheme());
  };
  const changeColor = (color: string) => {
    dispatch(changePrimaryColor(color));
  };

  return (
    <div className="ExContainer">
      <div className="h5 font-monospace">Redux Examples</div>
      <div className="py-2 font-monospace">
        Below are some examples which showcase the power of Redux Toolkit. Try
        interacting with the forms and see the effects on the home page!
      </div>
      <div className="row justify-content-evenly">
        <Form.Group className="my-3 reduxForm">
          <Form.Label htmlFor="messageInput">{t("examples.msg")} </Form.Label>
          <Form.Control
            id="messageInput"
            type="text"
            placeholder={message}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <div className="form-check my-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="check"
              checked={isChecked}
              onChange={(event) => setIsChecked(event.target.checked)}
            />
            <label className="form-check-label" htmlFor="checkbox">
              All Caps
            </label>
          </div>
          <Button className="mt-2" onClick={update}>
            {t("examples.update")}
          </Button>
        </Form.Group>

        <Form.Group className="my-3 reduxForm">
          <div className="mb-2">{t("examples.theme")} </div>
          <div className="form-check form-switch mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="switch"
              checked={isDarkTheme}
              onChange={toggleDarkMode}
            />
            <label className="form-check-label" htmlFor="switch">
              Dark Theme
            </label>
          </div>
          <div className="mb-1">{t("examples.color")} </div>
          <div className="d-flex justify-content-evenly">
            {colors.map((color) => (
              <div
                key={color}
                className={`colorBox ${color}`}
                onClick={() => changeColor(color)}
              />
            ))}
          </div>
        </Form.Group>

        <Form.Group className="my-3 reduxForm">
          <Timer />
          <div className="d-flex justify-content-between">
            <Button
              disabled={timer.isRunning}
              onClick={() => dispatch(start())}
            >
              {t("examples.btn1")}
            </Button>
            <Button
              disabled={!timer.isRunning}
              onClick={() => dispatch(pause())}
            >
              {t("examples.btn2")}
            </Button>
            <Button onClick={() => dispatch(reset())}>
              {t("examples.btn3")}
            </Button>
          </div>
        </Form.Group>
      </div>
    </div>
  );
};

export default ReduxExs;
