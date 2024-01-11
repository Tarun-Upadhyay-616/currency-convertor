let Countryname = "INR"
const url = `https://v6.exchangerate-api.com/v6/38a593a1b1d2b2077e770539/latest/${Countryname}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '38a593a1b1d2b2077e770539',
        // 'X-RapidAPI-Key': '49127acf14msh3265d6cfa251a95p17a356jsn94026134151e',
        // 'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
};

const fromDropDown = document.getElementById('from');
const ToDropDown = document.getElementById('to');
const result = document.querySelector(".result")




let convert = ()=>{
    const Amount = document.querySelector("#amount").value;
    const fromcurrency = fromDropDown.value;
    const tocurrency = ToDropDown.value;

    if(Amount.length != 0){
        fetch(url, options)
        .then(response => response.json())
        .then((data) =>{
        let fromexchangerate = data.conversion_rates[fromcurrency];
        let toexchangerate = data.conversion_rates[tocurrency];

        let converted = (Amount/fromexchangerate)*toexchangerate

        result.innerHTML = `${Amount} ${fromcurrency} = ${converted.toFixed(2)} ${tocurrency}`
    })

    }
    else{
        alert("Fill some amount")
    }
}
document
    .querySelector(".btn")
    .addEventListener("click",convert);
    window.addEventListener("load",convert)


currencies.forEach((currency)=>{
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
})
currencies.forEach((currency)=>{
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    ToDropDown.add(option);
})

fromDropDown.value = "USD";
ToDropDown.value = "INR";



    // .catch(err => console.log(err))