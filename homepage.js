let last_post_id = null;
const bottomElement = document.getElementById("bottom-placeholder"); // Replace with your actual element.
const friend_list = document.getElementById("friends_list");
let currentFocus = -1;
const jwt = localStorage.getItem("jwt"); // Retrieve the JWT from local storage
let jwtid = "";
let jwtrole = "";
console.log(jwt);
const user_data={};
if (jwt === "undefined") {
  console.log("undenifed");
  window.location.href = "/login.html";
} else if (jwt == "expired") {
  console.log(jwt);
  localStorage.removeItem("jwt");
  window.location.href = "/login";
} else {
  verifylogin(jwt);
}
let ws;

async function removepost(post_id) {
  const response = postData("/user/removepost", {
    jwt: localStorage.getItem("jwt"),
    post_id: post_id,
  });
  const data = await response;
  console.log(data);
  document.getElementById("dialog_content").innerHTML = data.status;
  document.getElementById("dialog").showModal();
}

function showmore() {
  // Use "this" to reference the clicked link
  var hiddenDiv = this.parentElement.querySelector(
    'div[style="text-align: start;display:none"]'
  );
  if (hiddenDiv) {
    hiddenDiv.style.display = "block";
  }
  this.style.display = "none";
}
function verifylogin() {
  fetch("/user/verify", {
    method: "GET",
    headers: {
      Authorization: `${jwt}`, // Include the JWT in the Authorization header
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
      } else if (response.status === 500) {
        // window.location.href = '/login.html';
      }
    })
    .then((data) => {
      console.log(data);
      if (data) {
        if (data.status == "expired/malformed") {
          localStorage.removeItem("jwt");
          window.location.href = "/login.html";
        } else {
          jwtid = data.user_id;
          jwtrole = data.role;
          localStorage.setItem("jwt", data.jwt);
        }
      } else {
        localStorage.removeItem("jwt");
        window.location.href = "/login.html";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
getposts();
async function getposts() {
  const response = postData("/user/getposts", {
    jwt: localStorage.getItem("jwt"),
    last_post_id: last_post_id,
  });
  const text = await response;
  if (text.length == 0) {
    bottomElement.innerHTML =
      "you have reached the end of posts for today. Come back later!";
  } else {
    console.log(text);
    last_post_id = text[text.length - 1].post_id;
    console.log(last_post_id);
  }
  text.forEach((element) => {
    createpost(
      element.full_name,
      element.content,
      element.user_id,
      element.created_at,
      element.updated_at,
      element.post_id
    );
  });
  let showMoreLinks = document.querySelectorAll(".show-more");
  showMoreLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      // Use "this" to reference the clicked link
      var hiddenDiv = link.parentElement.querySelector(".hidden-div");
      var unhiddenDiv = link.parentElement;
      if (hiddenDiv) {
        console.log(hiddenDiv.innerHTML);
        link.style.display = "none";
        unhiddenDiv.innerHTML += hiddenDiv.innerHTML;
      }
    });
  });
  return true;
}
// Create an Intersection Observer instance to watch for scrolling to the bottom.
const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    console.log("interseceting");
    // The user has scrolled to the bottom, so fetch more posts.
    setTimeout(async () => {
      getposts();
    }, 1000);
  }
});
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  get_friend_list();
  observer.observe(bottomElement);
});
// Observe an element (e.g., a placeholder div at the bottom of your post container).

