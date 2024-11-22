// Replace with the code you'd like to run
const state = {
  loveCount: 0,
  characters: [
    {
      name: 'Shancai',
      image: 'images/shancai.jpeg',
      bio: 'Shancai is a strong-willed and independent young woman.'
    },
    {
      name: 'Daoming Si',
      image: 'images/daomingsi.jpg',
      bio: 'Daoming Si is the charismatic leader of the F4 group.'
    },
    {
      name: 'Hua Ze Lei',
      image: 'images/huazelei.jpg',
      bio: 'Hua Ze Lei is the calm and sensitive member of the F4.'
    },
    {
      name: 'Mei Zuo',
      image: 'images/meizuo.jpg',
      bio: 'Mei Zuo is the cheerful and playful F4 member.'
    },
    {
      name: 'Ximen',
      image: 'images/ximen.jpeg',
      bio: 'Ximen is the smooth-talking and romantic member of the F4.'
    }
  ],
  currentCharacterIndex: 0
};

const addLove = () => {
  const newLove = document.createElement('span');
  const loveContainer = document.querySelector('#loveContainer');
  newLove.textContent = '❤️';
  loveContainer.appendChild(newLove);

  state.loveCount += 1;
  const loveCountContainer = document.querySelector('#loveCount');
  loveCountContainer.textContent = `Love Count: ${state.loveCount}`;
};

const changeTheme = () => {
  const element = document.body;
  element.classList.toggle('light-mode');
};

const addCharacter = () => {
  if (state.currentCharacterIndex === state.characters.length) {
    // Disable the button once all characters have been added
    const characterButton = document.querySelector('#addCharacterButton');
    characterButton.disabled = true;
    characterButton.textContent = 'No More Characters to Add!';
    return;
  };

  const characterContainer = document.querySelector('#characterContainer');
  const character = state.characters[state.currentCharacterIndex];

  const characterSection = document.createElement('div');
  characterSection.classList.add('character');

  const characterName = document.createElement('h3');
  characterName.textContent = character.name;

  const characterImage = document.createElement('img');
  characterImage.src = character.image;
  characterImage.alt = `${character.name} image`;
  characterImage.style.width = '150px';

  const characterBio = document.createElement('p');
  characterBio.textContent = character.bio;

  characterSection.appendChild(characterName);
  characterSection.appendChild(characterImage);
  characterSection.appendChild(characterBio);

  characterContainer.appendChild(characterSection);

  state.currentCharacterIndex++;
};

const registerEventHandlers = () => {
  const loveButton = document.querySelector('#addLoveButton');
  loveButton.addEventListener('click', addLove);

  const themeButton = document.querySelector('#themeButton');
  themeButton.addEventListener('click', changeTheme);

  const characterButton = document.querySelector('#addCharacterButton');
  characterButton.addEventListener('click', addCharacter);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
