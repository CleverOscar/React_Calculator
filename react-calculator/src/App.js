import Calculator from "./Views/Calculator";

function App() {


  const portfolio = <a href="https://cleveroscar.dev/" className="text-blue-500 hover:text-blue-800" target="_blank"> CleverOscar</a>

  const hacktoberfest = <a href="https://hacktoberfest.com/" className="text-blue-500 hover:text-blue-800" target="_blank"> Hacktoberfest</a>

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

          <div className="bg-gray-900/10 text-center py-4 text-xl">
            <p>Developed for {hacktoberfest} 2022 with {portfolio} </p>
          </div>
      </div>

    </div>
  );
}

export default App;
