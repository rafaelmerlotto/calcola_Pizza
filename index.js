function calcoloImpasto() {

    const form = document.querySelector('.form');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const quantPanetti = document.querySelector('.quant').value;
        const pesoPanetto = document.querySelector('.peso').value;
        const idratazione = document.querySelector('.idratazione').value;


        let calcoloIniziale = (quantPanetti * pesoPanetto);
        let calcoloFarina = (calcoloIniziale * idratazione) / 100;
        let calcoloIdratazione = calcoloIniziale - calcoloFarina;
        let calcoloSale = ((calcoloIniziale * 2) / 100);
        let calcoloLievito = (calcoloIniziale * 0.2) / 100;
        let calcoloFinale = calcoloFarina + calcoloIdratazione + calcoloSale + calcoloLievito;

        const risultato = document.querySelector('.risultato');
        risultato.innerHTML = `<p>Totale Impasto: ${Math.trunc(calcoloFinale).toLocaleString()} Kg</p><br> 
                               <p>Farina: ${Math.trunc(calcoloFarina).toFixed()}g </p><br> 
                               <p>Acqua: ${Math.trunc(calcoloIdratazione).toFixed()}g</p><br> 
                               <p>Sale: ${Math.trunc(calcoloSale).toFixed()}g</p><br> 
                               <p>Lievito: ${calcoloLievito}g </p><br> 
                               <p> Totale di ${quantPanetti} palline da ${(calcoloFinale / quantPanetti).toFixed()}g, ${idratazione}% di idratazione</p><br> `
    })

}
calcoloImpasto();