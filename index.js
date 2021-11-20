window.onload = () => {
  const beeperBtn = document.querySelector("#beeper-btn");
  const beeperBtnOff = document.querySelector("#beeper-btn-ff");

  const toggleBeeper = () => {
    fetch("http://localhost:3000/api/startBeeper").then((res) =>
      console.log(res)
    );
  };

  const offBeeper = () => {
    fetch("http://localhost:3000/api/stopBeeper").then((res) =>
      console.log(res)
    );
  };

  beeperBtn.addEventListener("click", toggleBeeper);
  beeperBtnOff.addEventListener("click", offBeeper);
};
