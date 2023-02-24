export default function Numbers() {
  return (
    <div className="bg-[#006E90] w-full p-12 flex items-center justify-around flex-wrap gap-3 py-24">
      <h2 className="text-3xl text-white font-bold font-sora max-w-xs">
        Join the winning school now
      </h2>
      <div className="flex text-white flex-wrap gap-3">
        <span className="flex flex-col items-center justify-center text-3xl text-white font-bold">
          3000+
          <span className="text-sm text-white font-normal">
            Enrolled Students
          </span>
        </span>
        <span className="flex flex-col items-center justify-center text-3xl text-white font-bold">
          30
          <span className="text-sm text-white font-normal">Staff</span>
        </span>
        <span className="flex flex-col items-center justify-center text-3xl text-white font-bold">
          10,000
          <span className="text-sm text-white font-normal">Global Alumini</span>
        </span>
      </div>
    </div>
  );
}
