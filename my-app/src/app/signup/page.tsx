import Link from "next/link";

export default function Signup() {
  return (
    <section className="container">
      <div className="textheader text-center mb-4">
        <h1>Create an account</h1>
        <p>It's quick and easy</p>
      </div>
      
      <form className="form">
        <div className="input-box">
          <input type="text" className="form-control" placeholder="Enter full name" required />
        </div>
        
        <div className="input-box">
          <input type="email" className="form-control" placeholder="Enter email address" required />
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <div className="input-box">
              <input type="tel" className="form-control" placeholder="Enter phone number" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-box">
              <input type="date" className="form-control" placeholder="Enter birth date" required />
            </div>
          </div>
        </div>
        
        <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" defaultChecked />
              <label htmlFor="check-male">Male</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label htmlFor="check-female">Female</label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label htmlFor="check-other">Prefer not to say</label>
            </div>
          </div>
        </div>
        
        <div className="input-box address">
          <input type="text" className="form-control" placeholder="Enter street address" required />
          <input type="text" className="form-control" placeholder="Enter street address line 2" required />
          
          <div className="row">
            <div className="col-md-6">
              <div className="select-box">
                <select className="form-control">
                  <option hidden>Country</option>
                  <option>America</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>Nepal</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Enter your city" required />
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Enter your region" required />
            </div>
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Enter postal code" required />
            </div>
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary btn-lg w-100">Submit</button>
      </form>
    </section>
  );
}
