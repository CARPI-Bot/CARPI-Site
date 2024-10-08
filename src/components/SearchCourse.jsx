import Courses from '../components/Courses';
const SearchCourse = () => {
  return (
    <div className="bg-red-100 bg-contain w-6/12 p-7 ml-5 rounded-xl">
      <h1 className="text-left text-4xl  ">Search Course</h1>
      <input
        type="text"
        className="drop-shadow-md w-full p-3 rounded-lg "
        placeholder="Find Courses Here..."
      />
      <div>
        <Courses></Courses>
        <Courses></Courses>
        <Courses></Courses>
        <Courses></Courses>
        <Courses></Courses>
      </div>
    </div>
  );
};

export default SearchCourse;
