

const a = async () => {
    const response = await fetch("http://localhost/NetCommerce/Model/BuscaProdutos.php")
    const dados = await response.json() 
    return dados
}

export default a