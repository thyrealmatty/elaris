export default function Settings() {
  return (
    <section className="min-h-screen px-6 pt-24 pb-32">
      <div className="mx-auto max-w-4xl">

        {/* Header */}

        <p className="text-sm font-semibold uppercase tracking-[6px] text-pink-400">
          ELARIS
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-[-0.04em] text-[#2C2C2C]">
          Settings
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-500">
          The place where the world of Elaris comes together.
        </p>

        {/* About */}

        <div className="mt-12 rounded-[32px] border border-[#efe3d3] bg-[#fffaf3] p-8 shadow-lg">

          <p className="text-sm uppercase tracking-[5px] text-pink-400">
            About
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Elaris
          </h2>

          <p className="mt-5 leading-8 text-gray-600 italic">
            "A world built by choice,
            sustained by love,
            and remembered through legacy."
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Version 1.0.0 • Foundation Release
          </p>

        </div>

        {/* World */}

        <div className="mt-8 rounded-[32px] border border-[#efe3d3] bg-[#fffaf3] p-8 shadow-lg">

          <p className="text-sm uppercase tracking-[5px] text-pink-400">
            The World
          </p>

          <div className="mt-6 space-y-5">

            <div>
              <h3 className="font-bold">ALERA</h3>
              <p className="text-gray-500">Home</p>
            </div>

            <div>
              <h3 className="font-bold">LUMARIS</h3>
              <p className="text-gray-500">Chapters</p>
            </div>

            <div>
              <h3 className="font-bold">ESHORAS</h3>
              <p className="text-gray-500">Memories</p>
            </div>

            <div>
              <h3 className="font-bold">SONARI</h3>
              <p className="text-gray-500">Soundtrack</p>
            </div>

            <div>
              <h3 className="font-bold">VIREL</h3>
              <p className="text-gray-500">Journey</p>
            </div>

          </div>

        </div>

        {/* Release */}

        <div className="mt-8 rounded-[32px] border border-[#efe3d3] bg-[#fffaf3] p-8 shadow-lg">

          <p className="text-sm uppercase tracking-[5px] text-pink-400">
            Version 1.0
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Foundation Release
          </h2>

          <ul className="mt-6 space-y-3 text-gray-600">

            <li>✓ Reading Experience</li>
            <li>✓ Memory Threads</li>
            <li>✓ Journey Timeline</li>
            <li>✓ Memories</li>
            <li>✓ Soundtrack</li>
            <li>✓ Continue Reading</li>
            <li>✓ Installable PWA</li>

          </ul>

        </div>

        {/* Creator */}

        <div className="mt-8 rounded-[32px] border border-[#efe3d3] bg-[#fffaf3] p-8 shadow-lg">

          <p className="text-sm uppercase tracking-[5px] text-pink-400">
            CREATOR
          </p>

          <h2 className="mt-3 text-2xl font-bold">
            Built with intention.
          </h2>

          <p className="mt-5 text-gray-600">
            Designed and built by
          </p>

          <h3 className="mt-1 text-xl font-bold">
            Matty Maverick - Nyingo Wakho
          </h3>

          <p className="mt-5 text-gray-600">
            For
          </p>

          <h3 className="mt-1 text-xl font-bold">
            Skylar Grey Mubanga
          </h3>

        </div>

        {/* Footer */}

        <div className="mt-12 text-center">

            <h2 className="text-2xl font-bold">
              Every chapter begins with a choice.
            </h2>

            <p className="mt-5 text-sm font-medium text-[#6b5b95]">
              Elaris Version 1.0
            </p>

            <p className="mt-1 text-xs text-gray-400">
              Released • 21 July 2026
            </p>

            <p className="mt-3 text-xs text-gray-400">
              © 2026 Blxckglitters-Creation
            </p>

        </div>

      </div>
    </section>
  );
}