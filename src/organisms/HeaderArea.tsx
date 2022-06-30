import "./Organisms.css";
import { InputArea } from "../molecules/InputArea";
import { StatusLabel } from "../atoms/StatusLabel";
import { loadStatusType } from "../redux/loadStatusSlice";
import { ChangeEvent } from "react";

type propsType = {
  loadStatus: loadStatusType;
  getButtonFunc: () => void;
  inputValue: string;
  inputChangeFunc: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const HeaderArea = (props: propsType) => {
  return (
    <div className="HeaderArea">
      <InputArea
        getButtonFunc={props.getButtonFunc}
        inputValue={props.inputValue}
        inputChangeFunc={props.inputChangeFunc}
      />
      <div className="StatusArea">
        <StatusLabel>
          {props.loadStatus.loadStatus === 0
            ? "Go"
            : props.loadStatus.loadStatus === 1
            ? "success"
            : "loading..."}
        </StatusLabel>
        <StatusLabel>{props.loadStatus.dlTime}ms</StatusLabel>
      </div>
    </div>
  );
};
