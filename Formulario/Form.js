const nome = document.querySelector("#nomeid");
const endereco = document.querySelector("#enderecoid");
const cidade = document.querySelector("#cidadeid");
const uf = document.querySelector("#Ufid");
const telefone = document.querySelector("#TelefoneId");
const celular = document.querySelector("#Celularid");
const email = document.querySelector("#Emailid");
const profissao = document.querySelector("Profissaoid");
const motivo = document.querySelector(".MotivoSoli");
const Rg = document.querySelector("#Rgid")
const Cnh = document.querySelector("#Cnhid");
const cpf = document.querySelector("#Cpfid");  
const título = document.querySelector("#TítuloId");
const passAntigo = document.querySelector("#pAntigo")
const passaporte = document.querySelector("#NumPassaporteid")
const nomeError = document.querySelector("#nomeError");
const enderecoError = document.querySelector("#enderecoError");
const cidadeError = document.querySelector("#cidadeError");
const ufError = document.querySelector("#ufError");
const emailError = document.querySelector("#emailError");

MaskJS(telefone).mascararPadrao("(99) 9999-9999");
MaskJS(uf).mascararPadrao("AA");
MaskJS(celular).mascararPadrao("(99) 9-9999-9999");
MaskJS(Rg).mascararPadrao("9999999999-9");
MaskJS(cpf).mascararPadrao("999.999.999-99");
MaskJS(Cnh).mascararPadrao("99999999999");
MaskJS(passaporte).mascararPadrao("AA999999");
MaskJS(titulo).mascararPadrao("999999999999");

const fornome = valor =>{
	const pNome = /[^a-zA-Z\s]+/gi;
	if(pNome.test(valor)){
		nomeError.innerText  = "nome inválido";

}else{
	nomeError.innerText  = "";
}
}

const forcidade = valor  =>{
	const pCidade = /[\d]/gi;
	if(pCidade.test(valor)){
		cidadeError.innerText = "cidade inválida";
	}else{
		cidadeError.innerText = "";
		
	}
}

const forendereco = valor  =>{
	const pEndereco = /[^a-zA-Z0-9]{1,}[vf]+/gi;
	if(pEndereco.test(valor)){
		enderecoError.innerText = "endereco inválido";
	}else{
		enderecoError.innerText = " ";
	}
}

const forUf = valor  =>{
	const pUf = /[\d]{2}/gi;
	if(pUf.test(valor)){
		ufError.innerText = "Uf inválido";
	}else{
		ufError.innerText = "";
	}
}


const foremail = valor  =>{
	const pEmail = /[\w]{1,}[@]{1,}[\w]{1,}[.]{1,}[\w]{1,}/gi;
	if(pEmail.test(valor)){
		emailError.innerText = "Email inválido";
	}else{
		emailError.innerText = "";
	}
}