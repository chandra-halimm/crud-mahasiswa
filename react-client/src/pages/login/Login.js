import "../../style/homeStyle.css";

const Login = () => {
  return (
    <div>
      <div className="container">
        <h1
          className="text-center"
          style={{ marginTop: "20px", color: "#746f6f" }}
        >
          Login Page
        </h1>

        <div className="flex-center">
          <div className="card">
            <form>
              <label>Nip</label>
              <input
                type="number"
                placeholder="masukkan nip anda"
                name="nip"
                required
              />
            </form>
            <form>
              <label>Password</label>
              <input
                type="password"
                placeholder="masukkan password anda"
                name="password"
                required
              />
            </form>
            <button className="button">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
