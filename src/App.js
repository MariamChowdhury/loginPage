import "./App.css";
import Form from "./Components/Form/Form";
import image from "./Components/Images/loginImage.jpg";
function App() {
  return (
    <div className="homePage">
      <div>
        <div className="row p-5">
          <div className="col-md-4">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-md-8 alignmentClass">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
