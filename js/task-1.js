function slugify(title) {
      title = title.toLowerCase();
      let newargum = title.split(" ");
    return newargum.join("-"); 
    }
    console.log(slugify("Arrays for begginers"));//"arrays-for-begginers"
    console.log(slugify("English for developer"));
    console.log(slugify("Ten secrets of JavaScript"));
    console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));