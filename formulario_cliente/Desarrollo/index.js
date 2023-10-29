const listState = ['Active','Inactive'];
const listKindOfProduct = ['tipo 1','tipo2','tipo 3','tipo 4'];

const cbState = document.getElementById('state');
const cbKindOfProduct = document.getElementById('kindOfProduct');
const alertIncomplet = document.getElementById('alert');

for (let i = 0 ; i< listState.length; i++){
    let option = document.createElement('option');
    option.text = listState[i];
    option.value = i;
    cbState.appendChild(option)
}

for (let i = 0 ; i< listKindOfProduct.length; i++){
    let option = document.createElement('option');
    option.text = listKindOfProduct[i];
    option.value = i;
    cbKindOfProduct.appendChild(option)
}

alertIncomplet.style.display = 'none';



