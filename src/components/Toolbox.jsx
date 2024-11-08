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
  },
  heading: {
    textAlign: 'left',
    margin: '0px',
  },
  space: {
    width: '100%',
    height: 'calc(100% - 2rem)',
    backgroundColor: 'white',
    borderRadius: '0.5rem',
  },
};

const Toolbox = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Toolbox</h1>
      <div></div>
      <div style={styles.space}></div>
    </div>
  );
};

export default Toolbox;
