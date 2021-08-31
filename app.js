// MY VERSION
// const list = document.querySelectorAll('li')
// console.log(list)

// let timeOfWatch = 0
// let mins = 0
// let seconds = 0

// list.forEach((video) => {
//   let time = video.dataset.time.split(':')
//   mins += parseFloat(time[0])
//   seconds += parseFloat(time[1])
// })

// let hours = Math.floor(mins / 60)
// mins = (mins % 60) + Math.floor(seconds / 60)
// seconds = seconds % 60

// console.log(hours, mins, seconds)

const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

  const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
      const [mins, secs] = timeCode.split(':').map(parseFloat);
      return (mins * 60) + secs;
    })
    .reduce((total, vidSeconds) => total + vidSeconds);

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    secondsLeft = secondsLeft % 3600;

    const mins = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;

    console.log(hours, mins, secondsLeft);