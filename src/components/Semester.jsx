const Semester = ({ semester }) => {
  return (
    <div key={semester.id} className="bg-gray-100 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <h2
          className="text-xl pb-2 ml-8 font-semibold cursor-pointer"
          //   onClick={() => openModal(semester)}
        >
          {semester.name}
        </h2>
        <button
          //   onClick={() => deleteSemester(semester.id)}
          className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          <span className="text-white text-xl">X</span>
        </button>
      </div>
      <div className="space-y-2 flex flex-col items-center">
        {semester.courses.map((course, index) => (
          <div
            key={index}
            className="bg-red-300 text-white text-left py-2 px-4 rounded-full w-11/12"
          >
            {course}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Semester;
