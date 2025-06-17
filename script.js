const db = {
  truths: [
    "Кое е най-срамното нещо, което си правил?",
    "Ако можеше да се срещнеш с историческа личност, коя би била тя?",
    "Кога последно излъга и защо?",
    "Какво хората не знаят за теб?",
    "Кой е най-големият ти страх?",
    "Коя е най-голямата ти тайна?",
    "Случвало ли ти се е да се влюбиш в приятел?",
    "Кой е най-лошият подарък, който си получавал?",
    "Би ли излизал/а с някой от присъстващите?",
    "Кой е най-смешният момент в живота ти?",
    "Кое е най-срамното нещо, което ти се е случвало?",
    "Какво е едно нещо, за което съжаляваш, че си направил/а?",
    "Кое е най-щурото място, на което си заспивал/а?",
    "Коя е най-голямата ти мечта?",
    "Ако можеше да смениш живота си с някого за един ден, кой би бил той и защо?",
    "Кое е най-странното нещо, което си ял/а?",
    "Ако можеше да имаш една суперсила, коя би била тя?",
    "Кой е най-глупавият подарък, който някога си получавал/а?",
    "Кое е нещо, което никой тук не знае за теб?",
    "Ако можеше да пътуваш назад във времето, къде би отишъл/ла и защо?",
    "Кой е най-големият ти страх?",
    "Кое е най-голямото ти постижение, с което се гордееш?",
    "Кое е нещо, което те дразни в някого тук?",
    "Кое е любимото ти спомен от детството?",
    "Ако трябваше да живееш в книга, филм или сериал, кое би избрал/а?",
    "Какво е най-неудобното нещо, което си правил/а на първа среща?",
    "Коя е най-странната ти фобия?",
    "Кой е човекът, на когото се възхищаваш най-много и защо?",
    "Ако можеше да говориш с животни, какво би ги попитал/а?",
    "Каква е една лоша навичка, от която искаш да се отървеш?",
    "Кога за последно си плакал/а и защо?",
    "Кой е любимият ти филм и защо?",
    "Кое е най-смешното нещо, което си чувал/а някой да казва насън?",
    "Какво е едно нещо, което не можеш да живееш без него?",
    "Каква е идеалната ти почивка?",
    "Кое е най-хубавото нещо, което някой е направил за теб?",
    "Ако можеше да бъдеш някакъв предмет, какъв би бил?",
    "Кое е най-голямото ти разхищение?",
    "Какво е един мит за теб, който не е верен?",
    "Кой е бил най-трудният момент в живота ти и как се справи?"
  ],
  dares: [
    "Изпей част от любимата си песен.",
    "Направи 10 клякания.",
    "Имитирай известен човек.",
    "Разсмей човека отляво.",
    "Танцувай без музика 30 секунди.",
    "Избери човек и му кажи комплимент.",
    "Кажи азбуката наобратно.",
    "Направи забавно животинско изражение.",
    "Изиграй сцена от филм.",
    "Опиши себе си с три смешни думи.",
    "Изпей част от любимата си песен.",
    "Направи 10 коремни преси.",
    "Имитирай известен човек за 30 секунди.",
    "Кажи на човекът отдясно нещо, което харесваш в него/нея.",
    "Танцувай без музика за 1 минута.",
    "Говори като робот до края на следващия кръг.",
    "Направи си селфи с най-смешното изражение и го покажи на всички.",
    "Опитай се да докоснеш носа си с език.",
    "Разкажи една много лоша шега.",
    "Направи 5 лицеви опори.",
    "Смени си мястото с човек, който носи същия цвят дрехи като теб.",
    "Пий чаша вода на един дъх.",
    "Опиши човека отляво, без да използваш неговото/нейното име.",
    "Постави си лъжица на носа за 10 секунди.",
    "Стой на един крак, докато не дойде твоят ред отново.",
    "Изсвири любимата си мелодия, като тананикаш с уста.",
    "Отиди и донеси нещо необичайно от друга стая.",
    "Опитай се да лизнеш лакътя си.",
    "Направи най-лошата си имитация на животно.",
    "Разкажи история с три думи.",
    "Опитай се да жонглираш с 3 предмета.",
    "Направи мост/стойка на ръце (ако е безопасно).",
    "Поздрави някой на улицата/от балкона, който минава отвън.",
    "Нарисувай нещо с очите си затворени и накарай другите да познаят какво е.",
    "Опитай се да не мигаш за 1 минута.",
    "Преструвай се, че си манекен за 30 секунди.",
    "Измисли рап за човека отсреща.",
    "Позволи на някого да ти нарисува нещо на лицето с маркер (който се трие)."
  ],
  usedTruths: [],
  usedDares: []
};

