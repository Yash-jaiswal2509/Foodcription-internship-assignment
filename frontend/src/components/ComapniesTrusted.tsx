const ComapniesTrusted = () => {
  return (
    <div className="mt-12">
      <p className="text-center text-xl text-gray-600/70 font-semibold">Trusted By 25000+ Comapnies Around The World</p>
      <div className="mx-20 flex justify-between mt-8 opacity-90">
        <span className="flex items-center gap-1">
          <img src="src\assets\icons8-meta.svg" className="h-[40px] " alt="meta" />
          <p className="text-2xl font-bold text-gray-600/90">Meta</p>
        </span>
        <span className="flex items-center gap-1">
          <img src="src\assets\icons8-adobe.svg" className="h-[40px] " alt="adobe" />
          <p className="text-2xl font-bold text-gray-600/90">Adobe</p>
        </span>
        <span className="flex items-center gap-1">
          <img
            src="src\assets\icons8-netapp.svg"
            className="h-[40px] "
            alt="netapp"
          />
          <p className="text-2xl font-bold text-gray-600/90">NetApp</p>
        </span>
        <span className="flex items-center gap-1">
          <img
            src="src\assets\icons8-netflix.svg"
            className="h-[40px]"
            alt="netflix"
          />
          <p className="text-2xl font-bold text-gray-600/90">Netflix</p>
        </span>
        <span className="flex items-center gap-1">
          <img
            src="src\assets\icons8-google.svg"
            className="h-[40px] "
            alt="google"
          />
          <p className="text-2xl font-bold text-gray-600/90">Google</p>
        </span>
        <span className="flex items-center gap-1">
          <img
            src="src\assets\icons8-microsoft.svg"
            className="h-[40px] "
            alt="microsoft"
          />
          <p className="text-2xl font-bold text-gray-600/90">Microsoft</p>
        </span>
      </div>
    </div>
  );
};

export default ComapniesTrusted;
