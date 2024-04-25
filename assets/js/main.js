(function() {
    const peso = document.querySelector("#pesoInput");
    const altura = document.querySelector("#alturaInput");  
    const buttonSet = document.querySelector("#enviar");

    buttonSet.addEventListener("click", () => {
        event.preventDefault();
        calculatorIMC.calcular(peso, altura);
    });
})();

let calculatorIMC = {
    calcular(peso, altura){
        const result = peso.value / (altura.value **2);
        this.draw(result.toFixed(2));
    },
    draw(imcResult){
        if(imcResult < 18.5){
            console.log(`Resultado: ${imcResult}, você está abaixo do peso.`);
        } else if(imcResult >= 18.5 && imcResult < 25){
            console.log(`Resultado: ${imcResult}, você está com peso normal.`);
        } else if(imcResult >= 25 && imcResult < 29.9){
            console.log(`Resultado: ${imcResult}, você está com sobrepeso.`);
        } else if(imcResult >= 29.9 && imcResult < 39.9){
            console.log(`Resultado: ${imcResult}, você está com obsidade.`);
        } else{
            console.log(`Resultado: ${imcResult}, você está com obsidade grave`);
        }
    }
}