function getRandomItem(type) {
  let list = db[type];
  let usedList = db["used" + type.charAt(0).toUpperCase() + type.slice(1)];

  if (usedList.length === list.length) usedList.length = 0;

  let item;
  do {
    item = list[Math.floor(Math.random() * list.length)];
  } while (usedList.includes(item));

  usedList.push(item);
  return item;
}

function showTruth() {
  const output = document.getElementById("output");
  output.textContent = getRandomItem("truths");
  output.classList.remove("initial-message");
}

function showDare() {
  const output = document.getElementById("output");
  output.textContent = getRandomItem("dares");
  output.classList.remove("initial-message");
}

let players = [];
let currentPlayerIndex = 0;
let gameStarted = false;

document.addEventListener('DOMContentLoaded', function() {
  setupPlayers();
});

function setupPlayers() {
  const count = parseInt(document.getElementById('playerCount').value);
  players = [];
  for (let i = 0; i < count; i++) {
    players.push({
      name: `Играч ${i + 1}`,
      score: 0
    });
  }
}

function startGame() {
  gameStarted = true;
  currentPlayerIndex = 0;

  document.getElementById('playerSetup').style.display = 'none';
  document.getElementById('playersContainer').style.display = 'block';
  document.getElementById('actionButtons').style.display = 'flex';
  document.getElementById('finishGameBtn').style.display = 'block';

  renderPlayers();
  updateCurrentPlayer();
}

function renderPlayers() {
  const container = document.getElementById('playersContainer');
  container.innerHTML = '';

  players.forEach((player, index) => {
    const playerDiv = document.createElement('div');
    playerDiv.className = 'player';
    playerDiv.id = `player-${index}`;

    playerDiv.innerHTML = `
      <input type="text" value="${player.name}" onchange="updatePlayerName(${index}, this.value)" maxlength="15">
      <div class="player-score">${player.score}</div>
    `;

    container.appendChild(playerDiv);
  });
}

function updatePlayerName(index, name) {
  players[index].name = name;
}

function updateCurrentPlayer() {
  document.querySelectorAll('.player').forEach(p => {
    p.classList.remove('current-player');
  });

  const currentPlayerDiv = document.getElementById(`player-${currentPlayerIndex}`);
  if (currentPlayerDiv) {
    currentPlayerDiv.classList.add('current-player');
  }
}

function markDone() {
  if (!gameStarted) return;

  players[currentPlayerIndex].score++;
  nextPlayer();
  renderPlayers();
  updateCurrentPlayer();
}

function markUndone() {
  if (!gameStarted) return;

  if (players[currentPlayerIndex].score > 0) {
    players[currentPlayerIndex].score--;
  }
  nextPlayer();
  renderPlayers();
  updateCurrentPlayer();
}

function nextPlayer() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
}

function finishGame() {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  const rankingContainer = document.getElementById('rankingList');
  rankingContainer.innerHTML = '';

  sortedPlayers.forEach((player, index) => {
    const rankingItem = document.createElement('div');
    rankingItem.className = 'ranking-item';

    let medal = '';
    if (index === 0) medal = '🥇';
    else if (index === 1) medal = '🥈';
    else if (index === 2) medal = '🥉';
    else medal = `${index + 1}.`;

    rankingItem.innerHTML = `
      <span class="ranking-position">${medal}</span>
      <span class="ranking-name">${player.name}</span>
      <span class="ranking-score">${player.score} точки</span>
    `;

    rankingContainer.appendChild(rankingItem);
  });

  document.getElementById('resultsModal').style.display = 'flex';
}

function closeResults() {
  document.getElementById('resultsModal').style.display = 'none';
}

function resetGame() {
  gameStarted = false;
  currentPlayerIndex = 0;
  players = [];

  document.getElementById('resultsModal').style.display = 'none';
  document.getElementById('playerSetup').style.display = 'block';
  document.getElementById('playersContainer').style.display = 'none';
  document.getElementById('actionButtons').style.display = 'none';
  document.getElementById('finishGameBtn').style.display = 'none';
  document.getElementById('output').textContent = 'Натисни бутон, за да започнеш!';
  document.getElementById('output').classList.add('initial-message');

  document.getElementById('playerCount').value = 2;
  setupPlayers();
}

function showTruth() {
  const output = document.getElementById("output");
  const truthText = getRandomItem("truths");
  
  if (gameStarted) {
    const currentPlayerName = players[currentPlayerIndex].name;
    output.textContent = `${currentPlayerName}: ${truthText}`;
  } else {
    output.textContent = truthText;
  }
  
  output.classList.remove("initial-message");
}

function showDare() {
  const output = document.getElementById("output");
  const dareText = getRandomItem("dares");
  
  if (gameStarted) {
    const currentPlayerName = players[currentPlayerIndex].name;
    output.textContent = `${currentPlayerName}: ${dareText}`;
  } else {
    output.textContent = dareText;
  }
  
  output.classList.remove("initial-message");
}
