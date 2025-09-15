const jwt = localStorage.getItem('jwt'); // Retrieve the JWT from local storage
if(jwt==="undefined"){
    console.log("undenifed")
    window.location.href = '/login.html';
}else if(jwt =="expired"){
    console.log(jwt)
    localStorage.removeItem('jwt')
    window.location.href = '/login';
}else{
  verifylogin(jwt);
}
let last_post_id=0;
let profileid = (window.location.search.substring(1)).split("=")[1];
getprofile(1,profileid);
async function addfriend(){
    const response=postData("/user/addfriendship",{jwt:localStorage.getItem('jwt'),profile_id:profileid});
    const text = await response;
    if(text[1]==1){
        document.getElementById("friend_remover").style.display=""
        document.getElementById("friend_status").style.display="none"
    }
    window.location.href=window.location.href;
}
async function acceptfriend(){
    const response=postData("/user/acceptfriendship",{jwt:localStorage.getItem('jwt'),profile_id:profileid});
    const text = await response;
    console.log(text)
    window.location.href=window.location.href;
}
async function removefriend(){
    const response=postData("/user/removefriendship",{jwt:localStorage.getItem('jwt'),profile_id:profileid});
    const text = await response;
    console.log(text)
    window.location.href=window.location.href;
}
async function blockfriend(){
    const response=postData("/user/blockfriendship",{jwt:localStorage.getItem('jwt'),profile_id:profileid});
    const text = await response;
    console.log(text)
}

async function getprofile(Page,profileid){
    const response=postData("/user/getprofile",{jwt:localStorage.getItem('jwt'),profile_id:profileid,page:Page})
    const text = await response;
    console.log(text)
    console.log(text[0][0].status)
    updateprofile(text[0][0],text);

   let showMoreLinks = document.querySelectorAll('.show-more');
  showMoreLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          // Use "this" to reference the clicked link
          var hiddenDiv = link.parentElement.querySelector('.hidden-div');
          var unhiddenDiv = link.parentElement;
          if (hiddenDiv) {
            console.log(hiddenDiv.innerHTML)
            link.style.display = 'none';
            unhiddenDiv.innerHTML+=hiddenDiv.innerHTML;
          }
      });
  });
  }
  async function updateprofile(data,posts){
    console.log(data,posts)
   document.getElementById("profile_name").innerHTML=data.full_name;
   if(data.profile_pic){
    document.getElementById("profile_img").src=data.profile_pic;
   }else{
    if(data.gender=="Male"){
        document.getElementById("profile_img").src="./images/model.jpg";
    }else if(data.gender=="Female"){
        document.getElementById("profile_img").src="./images/girl.jpg";
    }else{
        document.getElementById("profile_img").src="./images/shoes.jpg";
    }
   }
   document.getElementById("gender").innerHTML=data.gender;
   document.getElementById("dob").innerHTML="born in "+data.date_of_birth;
   if(data.status=="accepted"){
    document.getElementById("friend_remover").innerHTML="remove";
    document.getElementById("friend_status").innerHTML="Friends";
    console.log(posts[1])
    posts[1].forEach((element,index) => {
        console.log(element)
            createpost(element.full_name,element.content,element.user_id,element.created_at,element.updated_at)
        
       });
   }else if(data.status=="pending"){
    document.getElementById("friend_status").style.display="none"
    document.getElementById("friend_status").setAttribute("onclick", "");

   }else if(data.status=="incoming"){
    document.getElementById("friend_status").setAttribute("onclick", "acceptfriend()");

   }else if(data.status=="profile"){
    console.log(data)
    document.getElementById("friend_status").style.display="none"
    document.getElementById("friend_remover").style.display="none"
    document.getElementById("friend_blocker").style.display="none"
    console.log(posts[1])
    posts[1].forEach((element,index) => {
        if(index!=0){
            console.log(element)
            createpost(element.full_name,element.content,element.user_id,element.created_at,element.updated_at)
        }
       });
   }else{
    document.getElementById("friend_remover").style.display="none"
    document.getElementById("friend_status").innerHTML="add friend";
    document.getElementById("friend_status").setAttribute("onclick", "addfriend()");
   }
  }
  async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }



