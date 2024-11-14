function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function formatName(name) {
  return name
    .trim()
    .replace(/\s+/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase());
}

const jsConfetti = new JSConfetti();

async function fetchAllNames() {
  const response = await fetch("https://fe-students.onrender.com/api/users")
    .then((res) => res.json())
    .then((data) => {
      const divContainer = document.createElement("div");
      divContainer.classList.add("container");
      const ul = document.createElement("ul");
      const myName = document.createElement("p");
      myName.innerHTML = `Hello, ${data.results[1].name}`;

      const rightSideDiv = document.createElement("div");
      rightSideDiv.classList.add("right-side");

      const holderDiv = document.createElement("div");
      holderDiv.classList.add("holder");
      holderDiv.innerHTML = "Lets see who the lucky winner is...";

      const randomButton = document.createElement("button");
      randomButton.innerHTML = "Who is going to win all the chicken dinners?";

      randomButton.classList.add("button");

      let lstItems = [];
      let highlightInterval = null;
      let highlightIndex = 0;

      function renderNames(names) {
        ul.innerHTML = "";
        lstItems = [];

        names.forEach((item, index) => {
          const li = document.createElement("li");
          li.innerHTML = formatName(item.name);
          li.dataset.index = index;
          ul.appendChild(li);
          lstItems.push(li);
        });
      }

      renderNames(data.results);

      function shuffleHighlight() {
        let currentIndex = 0;
        highlightIndex = currentIndex;

        highlightInterval = setInterval(() => {
          lstItems.forEach((li) => li.classList.remove("highlight"));

          currentIndex = (currentIndex + 1) % lstItems.length;

          lstItems[currentIndex].classList.add("highlight");
          highlightIndex = currentIndex;
        }, 100);
      }

      randomButton.addEventListener("click", () => {
        shuffleHighlight();

        setTimeout(() => {
          clearInterval(highlightInterval);

          const rndIndex = Math.floor(Math.random() * data.results.length);
          const rndUser = data.results[rndIndex].name;

          holderDiv.innerHTML = `The Winner is: ${formatName(rndUser)}`;
          lstItems.forEach((li) => li.classList.remove("highlight"));
          lstItems[rndIndex].classList.add("highlight");

          jsConfetti.addConfetti();
        }, 2000);
      });

      divContainer.appendChild(ul);
      rightSideDiv.appendChild(holderDiv);
      rightSideDiv.appendChild(randomButton);

      divContainer.appendChild(rightSideDiv);
      document.body.appendChild(myName);
      document.body.appendChild(divContainer);
    });
}

document.addEventListener("DOMContentLoaded", fetchAllNames);
