import fs from "fs";
import path from "path";
import "../app/globals.css";

function Hello({ items }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {" "}
      <div>
        <h1>List of items</h1>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const jsonFilePath = path.join(process.cwd(), "data", "data.json");
  const jsonString = fs.readFileSync(jsonFilePath, "utf8");
  const items = JSON.parse(jsonString);

  return { props: { items } };
}

export default Hello;
