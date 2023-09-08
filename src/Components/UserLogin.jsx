import Header from "./Header";

const UserLogin = () => {
  return (
    <>
      <Header />
      <h3>Already a user? </h3>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default UserLogin;
