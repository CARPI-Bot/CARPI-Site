import Courses from '../components/Courses';

const courseData = Array.from({ length: 2000 }, (_, index) => ({
  id: `Test ${index + 1}`,
  name: `CourseName ${index + 1}`,
  credits: 4,
  description: `This is a brief description of Course ${index + 1}.`,
}));

const SearchCourse = () => {
  return (
    <div className="bg-red-100 bg-contain w-6/12 p-5 ml-8 rounded-xl min-h-[600px]">
      <h1 className="text-left text-2xl pb-2">Search Courses</h1>
      <input
        type="text"
        className="drop-shadow-md w-full p-3 rounded-lg text-xs"
        placeholder="Find Courses Here..."
      />
      <div className="mt-4">
        <Courses courses={courseData} />
      </div>
    </div>
  );
};

export default SearchCourse;
