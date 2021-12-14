import "./App.css";
import Form from "./Components/Form/Form";
import image2 from "./Components/Images/2552643.jpg";
function App() {
  return (
    <div className="homePage">
      <div className="row gx-0 py-3">
        <div className="col-md-6 py-5 ">
          <img src={image2} alt="" className="mobileImage" />
        </div>
        <div className="col-md-6 py-5 alignmentClass">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
