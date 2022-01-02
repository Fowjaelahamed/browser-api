// alert('phone rakho');
const maComing = () => {
    alert('ammu astese phone rekhe porte boso');
}
const askPicnic = () => {
    const response = confirm('are you going to picnic?');
    // console.log(response);
    if (response === true) {
        alert('bkash e taka deeee');
    } else {
        console.log('vag shala')
    }
}

const askName = () => {
    const name = prompt('what is your name ?');
    if (name) {
        console.log(name);
    }
}