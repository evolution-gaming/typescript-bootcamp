import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {change, search} from "../modules/thunks";
import Keyboard from "react-simple-keyboard";


export function KeyboardConnected() {
  const [layout, setLayout] = useState<string>("default");
  const dispatch = useDispatch();
  const handleChange = React.useCallback((event) => {
    dispatch(change(event));
  }, [dispatch]);
  const handleKeyPress = React.useCallback((event) => {
    switch (event) {
      case "{enter}": {
        dispatch(search());
        break;
      }
      case "{shift}":
      case "{lock}": {
        setLayout(layout === "default" ? "shift" : "default");
        break;
      }
    }
  }, [dispatch, layout, setLayout]);

  return (
    <Keyboard
      layoutName={layout}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  )
}