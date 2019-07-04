class App extends React.Component {
  constructor(props) {
    super(props);
    this.myElement;
    this.myTween = TweenMax;
  }

  state = {
    styles: [
      "Pils",
      "Bock",
      "Oatmeal Stout",
      "Red India Pale Ale",
      "Foreign Extra Stout",
      "Blonde",
      "Imperial India Pale Ale",
      "Sour Ale",
      "Pale Ale",
      "Baltic Porter",
      "Russian Imperial Stout",
      "Barley Wine",
      "Lambic",
      "West Coast India Pale Ale",
      "Grodziskie"
    ],
    style: "",
    value: ""
  };

  componentDidMount() {
    this.myTween.set(this.myElement, { visibility: "visible" });
    this.myTween.from(this.myElement, 2, { opacity: 0, delay: 0.5 });
  }

  handleStyle() {
    this.setState({
      style: this.state.styles[
        Math.floor(Math.random() * this.state.styles.length)
      ]
    });
  }

  handleValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleNewStyle = () => {
    if (!this.input.value) return alert("No, type a style's name first!");
    const newStyle = this.input.value;
    this.state.styles.push(newStyle);
    alert(this.state.styles.join(", "));
    this.setState({ value: "" });
  };

  handleDeleteLastStyle = () => {
    this.state.styles.pop();
    alert(this.state.styles.join(", "));
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className="main" ref={div => (this.myElement = div)}>
        <h1 className="head">So, what kind of beer for 2night? No idea?</h1>
        <button className="watch" onClick={this.handleStyle.bind(this)}>
          Choose the style
        </button>
        <br />
        <input
          type="text"
          className="prediction"
          placeholder="type in style's name"
          value={this.state.value}
          onChange={this.handleValue}
          ref={input => (this.input = input)}
        />
        <button className="add" onClick={this.handleNewStyle}>
          Add new style
        </button>
        <button className="delete" onClick={this.handleDeleteLastStyle}>
          Delete last style
        </button>
        <br />
        <span className="style">{this.state.style}</span>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
