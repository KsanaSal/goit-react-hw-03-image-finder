import PacmanLoader from 'react-spinners/PacmanLoader';

const override = {
  position: 'absolute',
  left: '30%',
  top: '25%',
  display: 'block',
  //   marging: '0 auto',
};
export const Loader = () => {
  return (
    <PacmanLoader
      color='#7404de'
      loading={true}
      cssOverride={override}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
