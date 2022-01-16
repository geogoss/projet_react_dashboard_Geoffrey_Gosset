import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import CardPresentation from "./CardPresentation/CardPresentation"
import Card from "./Card/Card"



function App() {
  return (
    <div className="App">
      <div className="englobante row w-50 mx-auto bg-danger">
      <CardPresentation />
      <Card />
      </div>
    </div>
  );
}

export default App;
