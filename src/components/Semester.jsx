import Course from './Course';

const Semester = ({ semester, deleteSemester }) => {
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
          onClick={() => deleteSemester(semester.id)}
          className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          <span className="text-white text-xl">X</span>
        </button>
      </div>
      <div className="space-y-2 flex flex-col ">
        {semester.courses.map((course, index) => (
          <Course course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Semester;
