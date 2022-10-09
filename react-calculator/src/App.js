import Calculator from "./Views/Calculator";

function App() {
  return (
    <div className="App bg-blue-300 h-screen">
      {/* Container */}
      <div className="flex flex-col h-full justify-between">
        {/* Title */}
          <div>
            <p className="text-4xl text-center py-10"> ReactJs Calculator </p>
          </div>


          <Calculator />

          {/* Footer */}

          <div className="bg-gray-900/10 text-center">
            <p>Developed for Hacktoberfest 2022 </p>
          </div>
      </div>

    </div>
  );
}

export default App;
