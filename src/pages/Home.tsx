import { ChangeEvent } from "react";
import { getloadStatus, setStart, setEnd } from "../redux/loadStatusSlice";
import { getInputText, setInputText } from "../redux/inputTextSlice";
import { getUsers, setUsers } from "../redux/usersSlice";
import { HomeTemplates } from "../templates/HomeTemplates";
import { userType } from "../common/UserType";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const Home = () => {
  const rdxLoadStatus = useAppSelector(getloadStatus);
  const rdxInputText = useAppSelector(getInputText);
  const rdxUsers = useAppSelector(getUsers);
  const rdxDispatch = useAppDispatch();

  const getButtonFunc = () => {
    //inputの解析、id抽出
    const values = rdxInputText.split(",");
    let str = "";
    values.forEach((val) => {
      if (Number(val) >= 1 && Number(val) <= 10) {
        if (str[0] !== "?") {
          str += "?id=" + Number(val);
        } else {
          str += "&id=" + Number(val);
        }
      }
    });

    const client = axios.create({
      baseURL: BASE_URL + str,
    });
    async function _axios() {
      rdxDispatch(setStart());
      await client
        .get<userType[]>(``)
        .then((response) => {
          rdxDispatch(setEnd());
          if (response.data) {
            rdxDispatch(setUsers(response.data));
          }
        })
        .catch((_) => {
          rdxDispatch(setEnd());
        });
    }
    _axios();
  };

  const inputChangeFunc = (e: ChangeEvent<HTMLInputElement>) => {
    rdxDispatch(setInputText(e.target.value));
  };

  return (
    <div className="HomeTemplates">
      <HomeTemplates
        getButtonFunc={getButtonFunc}
        inputValue={rdxInputText}
        inputChangeFunc={inputChangeFunc}
        loadStatus={rdxLoadStatus}
        users={rdxUsers}
      />
    </div>
  );
};