function createpost(full_name,content,user_id,created_at,updated_at){
    // Create the main post container div
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    
    // Create the post top section
    const postTopDiv = document.createElement('div');
    postTopDiv.className = 'post-top';
    
    // Create the dp div
    const dpDiv = document.createElement('div');
    dpDiv.className = 'dp';
    
    // Create the image element within the dp div
    const img = document.createElement('img');
    img.src = './images/dp.jpg';
    img.alt = '';
    
    // Append the image to the dp div
    dpDiv.appendChild(img);
    
    // Create the post-info div
    const postInfoDiv = document.createElement('div');
    postInfoDiv.className = 'post-info';
    
    // Create the name paragraph
    const nameParagraph = document.createElement('p');
    nameParagraph.className = 'name';
    nameParagraph.textContent = full_name;
    
    // Create the time span
    const now = new Date();
    let currenttime = (now.toISOString());
    
    let timecontent;
    const timeDifferenceInMilliseconds = ((new Date(currenttime) -  new Date(created_at))/(1000*3600))-3;
    console.log(timeDifferenceInMilliseconds)
    if(timeDifferenceInMilliseconds*3600<=60){
      timecontent =" secs ago"
    }else if  (timeDifferenceInMilliseconds*60<=60){
      timecontent = Math.round(timeDifferenceInMilliseconds*60) + " mins ago"
    }else if(timeDifferenceInMilliseconds<=24){
      timecontent = Math.round(timeDifferenceInMilliseconds) + " hours ago"
    }else if(timeDifferenceInMilliseconds/24<=7){
      timecontent = Math.round(timeDifferenceInMilliseconds/24) + " days ago"
    }else if(timeDifferenceInMilliseconds/168<=30){
      timecontent = Math.round(timeDifferenceInMilliseconds/168) + " weeks ago"
    }else if(timeDifferenceInMilliseconds/730.484398<=12){
      timecontent = Math.round(timeDifferenceInMilliseconds/730.484398) + " months ago"
    }else{
      timecontent = Math.round(timeDifferenceInMilliseconds/8,765.812776) + " years ago"
    }
    const timeSpan = document.createElement('span');
    timeSpan.className = 'time';
    timeSpan.textContent =timecontent;
    
    
    // Append the name and time to the post-info div
    postInfoDiv.appendChild(nameParagraph);
    postInfoDiv.appendChild(timeSpan);
    
    // Create the ellipsis icon
    const ellipsisIcon = document.createElement('i');
    ellipsisIcon.className = 'fas fa-ellipsis-h';
    
    // Append dp, post-info, and ellipsis icon to the post top section
    postTopDiv.appendChild(dpDiv);
    postTopDiv.appendChild(postInfoDiv);
    postTopDiv.appendChild(ellipsisIcon);
    
    // Create the post content section
    const postContentDiv = document.createElement('div');
    postContentDiv.className = 'post-content';
    const part = content;
    let hiddenpart;
    
    // const part = content.substring(0, 10);
    try{
      console.log(part)
      hiddenpart = content.substring(5555);
    }catch(err){
      console.log(err)
    }
    
    // Create the first content div (visible)
    const contentDiv1 = document.createElement('div');
    contentDiv1.setAttribute('dir', 'auto');
    contentDiv1.style.textAlign = 'start';
    contentDiv1.className='unhidden-div'
    //contentDiv1.innerHTML =part;
    
    // Create the second content div (hidden)
    const contentDiv2 = document.createElement('div');
    contentDiv2.setAttribute('dir', 'auto');
    contentDiv2.style.textAlign = 'start';
    contentDiv2.style.display = 'none';
    contentDiv2.className='hidden-div'
    contentDiv2.innerHTML = hiddenpart;
    // Create the show more link
    
    const showMoreLink = document.createElement('a');
    showMoreLink.className = 'show-more';
    showMoreLink.href = 'javascript:void(0);';
    showMoreLink.style.textDecoration = 'none';
    showMoreLink.textContent = 'Show more';
    
    // Create the post bottom section
    const postBottomDiv = document.createElement('div');
    postBottomDiv.className = 'post-bottom';
    
    // Create the like action
    const likeActionDiv = document.createElement('div');
    likeActionDiv.className = 'action';
    
    // Create the like icon
    const likeIcon = document.createElement('i');
    likeIcon.className = 'far fa-thumbs-up';
    
    // Create the like text
    const likeText = document.createElement('span');
    likeText.textContent = 'Like';
    
    // Append like icon and text to the like action
    likeActionDiv.appendChild(likeIcon);
    likeActionDiv.appendChild(likeText);
    
    // Create the comment action
    const commentActionDiv = document.createElement('div');
    commentActionDiv.className = 'action';
    
    // Create the comment icon
    const commentIcon = document.createElement('i');
    commentIcon.className = 'far fa-comment';
    
    // Create the comment text
    const commentText = document.createElement('span');
    commentText.textContent = 'Comment';
    
    // Append comment icon and text to the comment action
    commentActionDiv.appendChild(commentIcon);
    commentActionDiv.appendChild(commentText);
    
    // Create the share action
    const shareActionDiv = document.createElement('div');
    shareActionDiv.className = 'action';
    
    // Create the share icon
    const shareIcon = document.createElement('i');
    shareIcon.className = 'fa fa-share';
    
    // Create the share text
    const shareText = document.createElement('span');
    shareText.textContent = 'Share';
    
    // Append share icon and text to the share action
    shareActionDiv.appendChild(shareIcon);
    shareActionDiv.appendChild(shareText);
    
    // Append content divs and actions to the post content section
    postContentDiv.appendChild(contentDiv1);
    if(hiddenpart.length==0){
       contentDiv1.innerHTML = `${part}`;
       //'<a class="show-more" href="javascript:void(0);" style="text-decoration: none;">Show more</a>';
       contentDiv1.appendChild(contentDiv2);
      //postContentDiv.appendChild(showMoreLink);
    }
    
    // Append actions to the post bottom section
    postBottomDiv.appendChild(likeActionDiv);
    postBottomDiv.appendChild(commentActionDiv);
    postBottomDiv.appendChild(shareActionDiv);
    
    // Append post top, content, and bottom sections to the main post container
    postDiv.appendChild(postTopDiv);
    postDiv.appendChild(postContentDiv);
    postDiv.appendChild(postBottomDiv);
    
    // Append the main post container to the desired parent element
    const parentElement = document.getElementById('profile-posts');
    parentElement.appendChild(postDiv);
    }
    function verifylogin(){

        fetch('/user/verify', {
          method: 'GET',
          headers: {
            'Authorization': `${jwt}`, // Include the JWT in the Authorization header
          },
        })
          .then((response) => {
            if (response.status === 401) { 
              // Unauthorized - JWT is invalid or expired
              // You can handle this by redirecting to the login page
             // window.location.href = '/login.html';
            } else if (response.status === 200) {
        
              // Success - JWT is valid, and the server responds with the protected resource
              return response.json(); // Assuming the server responds with JSON data
            } else if(response.status === 500) {
                   // window.location.href = '/login.html';
                
            }
          })
          .then((data) => {
            console.log(data)
            if(data){
              if(data.status=="expired/malformed"){
                localStorage.removeItem('jwt');
                window.location.href = '/login.html';
              }else{
                localStorage.setItem('jwt',data.jwt);
              }
            }else{
              localStorage.removeItem('jwt');
              window.location.href = '/login.html';
            }
        
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        }