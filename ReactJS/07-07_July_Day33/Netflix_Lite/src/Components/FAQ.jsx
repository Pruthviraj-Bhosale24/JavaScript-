import EmailBox from "./EmailBox";

function FAQ() {
  return (
    <>
      <h2 className="title1">
        Frequently Asked Questions
      </h2>

      <section className="faq">

        <div className="box">
          <h2>What is Netflix?</h2>
          <h2>+</h2>
        </div>

        <div className="box">
          <h2>How much does Netflix cost?</h2>
          <h2>+</h2>
        </div>

        <div className="box">
          <h2>Where can I watch?</h2>
          <h2>+</h2>
        </div>

        <div className="box">
          <h2>How do I cancel?</h2>
          <h2>+</h2>
        </div>

        <div className="box">
          <h2>What can I watch on Netflix?</h2>
          <h2>+</h2>
        </div>

        <div className="box">
          <h2>Is Netflix good for kids?</h2>
          <h2>+</h2>
        </div>

      </section>

      <p className="p1">
        Ready to watch? Enter your email to
        create or restart your membership.
      </p>

      <EmailBox />
    </>
  );
}

export default FAQ;