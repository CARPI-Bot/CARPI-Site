import Courses from '../components/Courses';
const SearchCourse = () => {
  return (
    <div className="bg-red-100 bg-contain w-5/12 p-5 ml-10 rounded-xl">
      <h1 className="text-left text-2xl pb-2 ">Search Courses</h1>
      <input
        type="text"
        className="drop-shadow-md w-full p-3 rounded-lg text-xs"
        placeholder="Find Courses Here..."
      />
      <div>
        <Courses></Courses>
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
