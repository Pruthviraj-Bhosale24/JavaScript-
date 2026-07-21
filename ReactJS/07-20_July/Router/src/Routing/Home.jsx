export default function Home() {
  return (
    <section className="min-h-screen bg-orange-50 flex justify-center items-center">
      <div className="text-center">

        <h1 className="text-5xl font-bold text-amber-800">
          Welcome to Linkcode
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Learn React and Tailwind CSS with simple and modern UI.
        </p>

        <button className="mt-6 px-6 py-3 bg-amber-600 text-white rounded hover:bg-amber-700">
          Get Started
        </button>

      </div>
    </section>
  );
}