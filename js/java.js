var frisAmount;
var frisTotal = 0;
var frisPrijs = 2.60;
var bierAmount;
var bierTotal = 0;
var bierPrijs = 3.70;
var wijnAmount;
var wijnTotal = 0;
var wijnPrijs = 6.15;
var achtSnacksAmount;
var achtSnacksTotal = 0;
var achtSnacksPrijs = 4.20;
var zestienSnacksAmount;
var zestienSnacksTotal = 0;
var zestienSnacksPrijs = 7.50;
var totalPrice = 0;
function startOrder(decision) {
    console.log(decision);
    if (decision === "fris") {
        console.log("U heeft " + decision + " besteld.");
        frisAmount = parseInt(prompt("Hoeveel " + decision + " wilt u bestellen?"));
        console.log(decision + " x " + frisAmount);
        frisTotal = frisTotal + frisAmount;
        console.log(frisTotal);
        startOrder(prompt("Welke bestelling wilt u toevoegen?").toLowerCase());
    } else if (decision === "bier") {
        console.log("U heeft " + decision + " besteld.");
        bierAmount = parseInt(prompt("Hoeveel " + decision + " wilt u bestellen?"));
        console.log(decision + " x " + bierAmount);
        bierTotal = bierTotal + bierAmount;
        console.log(bierTotal);
        startOrder(prompt("Welke bestelling wilt u toevoegen?").toLowerCase());
    } else if (decision === "wijn") {
        console.log("U heeft " + decision + " besteld.");
        wijnAmount = parseInt(prompt("Hoeveel " + decision + " wilt u bestellen?"));
        console.log(decision + " x " + wijnAmount);
        wijnTotal = wijnTotal + wijnAmount;
        console.log(wijnTotal);
        startOrder(prompt("Welke bestelling wilt u toevoegen?").toLowerCase());
    } else if (decision === "snack") {
        snacksOrder(parseInt(prompt("Hoeveel bitterballenbitterballen wilt u bestellen? 8 bitterballen | 16 bitterballen")));
    } else if (decision === "stop") {
        alert("Uw rekening wordt uitgeprint.");
        bill();
    }
}

// Houdt bij hoeveel snacks je besteld hebt en voegt dit toe aan de bestelling.
function snacksOrder(order) {
    if (order === 8) {
        achtSnacksAmount = parseInt(prompt("Hoeveel schalen van " + order + " bitterballen wilt u bestellen?"));
        achtSnacksTotal = achtSnacksTotal + achtSnacksAmount;
        startOrder(prompt("Welke bestelling wilt u toevoegen?").toLowerCase());
    } else if (order === 16) {
        zestienSnacksAmount = parseInt(prompt("Hoeveel schalen van " + order + " bitterballen wilt u bestellen?"));
        zestienSnacksTotal = zestienSnacksTotal + zestienSnacksAmount;
        startOrder(prompt("Welke bestelling wilt u toevoegen?").toLowerCase());
    } else if (order != 8 || order != 16) {
        alert("U kunt alleen kiezen tussen schalen van 8 en 16 bitterballen.");
        snacksOrder(parseInt(prompt("Hoeveel bitterballen wilt u bestellen? 8 bitterballen | 16 bitterballen")));
    }
}

function bill() {
    frisPrijs = frisPrijs * frisTotal;
    bierPrijs = bierPrijs * bierTotal;
    wijnPrijs = wijnPrijs * wijnTotal;
    achtSnacksPrijs = achtSnacksPrijs * achtSnacksTotal;
    zestienSnacksPrijs = zestienSnacksPrijs * zestienSnacksTotal;
    document.write("<h1>Uw bestelling: </h1>");

    if (frisTotal > 0) {
        document.write(frisTotal + " x fris &euro;" + frisPrijs.toFixed(2) + "<br>");
    } else {
    }
    if (bierTotal > 0) {
        document.write(bierTotal + " x bier &euro;" + bierPrijs.toFixed(2) + "<br>");
    } else {
    }
    if (bierTotal > 0) {
        document.write(wijnTotal + " x wijn &euro;" + wijnPrijs.toFixed(2) + "<br>");
    } else {
    }
    totalPrice = totalPrice + frisPrijs + bierPrijs + wijnPrijs + achtSnacksPrijs + zestienSnacksPrijs;
    if (achtSnacksTotal > 0) {
        document.write(achtSnacksTotal + " x " + " bitterbalschaal van 8 stuks &euro; " + achtSnacksPrijs.toFixed(2) + "<br>");
    } else {
    }
    if (zestienSnacksTotal > 0) {
        document.write(zestienSnacksTotal + " x " + " bitterbalschaal van 16 stuks &euro; " + zestienSnacksPrijs.toFixed(2) + "<br>");
    } else {
    }
    if (totalPrice === 0) {
        document.write("U heeft niks op bestelling staan.");
    } else {
        document.write("---------------------------------------------<br>");
        document.write("Totaal: &euro;" + totalPrice.toFixed(2));
    }
}
startOrder(prompt("Welke bestelling wilt u toevoegen?").toLowerCase());