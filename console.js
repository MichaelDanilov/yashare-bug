const realConsole = console;
console = {
  error: (...text) => {
    document.querySelector('.console p:last-child').insertAdjacentHTML('afterend', `<p class="error">${text.join(' ')}</p>`);
    realConsole.error(text);
  },
  info: (...text) => {
    document.querySelector('.console p:last-child').insertAdjacentHTML('afterend', `<p class="info">${text.join(' ')}</p>`);
    realConsole.info(text);
  },
  log: (...text) => {
    document.querySelector('.console p:last-child').insertAdjacentHTML('afterend', `<p class="log">${text.join(' ')}</p>`);
    realConsole.log(text);
  },
  warn: (...text) => {
    document.querySelector('.console p:last-child').insertAdjacentHTML('afterend', `<p class="warn">${text.join(' ')}</p>`);
    realConsole.warn(text);
  },
};
