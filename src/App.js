import "./App.css";
import p5 from "p5";

import { useRef, useEffect } from "react";

function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    p.createCanvas(800, 800);
    p.background(122, 122, 221);
  };

  p.draw = function () {
    //
    if (p.mouseIsPressed) {
      p.fill(0);
    } else {
      p.fill(255);
    }
    p.ellipse(p.mouseX, p.mouseY, 80, 80);
  };
}

function App() {
  const p5Ref = useRef();

  useEffect(() => {
    // On component creation, instantiate a p5 object with the sketch and container reference
    const p5Instance = new p5(sketch, p5Ref.current);

    // On component destruction, delete the p5 instance
    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div className="App" ref={p5Ref} />;
}

export default App;
