// fetch categories
const loadCatagories = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCatagories(data.categories))
    .catch((error) => console.log(error));
};
// load videocategories
const loadVideo = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideo(data.videos))
    .catch((error) => console.log(error));
};
const cardDemo={
     
}
// video function
const displayVideo=(videos)=>{
     const videocontainer=document.getElementById("videos")
     videos.forEach(video=>{
     console.log(video)
     const card=document.createElement("div");
     card.classList="card bg-base-100 w-96 shadow-sm"
     card.innerHTML=  `
  <figure class="h-[200px]">
    <img class="h-full w-full object-cover rounded" 
         src="${video.thumbnail}" 
         alt="${video.title}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description || 'No description available'}</p>
   
  <div class="px-0 py-2 flex gap-2">
  <div>
    <img 
      class="w-10 h-10 rounded-full object-cover" 
      src="${video.authors[0].profile_picture}" 
    />
  </div>
  <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex">
      <p class="text-gray-400">${video.authors[0].profile_name}</p>
${video.authors[0].verified === true 
    ? `<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" class="w-4 h-4" alt="verified"/>`
    : ""}

    </div>
  </div>
  <div>
    <p></p>
  </div>
</div>


`;

  videocontainer.append(card)
     })
}
// display categories
const displayCatagories = (categories) => {
  const catagoryContainer = document.getElementById("catgory");

  categories.forEach((item) => {
    console.log(item);

    // create button
    const button = document.createElement("button");
    button.classList.add("btn"); 
    button.innerText = item.category; 

    // add button
    catagoryContainer.append(button);
  });
};

loadCatagories();
loadVideo();



