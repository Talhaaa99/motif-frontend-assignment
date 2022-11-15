import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const EmailBody = ({ currentBodyData, date }) => {
  const { body, desc, sub, name, id } = currentBodyData;
  const { addEmailToFav, favorites, removeFromFav } = useContext(GlobalContext);

  let favEmails = favorites.find((item) => item.id === id);

  const disableFav = favEmails ? true : false;

  return (
    <div
      className={
        currentBodyData.length !== 0
          ? "flex border mt-12 mx-8 rounded-2xl p-6 max-w-[800px]"
          : "hidden"
      }
    >
      <aside className=" py-2 px-6 ">
        <figure className="bg-[#E54065] text-white rounded-[100%] px-6 p-4 ">
          {name?.[0]}
        </figure>
      </aside>
      <div>
        <header className="flex py-4 justify-between">
          <div className="pr-12">
            <h1 className="font-bold text-xl">{sub}</h1>
            <p>{date}</p>
          </div>
          {disableFav !== true ? (
            <button
              className="bg-[#E54065] rounded-full text-sm text-[#f2f2f2] w-[150px] h-[30px]"
              onClick={() => addEmailToFav(currentBodyData)}
            >
              Mark Favorite
            </button>
          ) : (
            <button
              className="bg-[#E54065] rounded-xl text-sm text-[#f2f2f2] w-[150px] h-[30px]"
              onClick={() => removeFromFav(id)}
            >
              Remove Favorite
            </button>
          )}
        </header>
        <section className="pt-6">{body}</section>
      </div>
    </div>
  );
};
export default EmailBody;
