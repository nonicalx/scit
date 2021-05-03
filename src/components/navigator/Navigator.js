import "./navigator.css";
import logo from "../../assets/images/scitSideLogo.svg";
import general from "../../assets/images/generalIcon.svg";
import faculty from "../../assets/images/facultyIcon.svg";
import department from "../../assets/images/departmentIcon.svg";
import programming from "../../assets/images/programmingIcon.svg";
import designs from "../../assets/images/designsIcon.svg";
import networking from "../../assets/images/networkingIcon.svg";
import navListItem from "../../assets/images/navListIcon.svg";
import editProfile from "../../assets/images/editProfileIcon.svg";
import dropArrow from "../../assets/images/dropArrowIcon.svg";

const Navigator = () => {
  return (
    <div className="scit-side-nav">
      <div>
        <img src={logo} alt="scit logo" className="scit-side-logo" />
      </div>
      <section>
        <header>GENERAL</header>
        <article>
          <div className="d-flex align-items-center scit-side-mains">
            <img src={general} alt="general" />
            <p className="scit-main-side-header general-header">General</p>
          </div>
          <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center">
            <img src={faculty} alt="faculty" />
            <p className="scit-main-side-header faculty-header">Faculty</p>
              </div>
            <img src={dropArrow} alt="drop down" className="mr-3" />
          </div>
          <ul className="scit-side-mains scit-sub-list">
            <li className="d-flex align-items-center">
              <img src={navListItem} alt="list item" />
              <p>SCIT</p>
            </li>
            <li className="d-flex align-items-center">
              <img src={navListItem} alt="list item" />
              <p>SAAT</p>
            </li>
            <li className="d-flex align-items-center">
              <img src={navListItem} alt="list item" />
              <p>SEET</p>
            </li>
            <li className="d-flex align-items-center">
              <img src={navListItem} alt="list item" />
              <p>SOPS</p>
            </li>
            <li className="d-flex align-items-center">
              <img src={navListItem} alt="list item" />
              <p>SOBS</p>
            </li>
          </ul>
        </article>

        <article>
          <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center">
            <img src={department} alt="department" />
            <p className="scit-main-side-header edit-header">Department</p>
              </div>
              <img src={dropArrow} alt="drop down" className="mr-3"/>
          </div>
          <ul className="scit-side-mains scit-sub-list">
            <li className="d-flex align-items-center">
              <img src={navListItem} alt="list item" />
              <p>Computer Science</p>
            </li>
            <li className="d-flex align-items-center">
              <img src={navListItem} alt="list item" />
              <p>Software Engr</p>
            </li>
          </ul>
        </article>
      </section>
      <section>
        <header>OTHERS</header>
        <article>
          <ul>
            <li className="d-flex align-items-center">
              <img src={programming} alt="programming" />
              <p className="scit-main-side-header orange-header">Programming</p>
            </li>
            <li className="d-flex align-items-center">
              <img src={designs} alt="designs" />
              <p className="scit-main-side-header faculty-header">Designs(UI/UX)</p>
            </li>
            <li className="d-flex align-items-center">
              <img src={networking} alt="networking" />
              <p className="scit-main-side-header orange-header">Networking</p>
            </li>
          </ul>
        </article>
      </section>
      <section>
        <header>NEW FORUM</header>
        <article>
          <ul>
            <li className="d-flex align-items-center">
              <img src={navListItem} alt="list item" />
              <p className="scit-main-side-header general-header">Create New Forum</p>
            </li>
          </ul>
        </article>

        <header>HELP AND ACCOUNT</header>
        <article>
          <ul>
            <li className="d-flex align-items-center">
              <img src={editProfile} alt="edit profile" />
              <p className="scit-main-side-header edit-header">Edit Profile</p>
            </li>
          </ul>
        </article>
      </section>
      <section>
        <header>SERVICES</header>
        <article>
          <p className="service-txt mb-4 mt-2">Terms of Services</p>
          <p className="service-txt mb-1">Privacy Policy</p>
        </article>
      </section>
    </div>
  );
};

export { Navigator };
