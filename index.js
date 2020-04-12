window.onload = () => {
    const beeperBtn = document.querySelector('#beeper-btn');

    let isBeeperActivated = false;

    const toggleBeeper = () => {
        isBeeperActivated = !isBeeperActivated;

        isBeeperActivated ? 
        fetch('https://dog-locator396742.herokuapp.com/api/startBeeper')
            .then(res => console.log(res)) 
        :
        fetch('https://dog-locator396742.herokuapp.com/api/stopBeeper')
            .then(res => console.log(res)) ;
    }

    beeperBtn.addEventListener('click', toggleBeeper);
}