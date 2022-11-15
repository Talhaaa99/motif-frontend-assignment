import EmailBody from "./components/EmailBody";
import EmailList from "./components/EmailList";
import { GlobalProvider } from "./context/GlobalContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { moment } from "moment-js";
import FavoriteEmails from "./components/FavoriteEmails";
import ReadEmails from "./components/ReadEmails";

function App() {
  const [emailsList, setEmailsList] = useState([]);
  const [currentBodyData, setCurrentBodyData] = useState([]);
  const [fav, setFav] = useState(false);
  const [viewed, setViewed] = useState(false);
  const [unread, setUnread] = useState(false);

  const url = `https://6366339879b0914b75cba9c2.mockapi.io/api/email`;

  const fetchEmails = () => {
    axios
      .get(url)
      .then((res) => {
        setEmailsList(
          res.data.map((item) => ({
            email: item.from_email,
            name: item.from_name,
            id: item.id,
            desc: item.short_description,
            sub: item.subject,
          }))
        );
      })
      .catch((err) => console.error(`Error: ${err}`));
  };
  console.log(emailsList);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchBody = (id, data) => {
    axios
      .get(`https://6366339879b0914b75cba9c2.mockapi.io/api/email/${id}`)
      .then((res) => {
        setCurrentBodyData({ ...res.data, ...data });
      })
      .catch((err) => console.error(err));
  };

  const handleFav = () => {
    setFav(!fav);
  };
  const handleRead = () => {
    setViewed(!viewed);
  };

  const handleUnread = () => {
    setUnread(!unread);
    setViewed(false);
    setFav(false);
  };

  const specifiedDate = new Date(2022, 10, 15, 17, 0, 0, 0);
  const date = specifiedDate.toISOString();

  console.log(date);

  return (
    <main className="tracking wide text-[#636363]">
      <GlobalProvider>
        <header>
          <nav className="px-10 mx-6 mt-8 -pb-6 space-x-8 flex flex-row text-lg">
            <h1>Filter By:</h1>
            <button
              className={
                fav
                  ? "hover:bg-[#E1E4EA] border bg-[#E1E4EA] rounded-full px-4 py-1"
                  : "hover:bg-[#E1E4EA] border rounded-full px-4 py-1"
              }
              onClick={handleFav}
            >
              Favorites
            </button>
            <button
              className={
                !unread
                  ? "hover:bg-[#E1E4EA] border bg-[#E1E4EA] rounded-full px-4 py-1"
                  : "hover:bg-[#E1E4EA] border  rounded-full px-4 py-1"
              }
              onClick={handleUnread}
            >
              Unread
            </button>
            <button
              className={
                viewed
                  ? "hover:bg-[#E1E4EA] border bg-[#E1E4EA] rounded-full px-4 py-1"
                  : "hover:bg-[#E1E4EA] border rounded-full px-4 py-1"
              }
              onClick={handleRead}
            >
              Read
            </button>
          </nav>
        </header>
        <div className="flex">
          {fav ? (
            <FavoriteEmails
              currentBodyData={currentBodyData}
              fetchBody={fetchBody}
              date={date}
            />
          ) : viewed ? (
            <ReadEmails
              currentBodyData={currentBodyData}
              fetchBody={fetchBody}
              date={date}
            />
          ) : (
            <EmailList
              currentBodyData={currentBodyData}
              emailsList={emailsList}
              fetchBody={fetchBody}
              date={date}
            />
          )}
          <EmailBody currentBodyData={currentBodyData} date={date} />
        </div>
      </GlobalProvider>
    </main>
  );
}

export default App;
