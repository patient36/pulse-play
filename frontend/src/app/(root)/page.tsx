import Link from "next/link";

export default function Home() {
  return (
    <div className="wrapper bg-cover bg-center"
      style={{ backgroundImage: "url('/images/9.jpg')" }}>
      <div className="flex flex-col justify-start pt-20 max-sm:pt-5 items-center h-screen bg-black bg-opacity-80 text-white">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-4 text-white tracking-wide drop-shadow-lg max-sm:text-2xl">
            Pulse Play
          </h1>
          <p className="text-lg text-white opacity-80 mt-2 max-sm:text-sm">Your <span className="text-green-400 font-semibold">music  😍  here</span> for you.</p>
        </header>

        {/* Content */}
        <section className="mt-5 max-w-xl text-xl font-light text-white opacity-80 text-center max-sm:text-sm">
          <p>
            <span className="text-green-400 font-semibold">Discover</span> beats,{" "}
            <span className="text-green-400 font-semibold">connect</span> with artists, and{" "}
            <span className="text-green-400 font-semibold">own</span> the rhythm.
          </p>
        </section>

        {/* Buttons */}
        <div className="btns flex gap-5 mt-20 max-sm:mt-10 justify-center">
          <Link href='/hot-tracks'><Button text="Start Listening" /></Link>
          <Button text="Join as an Artist" />
        </div>
      </div>
    </div>
  );
}

function Button({ text }: { text: string }) {
  return (
    <button className="px-8 py-4 border-2 border-green-400 rounded-full bg-transparent text-green-400 font-bold text-lg relative transition-all duration-300 transform hover:bg-green-400 hover:text-black hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 max-sm:py-2 max-sm:px-4 max-sm:text-sm max-sm:font-medium">
      {text}
    </button>
  );
}
