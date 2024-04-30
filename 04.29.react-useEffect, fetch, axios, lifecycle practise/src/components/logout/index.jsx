const Logout = ({ setIsLoggedIn }) => {
  return (
    <button
      onClick={() => {
        setIsLoggedIn(false);
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
