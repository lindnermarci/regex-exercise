// validation script here

const inputs = document.querySelectorAll('input');
console.log(inputs)
const patterns = {
    telephone: /^\d{11}$/

}

//validation
function validate(field,regex){
    console.log(regex.test(field.value));
}

inputs.forEach((input) => {
    input.addEventListener('keyup',(e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
})