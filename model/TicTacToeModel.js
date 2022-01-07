class TictactoeModel {
  constructor(tomb) {
    this.tomb = tomb;
  }

  ellenorzes() {
    let txt = vizszintesEllenorzes(this.tomb)+fuggolegesEllenorzes(this.tomb)+atloEllenorzes(this.tomb);
    let allapot = "";
    if (txt.indexOf("XXX") >= 0) {
      allapot = "X";
    }
    if (txt.indexOf("OOO") >= 0) {
      allapot = "O";
    }
    return allapot;

    function vizszintesEllenorzes(tomb) {
      let vizszintes = "";
      tomb.forEach((element, index) => {
        vizszintes += element.ertek;
        if (index % 3 == 2) {
          vizszintes += "|";
        }
      });

      return vizszintes;
    }
    function fuggolegesEllenorzes(tomb) {
        let fugg="";
        for (let index = 0; index < 3; index++) {
             fugg+=tomb[index].ertek+tomb[index+3].ertek+tomb[index+6].ertek+"|";
        }
        return fugg;
      }
    function atloEllenorzes(tomb) {
        let atlo = tomb[0].ertek+tomb[4].ertek+tomb[8].ertek+"|"+tomb[2].ertek+tomb[4].ertek+tomb[6].ertek+"|";
        return atlo;
      }
    
  }
}
