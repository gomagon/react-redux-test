import "./Templates.css";
import { HeaderArea } from "../organisms/HeaderArea";
import { UserTable } from "../atoms/UserTable";
import { userType } from "../common/UserType";
import { loadStatusType } from "../redux/loadStatusSlice";
import { ChangeEvent } from "react";

type propsType = {
  loadStatus: loadStatusType;
  getButtonFunc: () => void;
  inputValue: string;
  inputChangeFunc: (e: ChangeEvent<HTMLInputElement>) => void;
  users: userType[];
};

export const HomeTemplates = (props: propsType) => {
  return (
    <div className="HomeTemplates">
      <HeaderArea
        getButtonFunc={props.getButtonFunc}
        inputValue={props.inputValue}
        inputChangeFunc={props.inputChangeFunc}
        loadStatus={props.loadStatus}
      />
      <UserTable users={props.users} />
    </div>
  );
};
