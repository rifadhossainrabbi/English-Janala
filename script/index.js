const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")//promise of response
    .then(res => res.json()) // promise of json data
    .then(json => displayLessons(json.data));
};

const loadLevelWord = (id) => {
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  // console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWord(data.data));
};

const displayLevelWord = (words) => {
  const wordContainer = document.getElementById("word_container");
  wordContainer.innerHTML = "";

  words.forEach(word => {
    console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
      <h2 class="font-bold text-2xl">${word.word}</h2>
      <p class="font-semibold">Meaning /Pronounciation</p>
      <div class="text-2xl font-medium font_family_bangla">"${word.meaning} / ${word.pronunciation}"</div>
      <div class="flex justify-between items-center mt-5">
        <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF]"><i class="fa-solid fa-circle-info"></i></button>
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
       <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
       <i class="fa-solid fa-book-open"></i> Lesson -${lesson.level_no}
       </button>
    `;
    // 4. append child
    levelContainer.append(btnDiv);
  }
}
loadLessons();