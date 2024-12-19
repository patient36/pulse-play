export default function Home() {
  return (
    <div className="wrapper bg-cover bg-center"
      style={{ backgroundImage: "url('/images/9.jpg')" }}>
      <div className="flex flex-col justify-start pt-20 items-center h-screen bg-black bg-opacity-80 text-white">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-4 text-white tracking-wide drop-shadow-lg">
            Pulse Play
          </h1>
          <p className="text-lg text-white opacity-80 mt-2">Streaming Redefined</p>
        </header>

        {/* Content */}
        <section className="mt-5 max-w-xl text-xl font-light text-white opacity-80 text-center">
          <p>
            <span className="text-green-400 font-semibold">Discover</span> beats,{" "}
            <span className="text-green-400 font-semibold">connect</span> with artists, and{" "}
            <span className="text-green-400 font-semibold">own</span> the rhythm.
          </p>
        </section>

        {/* Buttons */}
        <div className="flex gap-5 mt-20 justify-center">
          <Button text="Start Listening" />
          <Button text="Join as an Artist" />
        </div>
      </div>
    </div>
  );
}

function Button({ text }: { text: string }) {
  return (
    <button className="px-8 py-4 border-2 border-green-400 rounded-full bg-transparent text-green-400 font-bold text-lg relative transition-all duration-300 transform hover:bg-green-400 hover:text-black hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400">
      {text}
    </button>
  );
}
