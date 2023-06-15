$(document).ready(function() {
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('.page-title').addClass("sticky");
		}
		else{
			$('.page-title').removeClass("sticky");
		}
	});

});

let true_or_false = 0;
let type_choice = '';
let subtype_choice = '';

//document.cookie = "authorization=success";
var XMLHttpRequestWithJWT = function (method, url, async){
    const jwt_num = document.cookie.match(/jwt=([^;]+)/);
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open(method, url, async);
    //alert(result[1]);
    xmlHttpRequest.setRequestHeader('Authorization', 'Bearer ' + jwt_num[1]);
    return xmlHttpRequest;
};

/*function submitStat(){
    //console.log(result[1])

    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const amount = document.getElementById("Amount_for_betting").value;
            const security_code = document.getElementById("Security_for_betting").value;

            alert(amount + security_code + type_choice + subtype_choice);
            //true_or_false = 0;
        }

    const amount = document.getElementById("Amount_for_betting").value;
    const security_code = document.getElementById("Security_for_betting").value;

    //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}*/

function submitStat_Villa(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
        //location.reload();
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Villa").innerText;
            const away_team = document.getElementById("Brighton").innerText;
            const amount = document.getElementById("Amount_for_betting_Villa").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
            //location.reload();
        }
    }
}

function submitbig_Villa(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Villa").innerText;
            const away_team = document.getElementById("Brighton").innerText;
            const amount = document.getElementById("Amount_for_big_Villa").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCorner_Villa(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Villa").innerText;
            const away_team = document.getElementById("Brighton").innerText;
            const amount = document.getElementById("Amount_for_Corner_Villa").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCard_Villa(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Villa").innerText;
            const away_team = document.getElementById("Brighton").innerText;
            const amount = document.getElementById("Amount_for_Card_Villa").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitStat_Everton(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Everton").innerText;
            const away_team = document.getElementById("Bournemouth").innerText;
            const amount = document.getElementById("Amount_for_betting_Everton").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitbig_Everton(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Everton").innerText;
            const away_team = document.getElementById("Bournemouth").innerText;
            const amount = document.getElementById("Amount_for_big_Everton").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCorner_Everton(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Everton").innerText;
            const away_team = document.getElementById("Bournemouth").innerText;
            const amount = document.getElementById("Amount_for_Corner_Everton").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCard_Everton(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Everton").innerText;
            const away_team = document.getElementById("Bournemouth").innerText;
            const amount = document.getElementById("Amount_for_Card_Everton").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitStat_Leeds(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Leeds").innerText;
            const away_team = document.getElementById("Tottenham").innerText;
            const amount = document.getElementById("Amount_for_betting_Leeds").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitbig_Leeds(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Leeds").innerText;
            const away_team = document.getElementById("Tottenham").innerText;
            const amount = document.getElementById("Amount_for_big_Leeds").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCorner_Leeds(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Leeds").innerText;
            const away_team = document.getElementById("Tottenham").innerText;
            const amount = document.getElementById("Amount_for_Corner_Leeds").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCard_Leeds(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Leeds").innerText;
            const away_team = document.getElementById("Tottenham").innerText;
            const amount = document.getElementById("Amount_for_Card_Leeds").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitStat_United(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Man_United").innerText;
            const away_team = document.getElementById("Fulham").innerText;
            const amount = document.getElementById("Amount_for_betting_United").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitbig_United(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Man_United").innerText;
            const away_team = document.getElementById("Fulham").innerText;
            const amount = document.getElementById("Amount_for_big_United").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCorner_United(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Man_United").innerText;
            const away_team = document.getElementById("Fulham").innerText;
            const amount = document.getElementById("Amount_for_Corner_United").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCard_United(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Man_United").innerText;
            const away_team = document.getElementById("Fulham").innerText;
            const amount = document.getElementById("Amount_for_Card_United").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitStat_Chelsea(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Chelsea").innerText;
            const away_team = document.getElementById("away_newcastle").innerText;
            const amount = document.getElementById("Amount_for_betting_Chelsea").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitbig_Chelsea(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Chelsea").innerText;
            const away_team = document.getElementById("away_newcastle").innerText;
            const amount = document.getElementById("Amount_for_big_Chelsea").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCorner_Chelsea(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Chelsea").innerText;
            const away_team = document.getElementById("away_newcastle").innerText;
            const amount = document.getElementById("Amount_for_Corner_Chelsea").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCard_Chelsea(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Chelsea").innerText;
            const away_team = document.getElementById("away_newcastle").innerText;
            const amount = document.getElementById("Amount_for_Card_Chelsea").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitStat_Leicester(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Leicester").innerText;
            const away_team = document.getElementById("away_west").innerText;
            const amount = document.getElementById("Amount_for_betting_Leicester").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitbig_Leicester(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Leicester").innerText;
            const away_team = document.getElementById("away_west").innerText;
            const amount = document.getElementById("Amount_for_big_Leicester").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCorner_Leicester(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Leicester").innerText;
            const away_team = document.getElementById("away_west").innerText;
            const amount = document.getElementById("Amount_for_Corner_Leicester").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCard_Leicester(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Leicester").innerText;
            const away_team = document.getElementById("away_west").innerText;
            const amount = document.getElementById("Amount_for_Card_Leicester").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitStat_Arsenal(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("home_Arsenal").innerText;
            const away_team = document.getElementById("away_wovles").innerText;
            const amount = document.getElementById("Amount_for_betting_Arsenal").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitbig_Arsenal(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("home_Arsenal").innerText;
            const away_team = document.getElementById("away_wovles").innerText;
            const amount = document.getElementById("Amount_for_big_Arsenal").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCorner_Arsenal(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("home_Arsenal").innerText;
            const away_team = document.getElementById("away_wovles").innerText;
            const amount = document.getElementById("Amount_for_Corner_Arsenal").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCard_Arsenal(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("home_Arsenal").innerText;
            const away_team = document.getElementById("away_wovles").innerText;
            const amount = document.getElementById("Amount_for_Card_Arsenal").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}


function submitStat_Southampton(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Southampton").innerText;
            const away_team = document.getElementById("away_liverpool").innerText;
            const amount = document.getElementById("Amount_for_betting_Southampton").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitbig_Southampton(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Southampton").innerText;
            const away_team = document.getElementById("away_liverpool").innerText;
            const amount = document.getElementById("Amount_for_big_Southampton").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCorner_Southampton(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Southampton").innerText;
            const away_team = document.getElementById("away_liverpool").innerText;
            const amount = document.getElementById("Amount_for_Corner_Southampton").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function submitCard_Southampton(){
    if(document.cookie.indexOf('authorization=') == -1){
        alert('you must login first before having a bet');
    }
    else{
        if(true_or_false == 1){
            //const home_team = document.getElementById("team_name").value;
            const home_team = document.getElementById("Southampton").innerText;
            const away_team = document.getElementById("away_liverpool").innerText;
            const amount = document.getElementById("Amount_for_Card_Southampton").value;

            var url = "http://localhost:8080/api/v1/order/newOrder";
            var xhr = XMLHttpRequestWithJWT("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");

            var data = {
                homeTeam: home_team,
                awayTeam: away_team,
                type: type_choice,
                subType: subtype_choice,
                amount: amount
            };

            xhr.send(JSON.stringify(data));
            location.reload();
        }
        /*const amount = document.getElementById("Amount_for_betting").value;
        const security_code = document.getElementById("Security_for_betting").value;
        */
        //alert(amount + security_code);
        if(true_or_false == 0){
            alert('You have not chosen which type to bet on');
        }
    }
}

function chooseWin(){
    type_choice = 'winorloss';
    subtype_choice = 'win';
    true_or_false = 1;
}

function chooseDraw(){
    type_choice = 'winorloss';
    subtype_choice = 'draw';
    true_or_false = 1;
}

function chooseLoss(){
    type_choice = 'winorloss';
    subtype_choice = 'loss';
    true_or_false = 1;
}

function chooseBig(){
    type_choice = 'bigsmall';
    subtype_choice = 'big';
    true_or_false = 1;
}

function chooseSmall(){
    type_choice = 'bigsmall';
    subtype_choice = 'small';
    true_or_false = 1;
}

function cardBig(){
    type_choice = 'cards';
    subtype_choice = 'big';
    true_or_false = 1;
}

function cardSmall(){
    type_choice = 'cards';
    subtype_choice = 'small';
    true_or_false = 1;
}

function chooseHome(){
    type_choice = 'corners';
    subtype_choice = 'home';
    true_or_false = 1;
}

function chooseSame(){
    type_choice = 'corners';
    subtype_choice = 'same';
    true_or_false = 1;
}

function chooseAway(){
    type_choice = 'corners';
    subtype_choice = 'away';
    true_or_false = 1;
}



function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        /*const token = document.cookie.match(/jwt=(.+)/);
        if(token[1] != null){
            //alert(token[1]);
            document.cookie = "authorization=success";
        }
        else{
            setFormMessage(loginForm, "error", "Invalid username/password combination");
        }*/
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

function login(){
    const login_email = document.getElementById("login_email").value;
    const login_pwd = document.getElementById("login_pwd").value;

    //alert(login_email + login_pwd);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            //alert(xhr.status)//200, 403
            if(xhr.status == 200){
                document.cookie = "authorization=success";
                const loginForm = document.querySelector("#login");
                setFormMessage(loginForm, "success", "Login Succeed, the page will be jumped to home page in 3 seconds");
                //window.location.href = "index.html";
                tiaotrigger();
            }
            else{
                const loginForm = document.querySelector("#login");
                setFormMessage(loginForm, "error", "Invalid username/password combination");
            }
            jwtToken = JSON.parse(xhr.response).token;
            document.cookie = "jwt="+jwtToken;
        }
    }
    var url = "http://localhost:8080/api/v1/auth/authenticate";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = {
        email: login_email,
        password: login_pwd
    };

    xhr.send(JSON.stringify(data));
}

/*document.getElementById("purchase_history").onclick = function () {
    if(document.cookie.indexOf('authorization=') == -1){
        alert('failure of login, please make sure you type in the correct username and pwd');
        var temp = document.getElementById("warning-message");
        temp.innerText = "Login Succeed";
    }
    if(s_or_fail == "success"){
        var tbody = document.querySelector('#data_purchase_history');
        var tr = document.createElement('tr');
        var td0 = document.createElement('td');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');

        td0.innerHTML = '1'; //change this num to a count when utilizing later
        td1.innerHTML = 'Arsenal';
        td2.innerHTML = 'Liverpool';
        td3.innerHTML = 'Big or Small';
        td4.innerHTML = 'Big';
        td5.innerHTML = '50000';
        td6.innerHTML = 'UCI MCS';

        tr.append(td0);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
        tr.append(td6);
        tbody.append(tr);
    }
  };*/

function signup(){
    const username = document.getElementById("signup_username").value;
    const realname = document.getElementById("signup_realname").value;
    const email = document.getElementById("signup_email").value;
    const password = document.getElementById("signup_pwd").value;
    const check_pwd = document.getElementById("rpt_pwd").value;
    const age = document.getElementById("signup_age").value;
    const phone = document.getElementById("signup_phone").value;
    const address = document.getElementById("signup_address").value;

    alert(username + email + password);
    
    if(check_pwd != password){
        alert("Please make sure that you type in the same password")
    }

    var xhr = new XMLHttpRequest();
    var url = "http://localhost:8080/api/v1/auth/register";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    var data = {
        username: username,
        realname: realname,
        email: email,
        password: password,
        age: age,
        address: address,
        phone: phone
    };

    xhr.send(JSON.stringify(data));

    /*if(pwd != check_pwd){
        alert('Please make sure that you type in the same password');
    }
    if(pwd == check_pwd){
        alert(username + email + pwd);
    }*/
}
//var mytime = setInterval("changeSec()",1000);
function tiao() {
    //clearInterval(mytime);
    window.location.href = "index.html";
}

var myVar;
function tiaotrigger() {
    myVar = setTimeout(tiao, 3000);
}
//setTimeout("tiao()",5000);

function winorloss(){
    //alert("I'm in");
    //window.location.href = 'post.html';
    document.cookie = 'winorloss=success';
    /*const num1 = "3.56";
    const num2 = "2.57";
    const num3 = "4.20";
    var input_home = document.getElementsByClassName("spec_odds_home");
    var input_draw = document.getElementsByClassName("spec_odds_draw");
    var input_away = document.getElementsByClassName("spec_odds_away");
    input_home[0].innerHTML = "odd = " + num1;
    input_draw[0].innerHTML = "odd = " + num2;
    input_away[0].innerHTML = "odd = " + num3;
    input_home[1].innerHTML = "odd = 20.34";*/
    return true;
}

function bigsmall(){
    document.cookie = 'bigsmall=success';
    return true;
}

function corner(){
    document.cookie = 'corners=success';
    return true;
}

function card(){
    document.cookie = 'cards=success';
    return true;
}

function history(){
    document.cookie = 'access=success';
    return true;
}
/*{
    name:
    history:{

    }
}*/