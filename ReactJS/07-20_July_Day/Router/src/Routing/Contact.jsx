export default function Contact() {
  return (
    <section className="min-h-screen bg-orange-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow w-96 hover:scale-105 transition">

        <h1 className="text-3xl font-bold text-amber-800">
          Contact Us
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full mt-4 p-2 border rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-4 p-2 border rounded"
        />

        <textarea
          placeholder="Message"
          className="w-full mt-4 p-2 border rounded"
          rows="4"
        ></textarea>

        <button className="mt-4 w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700">
          Send
        </button>

      </div>
    </section>
  );
}