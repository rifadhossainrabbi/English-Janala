const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")//promise of response
    .then(res => res.json()) // promise of json data
    .then(json => displayLessons(json.data));
};

const removeActive = () => {
  const lessonButtons = document.querySelectorAll(".lesson_btn");
  // console.log(lessonButtons);
  lessonButtons.forEach((btn) => btn.classList.remove("active"));
}

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => {
      removeActive(); //remove all active class
      const clickBtn = document.getElementById(`lesson_btn_${id}`);
      console.log(clickBtn);
      clickBtn.classList.add("active"); // add active only clicked btn
      displayLevelWord(data.data);
    });
};

const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word_container");
  wordContainer.innerHTML = "";


  if (words.length == 0) {
    wordContainer.innerHTML = `
       <div class="text-center col-span-full rounded-xl py-10 space-y-6 font_family_bangla">
       <img class="mx-auto" src="./assets/alert-error.png" alt="">
      <p class="text-xl font-medium text-gray-400">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
      <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
    </div>
    `;
    return;
  }

  words.forEach(word => {
    // console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
      <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
      <p class="font-semibold">Meaning /Pronounciation</p>
      <div class="text-2xl font-medium font_family_bangla">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "Pronunciation পাওয়া যায়নি"}"</div>
      <div class="flex justify-between items-center mt-5">
        <button onclick="my_modal_5.showModal()" class="btn bg-[#1A91FF10] hover:bg-[#1A91FF]"><i class="fa-solid fa-circle-info"></i></button>
        <btutton class="btn  bg-[#1A91FF10] hover:bg-[#1A91FF]"><i class="fa-solid fa-volume-high"></i></btutton>
      </div>
    </div>
    `;
    wordContainer.append(card);
  })
}

const displayLessons = (lessons) => {
  // console.log(lessons);
  // 1. get tah container & empty
  const levelContainer = document.getElementById("level_container");
  levelContainer.innerHTML = "";

  // 2. get into every lessons
  for (let lesson of lessons) {
    // 3. creat element
    console.log(lesson);
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
       <button id="lesson_btn_${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson_btn">
       <i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no}
       </button>
    `;
    // 4. append child
    levelContainer.append(btnDiv);
  }
}
loadLessons();