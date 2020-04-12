window.onload = () => {
    const beeperBtn = document.querySelector('#beeper-btn');

    let isBeeperActivated = false;

    const toggleBeeper = () => {
        isBeeperActivated = !isBeeperActivated;

        isBeeperActivated ? 
        fetch('http://localhost:3000/api/startBeeper')
            .then(res => console.log(res)) 
        :
        fetch('http://localhost:3000/api/stopBeeper')
            .then(res => console.log(res)) ;
    }

    beeperBtn.addEventListener('click', toggleBeeper);
}