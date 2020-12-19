const exp = require('express'); //importa o express.
const app = exp();//starta o express.

app.set('view engine', 'ejs')//comando para definir a view engine, no exemplo seria o ejs
app.use(exp.static('publlic'))//cria arquivos estaticos

app.get("/", (req, res)=>{
    res.send("primeira rota"); //toda rota criada precisa ter uma resposta.
})
app.get("/oi/:nome?/:artigo?", (req, res)=>{// /:nome cria um parametro de nome, nome. '?' deixa o parametro opcional
    let nome = req.params.nome
    let artigo = req.params.artigo
    if(artigo){
        res.send(`Olá, ${nome} ${artigo}, coma alho.`);
    }else{
        res.send(`Olá, ${nome}, não coma alho.`)
    }
})
app.get("/alho", (req, res)=>{
    //req dados q pega do usuario
    //res respoosta dada ao usuario
    res.send("Coma alho"); 
})

app.get("/youtube/nome", (req, res)=>{
    const canal = req.query['youtube'];//recebe um parametro para as rotas
    if(canal){
        res.send(canal)//http://localhost:2424/youtube/nome?youtube=dasda para ver esse codigo
    }else{
        res.send("nenhum canal fornecido.")
    }
})

app.listen(2424 ,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("foi")
    }
})

app.get("/:nome?",(req,res)=>{
    const nome = req.params.nome
    const lang = "js"
    const msg = true
    const produtos = [
        {nome:"Alho", preco: 24, poder:"ser muito bom"},
        {nome:"batata", preco: 24324, poder:"ser muito bom"},
        {nome:"feijão", preco: 4, poder:"ser muito bom"},
        {nome:"pizza de feijão", preco: 0, poder:"ser muito bom"},
        {nome:"pizza de amendoin", preco: 264, poder:"ser muito bom"},
    ]
    res.render("index",{
        nome,
        lang,
        empresa: "alho",
        quantidade: 24,
        m: msg,
        product: produtos
    })//como está com o render ejs ele ja busca o diretorio views
})