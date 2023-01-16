import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    // <section className="btn btn-primary">
    <div className="container">
      <div>
        <h1 className="mt-5">love u</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          aliquid natus nulla. Cupiditate ullam soluta laudantium, nesciunt
          nulla minima ab enim dolores eum maiores odio labore inventore ipsa
          <Link to="/lorem"> totam magnam.</Link>
        </p>
      </div>
    </div>
    // </section>
  );
};

export default AboutUs;
