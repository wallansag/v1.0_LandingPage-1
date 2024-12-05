alert("Cookies: Para melhorar a sua experiência de navegação, coletamos parte do seus dados  !!!")

//Versao 2.0: Lista Suspensa Melhorada
function validacaoteFormulario() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('telefone').value;
    const gender = document.getElementById('genero').value;
    const birthDate = document.getElementById('DataNascimento').value;

    let errorMessage = '';

    if (!name || !email || !phone || !gender || !birthDate) {
        errorMessage = 'Por favor, preencha todos os campos.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        errorMessage = 'Por favor, insira um e-mail válido.';
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert(`Dados inseridos:
        Nome: ${name}
        E-mail: ${email}
        Telefone: ${phone}
        Gênero: ${gender}
        Data de Nascimento: ${birthDate}`);
    }
}
