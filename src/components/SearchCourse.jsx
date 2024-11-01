import Courses from '../components/Courses';

const courseData = Array.from({ length: 2000 }, (_, index) => ({
  id: `Test ${index + 1}`,
  name: `CourseName ${index + 1}`,
  credits: 4,
  description: `This is a brief description of Course ${index + 1}.`,
}));

const SearchCourse = () => {
  return (
    <div className="bg-red-100 bg-contain w-6/12 p-7 ml-5 rounded-xl">
      <h1 className="text-left text-4xl">Search Course</h1>
      <input
        type="text"
        className="drop-shadow-md w-full p-3 rounded-lg"
        placeholder="Find Courses Here..."
      />
      <div>
        <Courses courses={courseData} />
      </div>
    </div>
  );
};

export default SearchCourse;
