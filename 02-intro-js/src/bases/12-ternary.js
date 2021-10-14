const active = true;

let msg = '';

if (active) {
    msg = 'Active';
}else{
    msg = 'Disabled';
} 

const msg = ( active ) ? 'Active' : 'Disabled';

const msg = active  && 'Active';


console.log(msg);