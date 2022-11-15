import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import EmailList from "./EmailList";

const ReadEmails = ({ currentBodyData, fetchBody, date }) => {
  const { read } = useContext(GlobalContext);

  return (
    <div>
      {read.length !== 0 ? (
        <EmailList
          currentBodyData={currentBodyData}
          emailsList={read}
          fetchBody={fetchBody}
          date={date}
        />
      ) : (
        <h1 className="text-xl mx-auto p-4">No read emails yet</h1>
      )}
    </div>
  );
};
export default ReadEmails;
