import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";

// // function Button(props) {
// function Button({ children, buttonStyle }) {
//   // return <button id="btn">{props.label}</button>;
//   return (
//     <button id="btn" style={buttonStyle}>
//       {children}
//     </button>
//   );
// }

class Button extends React.Component {
  render() {
    return (
      <button style={this.props.buttonStyle}>{this.props.children}</button>
    );
  }
}

function Newsletter(props) {
  return (
    <div>
      <input type="text" placeholder={props.placeholder} s></input>
      <Button buttonStyle={props.buttonStyle}>{props.buttonChildren}</Button>
    </div>
  );
}
function App() {
  const style = {
    padding: "20px 20px",
    fontSize: 25,
    borderRadius: 12,
    backgroundColor: "orange",
    margin: 20
  };

  const style1 = {
    padding: "20px 20px",
    fontSize: 25,
    borderRadius: 12,
    backgroundColor: "yellow",
    margin: 20
  };

  const style2 = {
    padding: "20px 20px",
    fontSize: 25,
    borderRadius: 12,
    backgroundColor: "red",
    margin: 20
  };
  return (
    <div className="App">
      <main>
        <Title content="Simple Title" />
        />
      </main>
      <h1>Hello React, wellcome to codaisseur!</h1>
      <header className="App-header">
        <Button buttonStyle={style}>Click me please</Button>
        <br></br>
        <Button buttonStyle={style1}>
          hearts<span>❤️️💖💋💞</span>
        </Button>
        <br></br>
        <Button buttonStyle={style2}>
          flowers <span>🌹🌻🍁💐</span>
        </Button>
        <hr></hr>
        <Newsletter
          placeholder="Enter your email"
          buttonStyle={style}
          buttonChildren="submit"
        />
      </header>
    </div>
  );
}

// this line  <Button label="Click me!" /> can be used instead of  <Button>Click me please</Button>
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
