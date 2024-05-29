const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="mt-20 flex flex-col items-center w-full mx-auto"
    >
      <div className="flex items-center gap-5">
        <span className="w-40 h-[2px] bg-gradient-to-r from-white to-black/70 rounded-full"></span>
        <p className="border px-8 py-2 rounded-full drop-shadow-md font-bold uppercase">
          Testimonials
        </p>
        <span className="w-40 h-[2px] bg-gradient-to-r from-black/70 to-white rounded-full"></span>
      </div>
      <h1 className="text-center text-5xl font-bold mt-10">
        What our Clients Say
      </h1>
      <p className="text-center mt-5 text-gray-700/90">
        Discover how SmartHire has transformed the recruitment process for
        companies around the globe.
        <br /> Hear from our satisfied clients about their experiences and
        successes.
      </p>

      <div className="px-10 mt-16 grid grid-cols-3 gap-5">
        <div className="border p-8 flex flex-col w-[380px] rounded-lg drop-shadow-md">
          <div className="flex gap-4 items-center">
            <img
              src="assets/man1.jpg"
              alt="man-1"
              className="h-20 w-20 rounded-full border-2 border-white drop-shadow-xl"
            />
            <div>
              <h1 className="text-xl font-bold">John Doe</h1>
              <p className="text-gray-700/70">HR Manager at TechCorp</p>
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            "SmartHire has revolutionized our hiring process. The advanced
            candidate search and user-friendly interface have saved us countless
            hours. Highly recommend it!"
          </p>
        </div>

        <div className="border p-8 flex flex-col w-[380px] rounded-lg drop-shadow-md">
          <div className="flex gap-4 items-center">
            <img
              src="assets/woman1.jpg"
              alt="womman-1"
              className="h-20 w-20 rounded-full border-2 border-white drop-shadow-xl"
            />
            <div>
              <h1 className="text-xl font-bold">Jane Smith</h1>
              <p className="text-gray-700/70">
                Talent Acquisition Lead at FinTech Inc.
              </p>
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            "Using SmartHire has significantly improved our recruitment
            efficiency. The analytics and reporting features provide valuable
            insights, helping us make informed decisions quickly."
          </p>
        </div>

        <div className="border p-8 flex flex-col w-[380px] rounded-lg drop-shadow-md">
          <div className="flex gap-4 items-center">
            <img
              src="assets/man2.jpg"
              alt="man-2"
              className="h-20 w-20 rounded-full border-2 border-white drop-shadow-xl"
            />
            <div>
              <h1 className="text-xl font-bold">Michael Brown</h1>
              <p className="text-gray-700/70">CEO at Innovatech</p>
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            "SmartHire's comprehensive features and intuitive design have
            transformed the way we hire. Our recruitment process is now faster
            and more effective than ever."
          </p>
        </div>

        <div className="border p-8 flex flex-col w-[380px] rounded-lg drop-shadow-md">
          <div className="flex gap-4 items-center">
            <img
              src="assets/woman2.jpg"
              alt="woman-2"
              className="h-20 w-20 rounded-full border-2 border-white drop-shadow-xl"
            />
            <div>
              <h1 className="text-xl font-bold">Laura Martinez</h1>
              <p className="text-gray-700/70">
                HR Director at Creative Solutions
              </p>
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            "The ability to customize job postings and the detailed candidate
            profiles have made a huge difference in our recruitment efforts.
            SmartHire is a game-changer!"
          </p>
        </div>

        <div className="border p-8 flex flex-col w-[380px] rounded-lg drop-shadow-md">
          <div className="flex gap-4 items-center">
            <img
              src="assets/man3.jpg"
              alt="man-3"
              className="h-20 w-20 rounded-full border-2 border-white drop-shadow-xl"
            />
            <div>
              <h1 className="text-xl font-bold">Chris Lee</h1>
              <p className="text-gray-700/70">
                Talent Manager at Tech Innovators
              </p>
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            "The collaboration tools and interview scheduling features have
            greatly enhanced our team's productivity. SmartHire truly
            understands the needs of modern recruiters."
          </p>
        </div>

        <div className="border p-8 flex flex-col w-[380px] rounded-lg drop-shadow-md">
          <div className="flex gap-4 items-center">
            <img
              src="assets/woman3.jpg"
              alt="woman-3"
              className="h-20 w-20 rounded-full border-2 border-white drop-shadow-xl"
            />
            <div>
              <h1 className="text-xl font-bold">Sarah Kim</h1>
              <p className="text-gray-700/70">
                Recruitment Specialist at Market Leaders
              </p>
            </div>
          </div>
          <p className="mt-6 text-gray-600">
            "We love the advanced search functionality and the detailed
            analytics. SmartHire has provided us with the tools we need to find
            the best candidates quickly and efficiently."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
