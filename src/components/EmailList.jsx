import EmailItem from "./EmaiIItem";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const EmailList = ({ currentBodyData, emailsList, fetchBody, date }) => {
  return (
    <div
      className={currentBodyData.length === 0 ? "min-w-[1500px] p-6" : "p-6"}
    >
      {emailsList.map((item) => (
        <EmailItem
          key={item.id}
          data={item}
          fetchBody={fetchBody}
          date={date}
        />
      ))}
    </div>
  );
};
export default EmailList;
