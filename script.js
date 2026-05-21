
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// ── TIC TAC TOE ──
const overlay = document.getElementById('tttOverlay');
const trigger = document.getElementById('easterTrigger');
const closeBtn = document.getElementById('tttClose');
const resetBtn = document.getElementById('tttReset');
const cells = document.querySelectorAll('.ttt-cell');
const status = document.getElementById('tttStatus');

const WIN_LINES = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

let board, current, gameOver;

function initGame() {
  board = Array(9).fill(null);
  current = 'X';
  gameOver = false;
  cells.forEach(c => {
    c.textContent = '';
    c.classList.remove('taken','x-mark','o-mark','win-cell');
  });
  status.textContent = "Your turn — you're X";
}

function checkWin(b, p) {
  return WIN_LINES.find(line => line.every(i => b[i] === p)) || null;
}

function isDraw(b) { return b.every(v => v !== null); }

function cpuMove() {
  // Try to win
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = 'O';
      if (checkWin(board, 'O')) return i;
      board[i] = null;
    }
  }
  // Block player
  for (let i = 0; i < 9; i++) {
    if (!board[i]) {
      board[i] = 'X';
      if (checkWin(board, 'X')) { board[i] = null; return i; }
      board[i] = null;
    }
  }
  // Center, corners, edges
  const pref = [4,0,2,6,8,1,3,5,7];
  return pref.find(i => !board[i]);
}

function markCell(idx, player) {
  board[idx] = player;
  const cell = cells[idx];
  cell.textContent = player;
  cell.classList.add('taken', player === 'X' ? 'x-mark' : 'o-mark');
}

function highlightWin(line) {
  line.forEach(i => cells[i].classList.add('win-cell'));
}

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const i = parseInt(cell.dataset.i);
    if (gameOver || board[i] || current !== 'X') return;

    markCell(i, 'X');
    const winLine = checkWin(board, 'X');
    if (winLine) {
      highlightWin(winLine);
      status.textContent = 'You win!';
      gameOver = true;
      return;
    }
    if (isDraw(board)) { status.textContent = "It's a draw!"; gameOver = true; return; }

    current = 'O';
    status.textContent = 'CPU is thinking…';

    setTimeout(() => {
      const move = cpuMove();
      markCell(move, 'O');
      const cpuWin = checkWin(board, 'O');
      if (cpuWin) {
        highlightWin(cpuWin);
        status.textContent = 'CPU wins!';
        gameOver = true;
        return;
      }
      if (isDraw(board)) { status.textContent = "It's a draw!"; gameOver = true; return; }
      current = 'X';
      status.textContent = 'Your turn — you\'re X';
    }, 400);
  });
});

trigger.addEventListener('click', () => {
  initGame();
  overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => { overlay.style.display = 'none'; });
resetBtn.addEventListener('click', initGame);

overlay.addEventListener('click', (e) => {
  if (e.target === overlay) overlay.style.display = 'none';
});
