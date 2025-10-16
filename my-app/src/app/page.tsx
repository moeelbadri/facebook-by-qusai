import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div className="container-fluid d-flex align-items-center">
          {/* Logo and Search Container */}
          <div className="d-flex align-items-center">
            <div className="navbar-brand">
              <svg  height="25" viewBox="0 0 374.6666666666667 86.94707616144498" className="css-1j8o68f"><defs id="SvgjsDefs2774"></defs><g id="SvgjsG2775" requiredFeatures="nRdZyp-0" transform="matrix(2.7170961300451557,0,0,2.7170961300451557,-1.8068689847825865,0)" fill="#3fc1c9"><g xmlns="http://www.w3.org/2000/svg" display="none"><rect x="-111.333" y="-60.667" display="inline" fill="#3fc1c9" width="473.333" height="236"></rect></g><g xmlns="http://www.w3.org/2000/svg" display="none"><g display="inline"><path fill="#3fc1c9" d="M31.335,4.35L16,0v0l0,0l0,0v0L0.665,4.35C0.665,4.35,1.58,19.376,16,32v0l0,0l0,0v0    C30.42,19.376,31.335,4.35,31.335,4.35z"></path><path fill="#3fc1c9" d="M16,0L16,0L16,0L16,0L16,0L0.665,4.35C0.665,4.35,1.58,19.376,16,32v0l0,0l0,0v0"></path></g><g display="inline"><polygon fill="#3fc1c9" points="16,5.651 17.654,11.187 23.005,11.187 18.676,14.608 20.329,20.144 16,16.723 11.671,20.144     13.324,14.608 8.995,11.187 14.346,11.187   "></polygon></g></g><g xmlns="http://www.w3.org/2000/svg" display="none"><g display="inline"><g><path fill="#3fc1c9" d="M16,1.04l14.25,4.042c-0.179,1.354-0.703,4.332-2.14,8.082C26.351,17.758,22.83,24.461,16,30.66     c-6.83-6.199-10.35-12.902-12.11-17.496C2.453,9.413,1.929,6.435,1.75,5.082L16,1.04 M16,0L16,0L16,0L16,0L0.665,4.35     C0.665,4.35,1.58,19.376,16,32v0l0,0l0,0v0C30.42,19.376,31.335,4.35,31.335,4.35L16,0L16,0L16,0z"></path></g></g><g display="inline"><path fill="#3fc1c9" d="M16,9.145l0.696,2.328l0.213,0.714h0.745h2.473l-2.071,1.637l-0.532,0.421l0.194,0.65l0.747,2.502    l-1.845-1.458L16,15.448l-0.62,0.49l-1.845,1.458l0.747-2.502l0.194-0.65l-0.532-0.421l-2.071-1.637h2.473h0.745l0.213-0.714    L16,9.145 M16,5.651l-1.654,5.536H8.995l4.329,3.421l-1.654,5.536L16,16.723l4.329,3.421l-1.654-5.536l4.329-3.421h-5.351    L16,5.651L16,5.651z"></path></g></g><g xmlns="http://www.w3.org/2000/svg" display="none"><g display="inline"><path fill="#3fc1c9" d="M16,31.333C3.504,20.197,1.478,7.144,1.203,4.717L16,0.52l14.797,4.197    C30.522,7.144,28.496,20.197,16,31.333z"></path><g><path d="M16,1.04l14.25,4.042c-0.179,1.354-0.703,4.332-2.14,8.082C26.351,17.758,22.83,24.461,16,30.66     c-6.83-6.199-10.35-12.902-12.11-17.496C2.453,9.413,1.929,6.435,1.75,5.082L16,1.04 M16,0L16,0L16,0L16,0L0.665,4.35     C0.665,4.35,1.58,19.376,16,32v0l0,0l0,0v0C30.42,19.376,31.335,4.35,31.335,4.35L16,0L16,0L16,0z"></path></g></g><g display="inline"><polygon fill="#3fc1c9" points="16,16.085 12.604,18.771 13.9,14.427 10.434,11.687 14.719,11.687 16,7.398 17.281,11.687     21.566,11.687 18.1,14.427 19.396,18.771   "></polygon><g><path fill="#3fc1c9" d="M16,9.145l0.696,2.328l0.213,0.714h0.745h2.473l-2.071,1.637l-0.532,0.421l0.194,0.65l0.747,2.502     l-1.845-1.458L16,15.448l-0.62,0.49l-1.845,1.458l0.747-2.502l0.194-0.65l-0.532-0.421l-2.071-1.637h2.473h0.745l0.213-0.714     L16,9.145 M16,5.651l-1.654,5.536H8.995l4.329,3.421l-1.654,5.536L16,16.723l4.329,3.421l-1.654-5.536l4.329-3.421h-5.351     L16,5.651L16,5.651z"></path></g></g></g><g xmlns="http://www.w3.org/2000/svg"><path d="M16,0L16,0L16,0L16,0L16,0L0.665,4.35C0.665,4.35,1.58,19.375,16,32v0l0,0l0,0v0C30.42,19.375,31.335,4.35,31.335,4.35   L16,0z M16,16.723l-4.329,3.421l1.654-5.536l-4.329-3.421h5.351L16,5.651l1.654,5.536h5.351l-4.329,3.421l1.654,5.536L16,16.723z"></path></g></g><g id="SvgjsG2776" requiredFeatures="Q4qmbg-0" transform="matrix(3.213859671755231,0,0,3.213859671755231,106.2645147504854,2.9665477241653306)" fill="#364f6b"><path d="M6.94 5.82 l0 2.34 c-0.42 -0.38 -1.08 -0.4 -1.26 -0.4 c-1.02 0 -1.08 1.08 -1.08 1.9 l0 0.46 l2.34 0 l0 2.44 l-2.34 0 l0 7.44 l-2.96 0 l0 -7.44 l-1.1 0 l0 -2.44 l1.1 0 l0 -0.46 c0 -3.12 1.16 -4.36 3.68 -4.36 c0.6 0 1.16 0.24 1.62 0.52 z M10.467708333333333 13.04 l-2.2 -1.26 c1.1 -1.24 2.58 -1.82 4.12 -1.82 c2.96 0 4.16 1.62 4.16 3.14 l0 6.9 l-2.96 0 l0 -0.7 c-0.46 0.48 -1.28 0.84 -2.2 0.84 c-2.7 0 -3.74 -1.2 -3.74 -3.04 c0 -2.08 1.68 -3.48 4.4 -3.48 l1.54 0 c0 -0.74 -0.56 -1.22 -1.4 -1.22 c-0.86 0 -1.28 0.16 -1.72 0.64 z M13.587708333333332 16.740000000000002 l0 -0.88 l-1.74 0 c-0.78 0 -1.36 0.54 -1.24 1.3 c0.08 0.54 0.56 0.76 1.24 0.76 c1.3 0 1.74 -0.74 1.74 -1.18 z M25.215416666666663 16.46 l2.08 1.88 c-1.12 1.24 -2.58 1.82 -4.14 1.82 c-2.88 0 -5.2 -2.16 -5.2 -5.08 s2.32 -5.1 5.2 -5.1 c1.56 0 3.02 0.58 4.14 1.82 l-2.08 1.88 c-0.44 -1.02 -1.4 -1.26 -2.06 -1.26 c-1.22 0 -2.24 1.08 -2.24 2.66 c0 1.56 1.02 2.64 2.24 2.64 c0.66 0 1.64 -0.18 2.06 -1.26 z M38.38312499999999 15.08 l0 0.66 l-7.04 0 c0 1.16 1.18 1.98 2.16 1.98 c0.96 0 1.84 -0.38 2.3 -1.22 l1.98 1.82 c-0.8 1.08 -2.02 1.84 -4.28 1.84 c-3.24 0 -5.22 -2.16 -5.22 -5.08 s1.92 -5.1 5.04 -5.1 s5.06 2.14 5.06 5.1 z M31.403124999999996 13.86 l3.88 0 c-0.16 -0.94 -0.84 -1.44 -1.96 -1.44 c-1.08 0 -1.74 0.58 -1.92 1.44 z M44.790833333333325 9.98 c2.9 0 4.82 2.18 4.82 5.1 s-2.12 5.08 -5.02 5.08 c-0.64 0 -1.72 -0.36 -2.04 -0.82 l0 0.66 l-2.96 0 l0 -14.52 l2.96 0 l0 5.34 c0.34 -0.5 1.62 -0.84 2.24 -0.84 z M44.390833333333326 17.92 c1.24 0 2.26 -1.28 2.26 -2.84 c0 -1.58 -1.02 -2.86 -2.26 -2.86 c-1.36 0 -2.24 1.54 -2.24 2.86 s0.9 2.84 2.24 2.84 z M55.73854166666666 12.42 c-1.22 0 -2.24 1.08 -2.24 2.66 c0 1.56 1.02 2.64 2.24 2.64 c1.24 0 2.26 -1.08 2.26 -2.64 c0 -1.58 -1.02 -2.66 -2.26 -2.66 z M55.73854166666666 9.98 c2.9 0 5.22 2.18 5.22 5.1 s-2.32 5.08 -5.22 5.08 c-2.88 0 -5.2 -2.16 -5.2 -5.08 s2.32 -5.1 5.2 -5.1 z M66.82624999999999 12.42 c-1.22 0 -2.24 1.08 -2.24 2.66 c0 1.56 1.02 2.64 2.24 2.64 c1.24 0 2.26 -1.08 2.26 -2.64 c0 -1.58 -1.02 -2.66 -2.26 -2.66 z M66.82624999999999 9.98 c2.9 0 5.22 2.18 5.22 5.1 s-2.32 5.08 -5.22 5.08 c-2.88 0 -5.2 -2.16 -5.2 -5.08 s2.32 -5.1 5.2 -5.1 z M79.79395833333332 20 l-3.2 -4.06 c-0.08 0.08 -0.22 0.18 -0.34 0.28 l0 3.78 l-2.98 0 l0 -14.52 l2.98 0 l0 7.12 l2.84 -2.48 l4.42 0 l-4.78 4 c1.46 1.8 3.38 4.14 4.78 5.88 l-3.72 0 z"></path></g></svg>
            </div>

            {/* Search Box */}
            <div className="search-container">
              <input className="form-control" type="text" placeholder="Search Mediabook.." style={{width:'300px'}} />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="d-flex align-items-center">
            <Link href="/" className="nav-link active">
              <i className="fa fa-home fs-4"></i>
            </Link>
            <Link href="#" className="nav-link">
              <i className="fa fa-user-friends fs-4"></i>
            </Link>
            <Link href="#" className="nav-link">
              <i className="fa fa-play-circle fs-4"></i>
            </Link>
            <Link href="#" className="nav-link">
              <i className="fa fa-users fs-4"></i>
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="d-flex align-items-center">
            <div className="profile-pic me-2"></div>
            <Link href="#" className="btn btn-light rounded-circle me-2">
              <i className="fa fa-bell"></i>
            </Link>
            <Link href="#" className="btn btn-light rounded-circle">
              <i className="fas fa-ellipsis-h"></i>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="container-fluid bg-light">
        <div className="row">
          {/* Left Panel */}
          <div className="col-md-3 col-lg-2">
            <div className="left-panel">
              <ul className="list-unstyled">
                <li className="d-flex align-items-center p-2 mb-1">
                  <div className="profile-pic me-2"></div>
                  <p className="mb-0">Qusai,Moe</p>
                </li>
                <li className="d-flex align-items-center p-2 mb-1">
                  <i className="fa fa-user-friends me-2"></i>
                  <p className="mb-0">Friends</p>
                </li>
                <li className="d-flex align-items-center p-2 mb-1">
                  <i className="fa fa-play-circle me-2"></i>
                  <p className="mb-0">Videos</p>
                </li>
                <li className="d-flex align-items-center p-2 mb-1">
                  <i className="fa fa-flag me-2"></i>
                  <p className="mb-0">Pages</p>
                </li>
                <li className="d-flex align-items-center p-2 mb-1">
                  <i className="fa fa-users me-2"></i>
                  <p className="mb-0">Groups</p>
                </li>
                <li className="d-flex align-items-center p-2 mb-1">
                  <i className="fa fa-bookmark me-2"></i>
                  <p className="mb-0">Bookmark</p>
                </li>
                <li className="d-flex align-items-center p-2 mb-1">
                  <i className="fab fa-facebook-messenger me-2"></i>
                  <p className="mb-0">Inbox</p>
                </li>
                <li className="d-flex align-items-center p-2 mb-1">
                  <i className="fas fa-calendar-week me-2"></i>
                  <p className="mb-0">Events</p>
                </li>
                <li className="d-flex align-items-center p-2 mb-1">
                  <i className="fa fa-bullhorn me-2"></i>
                  <p className="mb-0">Ads</p>
                </li>
                <li className="d-flex align-items-center p-2 mb-1">
                  <i className="fas fa-hands-helping me-2"></i>
                  <p className="mb-0">Offers</p>
                </li>
                <li className="d-flex align-items-center p-2 mb-1">
                  <i className="fas fa-briefcase me-2"></i>
                  <p className="mb-0">Jobs</p>
                </li>
                <li className="d-flex align-items-center p-2 mb-1">
                  <i className="fa fa-star me-2"></i>
                  <p className="mb-0">Favourites</p>
                </li>
              </ul>

              <div className="footer-links p-2">
                <Link href="#" className="text-decoration-none me-2">Privacy</Link>
                <Link href="#" className="text-decoration-none me-2">Terms</Link>
                <Link href="#" className="text-decoration-none me-2">Advance</Link>
                <Link href="#" className="text-decoration-none">More</Link>
              </div>
            </div>
          </div>

          {/* Middle Panel */}
          <div className="col-md-6 col-lg-7">
            <div className="middle-panel">
              {/* Story Section */}
              <div className="story-section d-flex p-3">
                <div className="story create me-2">
                  <div className="dp-image">
                    <Image src="/images/dp.jpg" alt="Profile pic" width={120} height={160} />
                  </div>
                  <span className="dp-container">
                    <i className="fa fa-plus"></i>
                  </span>
                  <span className="name">Create Story</span>
                </div>

                <div className="story me-2">
                  <Image src="/images/model.jpg" alt="Qusai's Story" width={120} height={200} />
                  <div className="dp-container">
                    <Image src="/images/girl.jpg" alt="" width={40} height={40} />
                  </div>
                  <p className="name">Qusai Sha'ath</p>
                </div>

                <div className="story me-2">
                  <Image src="/images/boy.jpg" alt="Story image" width={120} height={200} />
                  <span className="dp-container">
                    <Image src="/images/dp.jpg" alt="Profile pic" width={40} height={40} />
                  </span>
                  <span className="name">Gaurav Gall</span>
                </div>

                <div className="story me-2">
                  <Image src="/images/mountains.jpg" alt="Story image" width={120} height={200} />
                  <span className="dp-container">
                    <Image src="/images/boy.jpg" alt="Profile pic" width={40} height={40} />
                  </span>
                  <span className="name">Priyank Saksena</span>
                </div>

                <div className="story me-2">
                  <Image src="/images/shoes.jpg" alt="Story image" width={120} height={200} />
                  <span className="dp-container">
                    <Image src="/images/model.jpg" alt="Profile pic" width={40} height={40} />
                  </span>
                  <span className="name">Pragati Adhikari</span>
                </div>
              </div>

              {/* Create Post */}
              <div className="post create">
                <div className="post-top d-flex align-items-center p-3">
                  <div className="dp">
                    <Image src="/images/girl.jpg" alt="" width={40} height={40} />
                  </div>
                  <input className="form-control ms-2" type="text" placeholder="What's on your mind, Aashish ?" />
                </div>
                
                <div className="post-bottom d-flex justify-content-between p-3">
                  <div className="action">
                    <i className="fa fa-video"></i>
                    <span>Live video</span>
                  </div>
                  <div className="action">
                    <i className="fa fa-image"></i>
                    <span>Photo/Video</span>
                  </div>
                  <div className="action">
                    <i className="fa fa-smile"></i>
                    <span>Feeling/Activity</span>
                  </div>
                </div>
              </div>

              {/* Posts Container */}
              <div id="posts-container">
                {/* Sample Post */}
                <div className="post">
                  <div className="post-top d-flex align-items-center p-3">
                    <div className="dp">
                      <Image src="/images/dp.jpg" alt="" width={40} height={40} />
                    </div>
                    <div className="post-info ms-2">
                      <p className="name mb-0">medo elbadri</p>
                      <span className="time">3 days ago</span>
                    </div>
                    <i className="fas fa-ellipsis-h ms-auto">
                      <div className="dropdown">
                        <button className="btn btn-sm">Remove Post</button>
                      </div>
                    </i>
                  </div>
                  <div className="post-content p-3">
                    <div className="unhidden-div">sxdweeeeeeeeeeeeeeeeeeeee</div>
                  </div>
                  <div className="post-bottom d-flex justify-content-between p-3">
                    <div className="action">
                      <i className="far fa-thumbs-up"></i>
                      <span>Like</span>
                    </div>
                    <div className="action">
                      <i className="far fa-comment"></i>
                      <span>Comment</span>
                    </div>
                    <div className="action">
                      <i className="fa fa-share"></i>
                      <span>Share</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-md-3 col-lg-3">
            <div className="right-panel p-3">
              <div className="pages-section mb-3">
                <h4>Your pages</h4>
                <Link className='page d-flex align-items-center text-decoration-none' href="#">
                  <div className="dp">
                    <Image src="/images/logo.png" alt="" width={40} height={40} />
                  </div>
                  <p className="name mb-0 ms-2">page1</p>
                </Link>

                <Link className='page d-flex align-items-center text-decoration-none' href="#">
                  <div className="dp">
                    <Image src="/images/dp.jpg" alt="" width={40} height={40} />
                  </div>
                  <p className="name mb-0 ms-2">Page2</p>
                </Link>
              </div>
              
              <div className="friends-section">
                <h4>Friends</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
