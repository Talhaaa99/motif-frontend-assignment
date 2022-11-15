import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const EmailItem = ({ data, fetchBody, date }) => {
  const [view, setView] = useState(false);

  const handleCurrentEmail = (id, data) => {
    fetchBody(id, data);
    setView(true);
  };
  const { addEmailToRead } = useContext(GlobalContext);

  return (
    <body onClick={() => addEmailToRead(data)}>
      <div
        className={
          view
            ? "flex rounded-2xl border m-6 w-full p-4 cursor:pointer hover:shadow-xl opacity-[70%]"
            : "flex rounded-2xl border m-6 w-full p-4 cursor:pointer hover:shadow-xl"
        }
        onClick={() => handleCurrentEmail(data.id, data)}
      >
        <aside className="py-2 px-6">
          <figure className="border bg-[#E54065] text-white rounded-[100%] px-6 p-4 ">
            {data?.name[0]}
          </figure>
        </aside>
        <main className="py-2 space-y-2">
          <header className="font-bold">
            <h3 className="flex">
              <p>From: </p>
              {data.name} {`<${data.email}>`}
            </h3>
            <h3 className="flex">
              <p>Subject: </p>
              {data.sub}
            </h3>
          </header>
          <section>
            <p>{data.desc}</p>
          </section>
          <footer className="flex space-x-2 text-sm">
            <p>{date}</p>
          </footer>
        </main>
      </div>
    </body>
  );
};
export default EmailItem;
