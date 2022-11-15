import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import EmailList from "./EmailList";

const FavoriteEmails = ({ currentBodyData, fetchBody, date }) => {
  const { favorites } = useContext(GlobalContext);

  return (
    <div>
      {favorites.length !== 0 ? (
        <EmailList
          currentBodyData={currentBodyData}
          emailsList={favorites}
          fetchBody={fetchBody}
          date={date}
        />
      ) : (
        <h1 className="text-xl mx-auto p-4">No Favorites yet</h1>
      )}
    </div>
  );
};
export default FavoriteEmails;
