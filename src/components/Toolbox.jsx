import expandedIcon from '../assets/images/expanded.svg';
import collapsedIcon from '../assets/images/closed.svg';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '2em',
    padding: '1rem',
    backgroundColor: 'rgb(254, 226, 226)',
    borderRadius: '0.75rem',
    fontFamily: 'Single Day, cursive',
    height: '20vh',
    marginLeft: '1.25rem',
    marginTop: '1.25rem',
    transition: 'height 0.3s ease', // Smooth transition for collapse
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
  },
  space: {
    width: '100%',
    height: 'calc(100% - 2rem)',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    transition: 'max-height 0.3s ease',
  },
};

const Toolbox = ({ isExpanded, toggleExpand }) => {
  return (
    <div style={{ ...styles.container, height: isExpanded ? '20vh' : '2em' }}>
      <div style={styles.header} onClick={toggleExpand}>
        <h1 className="text-left text-2xl pb-2">Toolbox</h1>
        <img
          src={isExpanded ? expandedIcon : collapsedIcon}
          alt="Toggle arrow"
          style={{
            transform: isExpanded ? 'rotate(0deg)' : 'rotate(180deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </div>
      {isExpanded && <div style={styles.space}></div>}
    </div>
  );
};

export default Toolbox;
