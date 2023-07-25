export default function Home() {
  return (
    <main className="foo">
      <div style={{ border: "1px solid red" }}>HELLO</div>
      <div className="flex justify-between w-500">
        <div className="bg-gray-200 p-2 m-2 w-20">1</div>
        <div className="bg-gray-200 p-2 m-2">2</div>
        <div className="bg-gray-200 p-2 m-2">3</div>
        <div className="bg-gray-200 p-2 m-2">4</div>
      </div>
    </main>
  );
}
