import { LogInIcon, SearchIcon, UserIcon } from "lucide-react";

const Features = () => {
  return (
    <div className="mt-20 flex flex-col items-center" id="features">
      <div className="flex items-center gap-5">
        <span className="w-40 h-[2px] bg-gradient-to-r from-white to-black/70 rounded-full"></span>
        <p className="border px-8 py-2 rounded-full drop-shadow-md font-bold uppercase">
          Features
        </p>
        <span className="w-40 h-[2px] bg-gradient-to-r from-black/70 to-white rounded-full"></span>
      </div>
      <h1 className="text-center text-5xl font-bold mt-10">
        Features that Drive Hiring Process
      </h1>
      <p className="text-center mt-5 text-gray-700/90">
        Our advanced tools streamline your hiring process, saving you time and
        resources.
        <br />
        Experience seamless recruitment with SmartHire.
      </p>
      <div className="px-20 grid grid-cols-3 w-full mt-16">
        <div className="p-8 flex flex-col items-center border-r-2">
          <SearchIcon size={30} className="hover:scale-110" />
          <h2 className="mt-4 text-xl font-semibold text-center">
            Advanced Candidate Search
          </h2>
          <p className="text-center text-gray-600/90 mt-2 text-sm">
            Search by location, job role, skills, and experience.
          </p>
        </div>

        <div className="p-8 flex flex-col items-center">
          <img
            src="src/assets/icons8-interview.png"
            alt=""
            className="h-[30px] hover:scale-110"
          />
          <h2 className="mt-4 text-xl font-semibold text-center ">
            Interview Scheduling
          </h2>
          <p className="text-center text-gray-600/90 mt-2 text-sm">
            Schedule interviews and send invites.
          </p>
        </div>

        <div className="p-8 flex flex-col items-center border-l-2">
          <LogInIcon size={30} className="hover:scale-110" />
          <h2 className="mt-4 text-xl font-semibold text-center">
            Secure Login and Registration
          </h2>
          <p className="text-center text-gray-600/90 mt-2 text-sm">
            User-friendly, secure access for companies.
          </p>
        </div>

        <div className="p-8 flex flex-col items-center border-t-2 border-r-2">
          <img
            src="src/assets/icons8-permanent-job.png"
            alt="permanent-job"
            className="h-[30px] hover:scale-110"
          />
          <h2 className="mt-4 text-xl font-semibold text-center">
            Job Posting Management
          </h2>
          <p className="text-center text-gray-600/90 mt-2 text-sm">
            Create and manage job postings easily.
          </p>
        </div>

        <div className="p-8 flex flex-col items-center border-t-2">
          <UserIcon size={30} className="hover:scale-110" />
          <h2 className="mt-4 text-xl font-semibold text-center">
            Candidate Profiles
          </h2>
          <p className="text-center text-gray-600/90 mt-2 text-sm">
            Detailed resumes, skills, and experience
          </p>
        </div>

        <div className="p-8 flex flex-col items-center border-t-2 border-l-2">
          <img
            src="src/assets/icons8-collaboration.png"
            alt=""
            className="h-[30px] hover:scale-110"
          />
          <h2 className="mt-4 text-xl font-semibold text-center ">
            Collaboration Tools
          </h2>
          <p className="text-center text-gray-600/90 mt-2 text-sm">
            Team notes and comments on profiles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
