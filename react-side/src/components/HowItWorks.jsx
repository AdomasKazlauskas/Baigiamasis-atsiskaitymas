import "../App.scss";

function HowItWorks() {
  return (
    <>
      <div className="howItWorks-header">
        <h3 className="section-name">How it works</h3>
        <h1 className="section-title">It's easy like...</h1>
      </div>
      <div className="howItWorks-card-list">
        <div className="howItWorks-card one">
          <h1>...One</h1>
          <h2 className="how-card-name">Register yourself</h2>
          <h4>Signing up requires only your name and password</h4>
        </div>
        <div className="howItWorks-card two">
          <h1>...Two</h1>
          <h2 className="how-card-name">Tell about yourself</h2>
          <h4>Add your story and show why you deserve the money</h4>
        </div>
        <div className="howItWorks-card three">
          <h1>...Three</h1>
          <h2 className="how-card-name">Promote yourself</h2>
          <h4>Allow people to see your story by sharing it</h4>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
