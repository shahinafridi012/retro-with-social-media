


const commentsDataLoad = async (query) => {
    console.log(query)
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${query}`);
    const data = await res.json();
    commentsDataLoadForm = document.getElementById ('dataLoad');
    commentsDataLoadForm.innerHTML = '';
    const dataLoad = data.posts;


    dataLoad.forEach(comments => {       
      const commentsDiv = document.createElement('div')
    commentsDiv.innerHTML = `
    
    <div class="flex gap-5 bg-[#F3F3F5] lg:w-[772px] lg:h-[270px] rounded-2xl p-10">
    <div class="avatar indicator  ">
        <span class="indicator-item badge badge-secondary bg-red-900"></span> 
        <div class="w-20 h-20 rounded-lg">
          <img alt="Tailwind CSS examples" src="${comments.image}" />
        </div>
      </div>
      <div>
        <div class="flex space-x-2 ">
            <h1>#${comments.category}</h1>
            <h1>${comments.author.name}</h1>
        </div>
        <div class="space-y-4">
            <h3 class="text-2xl font-extrabold">10 Kids Unaware of Their Halloween Costume</h3>
            <p>It’s one thing to subject yourself to ha Halloween costume mishap because, hey that’s your prerogative</p>
        </div>
        <hr class="mt-6">
        <div class="flex space-x-8 mt-10 ">
            <div><i class="fa-regular fa-clock"></i><span>${comments.posted_time}</span></div>
            <div><i class="fa-regular fa-eye"></i><span>${comments.view_count}</span></div>
            <div><i class="fa-regular fa-message"></i><span>${comments.comment_count}</span></div>
            <div class:"bg-[#10B981] ml-10"><button onclick ="dynamicShowTheOutside('${comments.category}')"><i class="fa-solid fa-envelope bg-[#10B981] ml-20"></i></button></div>
        </div>


      </div>
</div>
    `;
   commentsDataLoadForm.appendChild(commentsDiv)
   console.log(comments)
    });
   
}
// dynamic status online ---->
const dynamicShowTheOutside = async (done) => {
  console.log(done)
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${done}`)
  const data = await res.json()
  const ShowDisPlay = document.getElementById('dynamic-showing')
 const dataLoadExtra = data.posts;
//  console.log(dataLoadExtra);
const makeDiv = document.createElement('div')
makeDiv.innerHTML = `
<div class="flex   ">
        <div class="grid flex-grow h-32 card bg-base-300 rounded-box  ">
           <div class="flex justify-evenly items-center">
            <div><h3>${dataLoadExtra[0].title}</h3></div>
            <div>
              <i class="fa-regular fa-eye">${dataLoadExtra[0].view_count}</i>
            </div>
          </div> 
           </div>
      </div>

`;

ShowDisPlay.appendChild(makeDiv);
}

const handleSearch =() => {
    const value = document.getElementById('search-field').value
    
    commentsDataLoad(`?category=${value}`)
    
}
commentsDataLoad('');




const Section = async()=>{
    const response = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    const data_2 = await response.json();
    const Data = data_2;
    const dataSHowing = document.getElementById('latest-post')
    Data.forEach(data => {

const DIv = document.createElement('div')
DIv.innerHTML = `
<div class="card card-compact w-96 bg-base-100 shadow-xl p-5">
<figure><img src="${data.cover_image}" alt="Shoes" /></figure>
<div class="card-body ">
<div class="flex items-center gap-1 ">
    <i class="fa-solid fa-calendar-days"></i>
    <h2 class="card-title">${data.author.posted_date}</h2>
</div>
        <div>
            <h3 class="text-black font-extrabold color">${data.title}</h3>
            <p>${data.description}</p>
        </div>
        <div>
            <div class="flex gap-5">
                <div class="avatar">
        <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="${data.profile_image}" />
            </div>
          </div>
          <div>
            <h3 class="text-black  font-extrabold">${data.author.name}</h3>
            <p>${data.author.designation || "data not showing"}</p>
          </div>
    </div>
   </div>                    
</div>
</div>
`;
dataSHowing.appendChild(DIv);

console.log(data)
    })
}


Section();