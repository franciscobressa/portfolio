function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col items-center p-6">
      {/* Header with photo and name */}
      <div className="flex flex-col items-center mb-10">
        <img
          src="/me.jpg"
          alt="Francisco"
          className="w-40 h-40 rounded-full object-cover shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Francisco</h1>
        <p className="text-md text-center px-[10%]">
          Hi, I'm Francisco 👋. I'm a Full Stack Developer with expertise in
          JavaScript, TypeScript, and modern frameworks like React, Vue, and
          Next.js. I enjoy building scalable systems, focusing on UI/UX and
          clean code. Passionate about agile development, testing, and CI/CD
          practices.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 max-w-lg">
          <a
            href="https://linkedin.com/in/franciscobressa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <a
            href="https://github.com/franciscobressa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors text-sm sm:text-base"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="mailto:bressafrancisco@gmail.com"
            className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z" />
            </svg>
            <span className="hidden sm:inline">Email</span>
          </a>

          <a
            href="https://wa.me/5567998661758"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm sm:text-base"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Projects */}
      <section className="w-full max-w-3xl mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>

        <div className="grid gap-6">
          {/* Ticto Project */}
          <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col md:flex-row items-center">
            <img
              src="/ticto-financial-app.png"
              alt="Ticto Financial App"
              className="rounded-xl w-48 h-32 object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-xl font-semibold">Ticto Financial App</h3>
              <p className="text-gray-600 mb-2">
                Financial control application developed for technical test.
                Allows registering financial records, viewing income, expenses
                and total balance in real time with responsive interface.
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Stacks: Next.js 15, TypeScript, SCSS, CSS Modules, Redux
              </p>
              <div className="flex gap-3">
                <a
                  href="https://ticto-teste-nextjs.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/franciscobressa/ticto-teste-nextjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* Mini Seller Console */}
          <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col md:flex-row items-center">
            <img
              src="/mini-seller-console.png"
              alt="Mini Seller Console"
              className="rounded-xl w-48 h-32 object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-xl font-semibold">Mini Seller Console</h3>
              <p className="text-gray-600 mb-2">
                E-commerce management console for sellers. Provides tools for
                inventory management, order tracking, sales analytics and
                customer relationship management in a modern interface.
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Stacks: React, TypeScript, Node.js, Express, MongoDB
              </p>
              <div className="flex gap-3">
                <a
                  href="https://gitlab.com/franciscobressa/mini-seller-console"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitLab →
                </a>
              </div>
            </div>
          </div>

          {/* Scheduling Module */}
          <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col md:flex-row items-center">
            <img
              src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
              alt="Scheduling Module"
              className="rounded-xl w-48 h-32 object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-xl font-semibold">Scheduling Module</h3>
              <p className="text-gray-600 mb-2">
                Object-oriented task scheduling module built with Node.js and
                TypeScript. Perfect for running periodic jobs or fixed-time
                tasks with logging, retries, and execution reports.
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Stacks: Node.js, TypeScript, JSON Reports
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/franciscobressa/scheduling-module"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* ESLint Plugin Avoid Comments */}
          <div className="bg-white shadow-md rounded-2xl p-4 flex flex-col md:flex-row items-center">
            <img
              src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
              alt="ESLint Plugin Avoid Comments"
              className="rounded-xl w-48 h-32 object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h3 className="text-xl font-semibold">
                ESLint Plugin Avoid Comments
              </h3>
              <p className="text-gray-600 mb-2">
                Custom ESLint plugin that disallows comments with unnecessary
                noise in code. Configurable to allow only specific comment
                prefixes like PENDING, FIXME, and REVIEW to maintain clean and
                meaningful code documentation.
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Stacks: JavaScript, ESLint, Node.js, NPM Package
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/franciscobressa/eslint-plugin-avoid-comments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub →
                </a>
                <a
                  href="https://www.npmjs.com/package/eslint-plugin-avoid-comments"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline"
                >
                  NPM →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="w-full max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            Computer Software Engineering - Greater Dourados University Center
            (2023 - 2026)
          </li>
          <li>
            Web Development Technician - Federal Institute of Education, Science
            and Technology of Mato Grosso do Sul (2017 - 2019)
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
