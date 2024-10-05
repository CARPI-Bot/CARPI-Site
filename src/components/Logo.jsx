import CARPI from '../assets/images/Transparent_Carpi.svg';
import '../assets/css/Logo.css';

function Header() {
  return (
    <header className="bg-black-600 text-black p-4 flex justify-between">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <img
          className="size-28 rounded-full m-4"
          src={CARPI}
          alt="Filler"
        ></img>
        <h1 className="text-5xl font-bold">CARPI</h1>
      </div>
    </header>
  );
}

export default Header;
// const styles = {
//   image: {
//     width: '2px',
//     height: '2px',
//   },
// };
