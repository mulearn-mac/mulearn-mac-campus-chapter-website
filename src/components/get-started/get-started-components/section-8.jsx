
function Section8() {
  return (
    <div>
      <p className="Title text-orange fs-3 pt-4">Your mulearn Dashboard</p>

      <p className="description">
        Every mulearn member has their own dashboard/profile at{" "}
        <a href="https://app.mulearn.org" className="text-decoration-none">
          app.mulearn.org
        </a>
        . Here you can see and manage your mulearn related data.
        <p className="dashboardSub fw-600 pt-3">1. Share your profile</p>
        You can share your mulearn profile anywhere. Others can see your total
        karma points, level, etc... using your profile link. You must make your
        profile public profile as well for that. To make it a public profile,
        click on share button and turn on the{" "}
        <strong>Switch to public profile</strong> option. Then you'll get a QR
        code and a public url.
        <p className="dashboardSub fw-600 pt-3">2. Changing Profile Picture</p>
        You can change your Profile Picture from your dashboard.
        <p className="dashboardSub fw-600 pt-3">3. Changing Interest Group</p>
        You can change your Interest Group from the basic details section of
        your dashboard.
        <p className="dashboardSub fw-600 pt-3">4. Changing Basic details</p>
        You can change your Basic details like name, email, etc... from your
        dashboard for that click on the edit icon (pen icon) near your name.
        <p className="dashboardSub fw-600 pt-3">5. View a bunch of data.</p>
        You can also see a bunch of data from your dashboard, like montly karma
        points, order in which you got karma points form different tasks, your
        karma points distribution etc...
        <p className="dashboardSub fw-600 pt-3">
          6. List of completed and incomplete tasks.
        </p>
        You can also see the list of all completed and incomplete tasks in each
        level in the mu Voyage section of your dashboard. You can keep track of
        completed and incompleted tasks there. Also you can see how many karma
        points you need to advance to next level as Goal.
      </p>
    </div>
  );
}

export default Section8;