function createpost(
  full_name,
  content,
  user_id,
  created_at,
  updated_at,
  post_id
) {
  // Create the main post container div
  const postDiv = document.createElement("div");
  postDiv.className = "post";
  postDiv.id = post_id;
  const now = new Date();
  let currenttime = now.toISOString();

  let timecontent;
  const timeDifferenceInMilliseconds =
    (new Date(currenttime) - new Date(created_at)) / (1000 * 3600) - 3;

  if (timeDifferenceInMilliseconds * 3600 <= 60) {
    timecontent = " secs ago";
  } else if (timeDifferenceInMilliseconds * 60 <= 60) {
    timecontent = Math.round(timeDifferenceInMilliseconds * 60) + " min(s) ago";
  } else if (timeDifferenceInMilliseconds <= 24) {
    timecontent = Math.round(timeDifferenceInMilliseconds) + " hour(s) ago";
  } else if (timeDifferenceInMilliseconds / 24 <= 7) {
    timecontent = Math.round(timeDifferenceInMilliseconds / 24) + " day(s) ago";
  } else if (timeDifferenceInMilliseconds / 168 <= 4.285714285714286) {
    timecontent =
      Math.round(timeDifferenceInMilliseconds / 168) + " week(s) ago";
  } else if (timeDifferenceInMilliseconds / 730.484398 <= 12) {
    timecontent =
      Math.round(timeDifferenceInMilliseconds / 730.484398) + " month(s) ago";
  } else {
    timecontent =
      Math.round(timeDifferenceInMilliseconds / 8, 765.812776) + " year(s) ago";
  }
  postDiv.value = { full_name, content, user_id, timecontent, post_id };

  // Create the post top section
  const postTopDiv = document.createElement("div");
  postTopDiv.className = "post-top";

  // Create the dp div
  const dpDiv = document.createElement("div");
  dpDiv.className = "dp";

  // Create the image element within the dp div
  const img = document.createElement("img");
  img.src = "./images/dp.jpg";
  img.alt = "/profile_page.html?id=" + user_id;

  // Append the image to the dp div
  dpDiv.appendChild(img);

  // Create the post-info div
  const postInfoDiv = document.createElement("div");
  postInfoDiv.className = "post-info";

  // Create the name paragraph
  const nameParagraph = document.createElement("p");
  nameParagraph.className = "name";
  const porflink = document.createElement("a");
  porflink.href = "/profile_page.html?id=" + user_id;
  porflink.innerHTML = full_name;
  porflink.style.textDecoration = "none";
  porflink.style.color = "black";
  nameParagraph.appendChild(porflink);
  // Create the time span

  const timeSpan = document.createElement("span");
  timeSpan.className = "time";
  timeSpan.textContent = timecontent;

  // Append the name and time to the post-info div
  postInfoDiv.appendChild(nameParagraph);
  postInfoDiv.appendChild(timeSpan);

  // Create the ellipsis icon
  const ellipsisIcon = document.createElement("i");
  ellipsisIcon.className = "fas fa-ellipsis-h";

  //console.log(jwtrole, jwtid, user_id);
  if (jwtrole != "Owner" && jwtid == user_id) {
    // Create dropdown container
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";
    // Create buttons
    const button1 = document.createElement("button");
    button1.innerHTML = "Remove Post";
    button1.id = "removepost";
    button1.setAttribute("onclick", "removepost(" + post_id + ")");

    // Append buttons to dropdown
    dropdown.appendChild(button1);

    // Append dropdown to ellipsis icon
    ellipsisIcon.appendChild(dropdown);
  } else {
    // Create dropdown container
    const dropdown = document.createElement("div");
    dropdown.className = "dropdown";
    // Create buttons
    const button1 = document.createElement("button");
    button1.innerHTML = "Remove Post";
    button1.id = "removepost";
    button1.setAttribute("onclick", "removepost(" + post_id + ")");

    // Append buttons to dropdown
    dropdown.appendChild(button1);

    // Append dropdown to ellipsis icon
    ellipsisIcon.appendChild(dropdown);
  }

  // Append dp, post-info, and ellipsis icon to the post top section
  postTopDiv.appendChild(dpDiv);
  postTopDiv.appendChild(postInfoDiv);
  postTopDiv.appendChild(ellipsisIcon);

  // Create the post content section
  const postContentDiv = document.createElement("div");
  postContentDiv.className = "post-content";
  const part = content;
  let hiddenpart;

  // const part = content.substring(0, 10);
  try {
    //console.log(part);
    hiddenpart = content.substring(5555);
  } catch (err) {
    //console.log(err);
  }

  // Create the first content div (visible)
  const contentDiv1 = document.createElement("div");
  contentDiv1.setAttribute("dir", "auto");
  contentDiv1.style.textAlign = "start";
  contentDiv1.className = "unhidden-div";
  //contentDiv1.innerHTML =part;

  // Create the second content div (hidden)
  const contentDiv2 = document.createElement("div");
  contentDiv2.setAttribute("dir", "auto");
  contentDiv2.style.textAlign = "start";
  contentDiv2.style.display = "none";
  contentDiv2.className = "hidden-div";
  contentDiv2.innerHTML = hiddenpart;
  // Create the show more link

  const showMoreLink = document.createElement("a");
  showMoreLink.className = "show-more";
  showMoreLink.href = "javascript:void(0);";
  showMoreLink.style.textDecoration = "none";
  showMoreLink.textContent = "Show more";

  // Create the post bottom section
  const postBottomDiv = document.createElement("div");
  postBottomDiv.className = "post-bottom";

  // Create the like action
  const likeActionDiv = document.createElement("div");
  likeActionDiv.className = "action";

  // Create the like icon
  const likeIcon = document.createElement("i");
  likeIcon.className = "far fa-thumbs-up";

  // Create the like text
  const likeText = document.createElement("span");
  likeText.textContent = "Like";

  // Append like icon and text to the like action
  likeActionDiv.appendChild(likeIcon);
  likeActionDiv.appendChild(likeText);

  // Create the comment action
  const commentActionDiv = document.createElement("div");
  commentActionDiv.className = "action";
  commentActionDiv.setAttribute(
    "onclick",
    "open_comment_dialog(" + post_id + ")"
  );

  // Create the comment icon
  const commentIcon = document.createElement("i");
  commentIcon.className = "far fa-comment";

  // Create the comment text
  const commentText = document.createElement("span");
  commentText.textContent = "Comment";

  // Append comment icon and text to the comment action
  commentActionDiv.appendChild(commentIcon);
  commentActionDiv.appendChild(commentText);

  // Create the share action
  const shareActionDiv = document.createElement("div");
  shareActionDiv.className = "action";

  // Create the share icon
  const shareIcon = document.createElement("i");
  shareIcon.className = "fa fa-share";

  // Create the share text
  const shareText = document.createElement("span");
  shareText.textContent = "Share";

  // Append share icon and text to the share action
  shareActionDiv.appendChild(shareIcon);
  shareActionDiv.appendChild(shareText);

  // Append content divs and actions to the post content section
  postContentDiv.appendChild(contentDiv1);
  if (hiddenpart.length == 0) {
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
  const parentElement = document.getElementById("posts-container");
  parentElement.appendChild(postDiv);
}

const input = document.getElementById("posting");
const searcher = document.getElementById("searcher");
const resultsContainer = document.getElementById("searchbox");

input.addEventListener("keydown", handleEnterKey);
searchbox.addEventListener("keyup", handleKey);
function handleEnterKey(event) {
  if (event.keyCode === 13) {
    console.log(input.value);
    // Check if the pressed key is Enter (key code 13)
    postData("/user/createpost", {
      jwt: localStorage.getItem("jwt"),
      content: input.value,
    });
    input.value = "post sent";
    window.location.href = "/";
  }
}
function closeAllLists(elmnt) {
  /*close all autocomplete lists in the document,
  except the one passed as an argument:*/
  var x = document.getElementsByClassName("autocomplete-items");
  for (var i = 0; i < x.length; i++) {
    if (elmnt != x[i] && elmnt != searcher) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
function addActive(x) {
  /*a function to classify an item as "active":*/
  if (!x) return false;
  /*start by removing the "active" class on all items:*/
  removeActive(x);
  if (currentFocus >= x.length) currentFocus = 0;
  if (currentFocus < 0) currentFocus = x.length - 1;
  console.log(currentFocus, " current element");
  /*add class "autocomplete-active":*/
  x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {
  /*a function to remove the "active" class from all autocomplete items:*/
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove("autocomplete-active");
  }
}
async function handleKey(event) {
  var x = document.getElementById("searcherautocomplete-list");
  if (x) x = x.getElementsByTagName("a");
  // console.log(searcher.value.length)
  if (searcher.value.length != 0) {
    if (event.keyCode == 13) {
      searcher.value = x[currentFocus].getElementsByTagName("input")[0].value;
      window.location.href =
        "/profile_Page.html?id=" +
        x[currentFocus]
          .getElementsByTagName("input")[0]
          .getAttribute("user_id");
      closeAllLists();
    } else if (event.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (event.keyCode == 38) {
      //up
      /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else {
      const url = "/user/search/" + searcher.value;

      const response = await fetch(url);

      const text = await response.text();
      autocomplete(searcher, JSON.parse(text), searcher.value);
    }
  } else {
    autocomplete(searcher, "null", searcher.value);
  }
}
async function get_friend_list() {
  const url = "/user/getfriendpresence";
  const response = await fetch(url, {
    headers: {
      Authorization: `${jwt}`, // Include the JWT in the Authorization header
    },
  });
  const text = await response.text();
  const data = JSON.parse(text);
  console.log(data);
  user_data.full_name=data[0].full_name;
  user_data.id = data[0].user_id;
  data.forEach((element) => {
    const h4 = document.createElement("h4");
    h4.innerHTML = "Friends";
    const a = document.createElement("a");
    a.className = "friend";
    a.href = "/profile_page.html?id=" + element.user_id;
    const divdp = document.createElement("div");
    divdp.className = "dp";
    const img = document.createElement("img");
    img.src = "./images/dp.jpg";
    img.alt = "";
    const p = document.createElement("p");
    p.className = "name";
    p.innerHTML = element.full_name;
    divdp.appendChild(img);
    a.appendChild(divdp);
    a.appendChild(p);
    friend_list.appendChild(a);
  });
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
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function autocomplete(inp, arr, value) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  /*execute a function when someone writes in the text field:*/
  var a,
    b,
    i,
    val = value;
  /*close any already open lists of autocompleted values*/
  closeAllLists();
  if (val == 0) {
    return false;
  }
  currentFocus = -1;
  /*create a DIV element that will contain the items (values):*/
  a = document.createElement("DIV");
  a.setAttribute("id", "searcherautocomplete-list");
  a.setAttribute("class", "autocomplete-items");
  /*append the DIV element as a child of the autocomplete container:*/
  const parent = document.getElementById("searchbox");
  console.log(parent);
  parent.appendChild(a);
  const friends = document.createElement("DIV");
  friends.className = "friends-section";
  a.appendChild(friends);
  /*for each item in the array...*/
  for (i = 0; i < arr.length; i++) {
    /*check if the item starts with the same letters as the text field value:*/
    /*create a DIV element for each matching element:*/
    aa = document.createElement("a");
    /*m2ke the m2tching letters aold:*/
    // a2.innerHTML = "<s2trong>" + arr[i].substr(0, val.length) + "</strong>";
    //aa.class="friend";
    aa.className = "friender";
    aa.href = "/profile_Page.html?id=" + arr[i].user_id;
    aa.innerHTML +=
      "<input type='hidden' value='" +
      arr[i].full_name +
      "'user_id=" +
      arr[i].user_id +
      ">";

    const divdb = document.createElement("div");
    divdb.className = "dp";
    const img = document.createElement("img");
    img.className = "searchimg";
    img.src = "./images/dp.jpg";
    divdb.appendChild(img);
    p = document.createElement("p");
    p.class = "name";
    p.innerHTML = "<strong>" + arr[i].full_name + "</strong>";
    //p.innerHTML = "<strong>" + arr[i].name.substr(0, val.length) + "</strong>";
    //p.innerHTML += arr[i].name.substr(val.length);
    /*insert a input field that will hold the current array item's value:*/
    p.innerHTML += "<input type='hidden' value='" + arr[i].full_name + "'>";
    aa.appendChild(divdb);
    aa.appendChild(p);
    /*execute a function when someone clicks on the item value (DIV element):*/
    aa.addEventListener("click", function (e) {
      /*insert the value for the autocomplete text field:*/
      inp.value = this.getElementsByTagName("input")[0].value;
      /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
      closeAllLists();
    });
    p.addEventListener("click", function (e) {
      /*insert the value for the autocomplete text field:*/
      inp.value = this.getElementsByTagName("input")[0].value;
      /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
      closeAllLists();
    });
    friends.appendChild(aa);
  }

  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
async function open_comment_dialog(post_id) {
  const data = document.getElementById(post_id).value;
  document.getElementById("imgdialog").src = "./images/dp.jpg";
  document.getElementById("imgdialog").alt =
    "/profile_page.html?id=" + data.user_id;
  document.getElementById("namedialog").href =
    "/profile_page.html?id=" + data.user_id;
  document.getElementById("namedialog").innerHTML = data.full_name;
  document.getElementById("timedialog").innerHTML = data.timecontent;
  document.getElementById("contentdialog").innerHTML = data.content;
  document.getElementById("contentdialog").value = post_id;
  let comments = document.getElementsByClassName("comments");
  for (let comment of comments) {
    console.log(comment)
    comment.remove();
  }
  ws = new WebSocket("ws://127.0.0.1/websocket?post_id=" + post_id);
  ws.onopen = () => {
    console.log("Connected to Server");
    //ws.send("Hello,server!", "message");
  };
  ws.onmessage = (event) => {
    console.log("Recieved message: " + event.data);
    try{
      const data = JSON.parse(event.data);
     let text=[];
     text.push(data);
     load_comments(text,true);
    }catch(err){

    }
  };
  ws.onclose = () => {
    console.log("Connection closed");
  };
  document.getElementById("commentsDialog").open = true;
  const response = postData("/user/getcomments", {
    jwt: localStorage.getItem("jwt"),
    post_id: post_id,
  });
  const text = await response;
  load_comments(text);
}
function closedialog() {
  try {
    ws.close();
  } catch (e) {}
  document.getElementById("commentsDialog").open = false;
}
const comments = document.getElementById("comments");
async function load_comments(text,boolean) {
  console.log(text)
  if (text.length == 0) {
    return false;
  }
  text.forEach((element) => {
    const comment = document.createElement("div");
    comment.className = "comments";
    const posttop = document.createElement("div");
    posttop.className = "post-top";
    const divdp = document.createElement("div");
    divdp.className = "dp";
    const dpimg = document.createElement("img");
    if (element.profile_pic === null) {
      dpimg.src = "./images/dp.jpg";
    } else {
      dpimg.src = "./images/dp.jpg";
      //dpimg.src = "./images/" + element.profile_pic;
    }
    dpimg.alt = "/profile_page.html?id=" + element.user_id;
    divdp.appendChild(dpimg);
    const postinfo = document.createElement("div");
    postinfo.className = "post-info";
    const p = document.createElement("p");
    p.className = "name";
    const a = document.createElement("a");
    a.href = "/profile_page.html?id=" + element.user_id;
    a.style.textDecoration = "none";
    a.style.color = "black";
    a.innerHTML = element.full_name;
    p.appendChild(a);
    const span = document.createElement("span");
    span.className = "time";
    const now = new Date();
    let currenttime = now.toISOString();

    let timecontent;
    const timeDifferenceInMilliseconds =
      (new Date(currenttime) - new Date(element.time_stamp)) / (1000 * 3600) -
      3;

    if (timeDifferenceInMilliseconds * 3600 <= 60) {
      timecontent = " secs ago";
    } else if (timeDifferenceInMilliseconds * 60 <= 60) {
      timecontent = Math.round(timeDifferenceInMilliseconds * 60) + " mins ago";
    } else if (timeDifferenceInMilliseconds <= 24) {
      timecontent = Math.round(timeDifferenceInMilliseconds) + " hours ago";
    } else if (timeDifferenceInMilliseconds / 24 <= 7) {
      timecontent = Math.round(timeDifferenceInMilliseconds / 24) + " days ago";
    } else if (timeDifferenceInMilliseconds / 168 <= 30) {
      timecontent =
        Math.round(timeDifferenceInMilliseconds / 168) + " weeks ago";
    } else if (timeDifferenceInMilliseconds / 730.484398 <= 12) {
      timecontent =
        Math.round(timeDifferenceInMilliseconds / 730.484398) + " months ago";
    } else {
      timecontent =
        Math.round(timeDifferenceInMilliseconds / 8, 765.812776) + " years ago";
    }
    if(boolean){
      timecontent='sec(s) ago';
    }
    span.textContent = timecontent;
    const content = document.createElement("div");
    content.dir = "auto";
    content.className = "unhidden-div";
    content.style.textAlign = "start";
    content.textContent = element.content;
    postinfo.appendChild(p);
    postinfo.appendChild(span);
    postinfo.appendChild(content);
    posttop.appendChild(divdp);
    posttop.appendChild(postinfo);
    comment.appendChild(posttop);
    comments.appendChild(comment);
  });
}

const commenting = document.getElementById("commenting");
commenting.addEventListener("keydown", async (event) => {
    if (event.keyCode == 13) {
      const response = postData("/user/postcomment", {
        jwt: localStorage.getItem("jwt"),
       content: commenting.value,
       post_id:document.getElementById("contentdialog").value,
       full_name:user_data.full_name,
      });
      console.log(await response)
      commenting.value='';
    }
});
