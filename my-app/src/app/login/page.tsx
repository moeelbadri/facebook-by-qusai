import Link from "next/link";

export default function Login() {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="facebook-page d-flex">
        <div className="text me-5">
          <h1 className="display-1 text-primary mb-3">Facebook</h1>
          <p className="fs-4">Connect with friends and the world</p>
          <p className="fs-4">around you on Facebook.</p>
        </div>
        
        <form className="bg-white p-4 rounded shadow">
          <div className="mb-3">
            <input className="form-control form-control-lg" type="email" placeholder="Email or phone number" required />
          </div>
          <div className="mb-3">
            <input className="form-control form-control-lg" type="password" placeholder="Password" required />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary btn-lg">Login</button>
          </div>
          <div className="text-center mb-3">
            <Link href="#" className="text-decoration-none">Forgot password?</Link>
          </div>
          <hr />
          <div className="text-center">
            <Link href="/signup" className="btn btn-success btn-lg">Create new account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
