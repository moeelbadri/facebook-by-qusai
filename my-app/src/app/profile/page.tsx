import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="content content-full-width">
            {/* Profile Header */}
            <div className="profile">
              <div className="profile-header">
                {/* Profile Header Cover */}
                <div className="profile-header-cover"></div>
                
                {/* Profile Header Content */}
                <div className="profile-header-content">
                  {/* Profile Header Image */}
                  <div className="profile-header-img">
                    <Image id="profile_img" src="/images/dp.jpg" alt="Profile Picture" width={120} height={120} />
                  </div>
                  
                  {/* Profile Header Info */}
                  <div className="profile-header-info">
                    <h4 id="profile_name" className="m-t-10 m-b-5">John Doe</h4>
                    <p id="gender" className="m-b-10">Male</p>
                    <p id="dob" className="m-b-10">Born January 1, 1990</p>
                    <a id="friend_status" className="btn btn-sm btn-info mb-2">Accept friend request</a>
                    <a id="friend_remover" className="btn btn-sm btn-info mb-2">Cancel friend request</a>
                    <a id="friend_blocker" className="btn btn-sm btn-info mb-2">Block</a>
                  </div>
                </div>
                
                {/* Profile Header Tab */}
                <ul className="profile-header-tab nav nav-tabs">
                  <li className="nav-item">
                    <Link href="#" className="nav-link">FRIENDS</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#" className="nav-link">ABOUT</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#" className="nav-link">PHOTOS</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#" className="nav-link">VIDEOS</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="#" className="nav-link active">POSTS</Link>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Profile Content */}
            <div className="profile-content">
              <div className="tab-content p-0">
                {/* Posts Tab */}
                <div className="middle-panel">
                  <div className="tab-pane fade active show" id="profile-posts">
                    {/* Sample Posts */}
                    <div className="post">
                      <div className="post-top d-flex align-items-center p-3">
                        <div className="dp">
                          <Image src="/images/dp.jpg" alt="" width={40} height={40} />
                        </div>
                        <div className="post-info ms-2">
                          <p className="name mb-0">John Doe</p>
                          <span className="time">2 hours ago</span>
                        </div>
                        <i className="fas fa-ellipsis-h ms-auto"></i>
                      </div>
                      <div className="post-content p-3">
                        <p>This is a sample post on my profile page. It shows how the content would look without any JavaScript functionality.</p>
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

                    <div className="post">
                      <div className="post-top d-flex align-items-center p-3">
                        <div className="dp">
                          <Image src="/images/dp.jpg" alt="" width={40} height={40} />
                        </div>
                        <div className="post-info ms-2">
                          <p className="name mb-0">John Doe</p>
                          <span className="time">1 day ago</span>
                        </div>
                        <i className="fas fa-ellipsis-h ms-auto"></i>
                      </div>
                      <div className="post-content p-3">
                        <p>Another sample post to demonstrate the profile page layout. All JavaScript functionality has been removed as requested.</p>
                        <Image src="/images/model.jpg" alt="Post image" width={550} height={300} className="img-fluid rounded" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
