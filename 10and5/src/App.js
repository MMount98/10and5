import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
       <div className="bg-black text-white p-8">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-4xl font-bold mb-4">It's not about the hours</p>
        <p className="text-4xl font-bold">that we keep,</p>
        <p className="text-base font-light italic mt-4">but our signal for making</p>
        <p className="text-base font-light italic">lasting impressions.</p>
      </div>
      <div className="flex justify-center space-x-4 mt-8">
        <a href="#" className="border border-white px-4 py-2">BRAND IDENTITY</a>
        <a href="#" className="border border-white px-4 py-2">CONTENT STRATEGY</a>
        <a href="#" className="border border-white px-4 py-2">CREATIVE DEVELOPMENT</a>
      </div>
    </div>
    </div>
  );
}

export default App;
