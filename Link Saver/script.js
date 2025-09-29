const addBookmarkBtn = document.getElementById("add");
const bookmarkList = document.getElementById("list");
const bookmarkNameInput = document.getElementById("name");
const bookmarkUrlInput = document.getElementById("url");


addBookmarkBtn.addEventListener("click" , function(){
    const name = bookmarkNameInput.value.trim()
    const url = bookmarkUrlInput.value.trim()
    if(!name || !url){alert("Enter Both name And Url")
        return
    }
    else{
        if(!url.startsWith("http://") && !url.startsWith("https://") ){
     alert("Please enter a valid URL starting with http:// or https://");
    return    
    }
        
        addBookmark(name , url)
        saveBookmark(name,url)
        bookmarkNameInput.value = "";
        bookmarkUrlInput.value = "";
    }

})


const addBookmark = (name,url) =>{
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.href = url;
  link.textContent = name;
  link.target = "_blank";
const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("delete-btn")
  removeButton.addEventListener("click", function () {
    bookmarkList.removeChild(li);
    removeBookmarkFromStorage(name, url);
  });

    li.appendChild(link)
    li.appendChild(removeButton)
    bookmarkList.appendChild(li)


}
function getBookmarksFromStorage(){
    const bookmarks = localStorage.getItem("bookmarks")
    return bookmarks ? JSON.parse(bookmarks) : []
}
const saveBookmark = (name,url)=>{
const bookmarks = getBookmarksFromStorage()
bookmarks.push({name,url})
    localStorage.setItem("bookmarks" , JSON.stringify(bookmarks))
}




function loadBookmarks() {
    const bookmarks = getBookmarksFromStorage()
    bookmarks.forEach((bookmark)=>addBookmark(bookmark.name,bookmark.url))
}



function removeBookmarkFromStorage(name, url) {
  let bookmarks = getBookmarksFromStorage();
  bookmarks = bookmarks.filter((bookmark) => bookmark.name !== name || bookmark.url !== url);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

window.onload = loadBookmarks()