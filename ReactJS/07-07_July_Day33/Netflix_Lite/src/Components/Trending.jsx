import movie1 from "../assets/Bhooth Bangla.jpg";
import movie2 from "../assets/Teach You Lesson.jpg";
import movie3 from "../assets/Durandar.jpg";
import movie4 from "../assets/Money.jpg";
import movie5 from "../assets/kara.jpg";

function Trending() {
  const movies = [
    movie1,
    movie2,
    movie3,
    movie4,
    movie5,
  ];

  return (
    <section className="trending">
      <h2>Trending Now</h2>

      <div className="cards">
        {movies.map((movie, index) => (
          <div className="card" key={index}>
            <img src={movie} alt={`Movie ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trending;