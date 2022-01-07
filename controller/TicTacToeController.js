class TictactoeController {
  constructor() {
    let tomb = [];
    let lepes = 0;
    let jatekter = new Jatekter(tomb);
    let tictactoemodel = new TictactoeModel(tomb);
    let infoview = new InfoView();

    $(window).on("ujJatekElemkattintas", () => {
      init();
    });

    $(window).on("elemkattintas", (event) => {
      lepes++;
      if (lepes % 2 == 0) {
        event.detail.setElem("X");
        let nev = infoview.getxNevElem();
        infoview.setkovElem(nev + " következik");
      } else {
        let nev = infoview.getoNevElem();
        infoview.setkovElem(nev + " következik");
        event.detail.setElem("O");
      }
      if (tictactoemodel.ellenorzes() == "X") {
        let nev = infoview.getxNevElem();
        vege(nev);
      } else if (tictactoemodel.ellenorzes() == "O") {
        let nev = infoview.getoNevElem();
        vege(nev);
      } else if (lepes == 9) {
        infoview.setvegeelem("döntetlen");
      }
    });

    function vege(nev){
        infoview.setvegeelem(nev + " nyert");
        jatekter.setInaktiv();
    }

    function init() {
      tomb = [];
      lepes = 0;
      jatekter = new Jatekter(tomb);
      tictactoemodel = new TictactoeModel(tomb);
      infoview = new InfoView();
    }
  }
}
