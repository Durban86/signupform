const passwordCheck = function() {
    if (document.getElementById('confirmpw').value != 
    document.getElementById('password').value) {
        document.getElementById('confirmpw').classList.add('form-row input:valid');
    }
}