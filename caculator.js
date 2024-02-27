document.querySelectorAll('.button-cacl').forEach((button)=>{
    button.addEventListener('click', ()=>{
        let soA = parseFloat(document.querySelector('#soA').value);
        let soB = parseFloat(document.querySelector('#soB').value);
        let id = button.id
        let ketQua = 0;
        if(id === 'plus'){
            ketQua = soA + soB;
        }else if(id === 'desc'){
            ketQua = soA - soB;
        }else if(id === 'mul'){
            ketQua = soA * soB;
        }else if(id === 'div'){
            ketQua = soA / soB;
        }
        document.querySelector('#ketQua').value = ketQua;
    });
});