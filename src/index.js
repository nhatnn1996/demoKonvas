import React, { Component } from "react";
import * as serviceWorker from "./serviceWorker";
import { render } from "react-dom";
import { Stage, Layer, Text } from "react-konva";
import { Spring, animated } from "react-spring/renderprops-konva";
import Ribbon from "./components/ribbon";
import BoxFocus from "./components/boxfocus";
import moviesDefault from "./mock/movies";
import KeyCode from "./services/keyService";

window.glxplay = {};
window.glxplay.platform = "tv_tizen";

class ColoredRect extends React.Component {
  state = { flag: false, index: 0, movies: [...moviesDefault, ...moviesDefault], time: 300, animation: true };
  count = 0;
  timout = null;
  flagCheck = false;
  handleClick = () => this.setState((state) => ({ flag: !state.flag }));
  handlePres = (e) => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === KeyCode.LEFT) {
      if (this.state.index !== 0) {
        this.setState({ index: this.state.index - 1 });
      }
    }
    if (keyCode === KeyCode.UP) {
    }
    if (keyCode === KeyCode.RIGHT) {
      const { index } = this.state;
      clearTimeout(this.timout);
      this.timout = setTimeout(() => {
        this.count = 0;
      }, 300);

      if (this.count % 3 === 0 || this.count === 0) {
        this.setState({ index: index + 1, animation: true });
      }
      this.count++;
    }
    if (keyCode === KeyCode.DOWN) {
    }
  };
  componentDidUpdate() {
    const { index, movies } = this.state;
    if (index - 1 === parseInt(movies.length / 2)) {
      return this.setState({movies: [...movies, ...moviesDefault]   });
    }
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handlePres);
  }
  render() {
    const { index, movies, animation } = this.state;
    return (
      <Spring
        config={{ duration: animation ? 300 : 0 }}
        from={{ x: 100, shadowBlur: 0, fill: "rgb(10,50,19)" }}
        to={{
          x: (322 + 10) * index * -1 + 100,
        }}
      >
        {(props) => (
          <animated.Group {...props} width={1000} y={100} fill="black" onClick={this.handleClick}>
            <Ribbon movies={movies} />
          </animated.Group>
        )}
      </Spring>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try clicking the rectangle" />
          <ColoredRect />
          <BoxFocus />
        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById("root"));
serviceWorker.unregister();
