const Login = ({ setIsLoggedIn }) => {
  return (
    <button
      onClick={() => {
        setIsLoggedIn(true);
      }}
    >
      Login
    </button>
  );
};

export default Login;
