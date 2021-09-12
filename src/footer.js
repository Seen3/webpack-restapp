const footMaker=()=>{
    let foot=document.createElement('footer')
    let footText=document.createElement('p');
    footText.innerText="Copyright Seen3 :)";
    foot.appendChild(footText);
    foot.style.backgroundColor="rgba(0,0,0,0.3)";
    foot.style.color="white";
    foot.style.textAlign="center";
    foot.style.position="absolute";
    foot.style.width="100%";
    foot.style.bottom='0';
    document.getElementById('body').appendChild(foot);
}
export {footMaker}