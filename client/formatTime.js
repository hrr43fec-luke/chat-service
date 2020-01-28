function formatTime(seconds) {
  let str = '';

  const roundedSeconds = Math.round(seconds);

  const hours = Math.floor(roundedSeconds / 3600);
  if (hours) {
    str = `${hours.toString()}:`;
  }

  const minutes = Math.floor((roundedSeconds - hours * 3600) / 60);
  if (str !== '') {
    str = `${str}${minutes.toString().padStart(2, '0')}:`;
  } else {
    str = `${minutes.toString()}:`;
  }

  const remainingSeconds = Math.floor(roundedSeconds - 3600 * hours - 60 * minutes);
  str = `${str}${remainingSeconds.toString().padStart(2, '0')}`;

  return str;
}

module.exports = formatTime;
