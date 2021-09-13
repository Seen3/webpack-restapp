const makeContacts=()=>{
    let bigdiv=document.createElement("div");
    bigdiv.style.textAlign="center";
    
    bigdiv.setAttribute('id','contact');

    bigdiv.style.backgroundColor="rgba(0,0,0,0.7)";
    bigdiv.style.width="45%";
    bigdiv.style.margin="3em auto";

    bigdiv.style.borderRadius="25%";
    bigdiv.style.border="1em groove crimson";
    let p=document.createElement('p');
    p.innerText="999-888-7777";
    p.style.color="white";
    let p2=document.createElement('p');
    p2.innerText="Chorbazar 42, Los Angeles, USA";
    p2.style.color="white";
    bigdiv.appendChild(p);
    bigdiv.appendChild(p2);
    let map=document.createElement('img');
    map.src="https://michalosman.github.io/restaurant-page/images/restaurant-location.png";
    map.style.borderRadius="30%";
    map.style.padding="3em";
    map.style.width="70%";
    bigdiv.appendChild(map);
    document.getElementById('body').appendChild(bigdiv);

}
export {makeContacts}