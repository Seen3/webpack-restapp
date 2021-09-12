const makeHome=()=>{
    let bigdiv=document.createElement("div");
    bigdiv.style.textAlign="center";
    
    bigdiv.style.backgroundColor="rgba(0,0,0,0.7)";
    bigdiv.style.width="45%";
    bigdiv.style.margin="3em auto";

    bigdiv.style.borderRadius="25%";
    bigdiv.style.border="1em groove gold";

    let para=document.createElement("p");
    para.innerText="Cum Get Sum";
    para.style.color="white";


    let pic=document.createElement("img");
    pic.src="https://cdn.quotesgram.com/img/42/36/1326936539-sad_pikachu_by_ishizai-d34wq87.jpg";
    pic.style.width="45%";
    pic.style.borderRadius="40%";
    let downText=document.createElement('P');
    downText.innerText="Sad Pikachu";

    downText.style.color="white";

    bigdiv.appendChild(para);
    bigdiv.appendChild(pic);
    bigdiv.appendChild(downText);
    document.getElementById('body').appendChild(bigdiv);
}
export {makeHome}