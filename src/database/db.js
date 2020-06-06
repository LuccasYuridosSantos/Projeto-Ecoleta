//importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto que irá fazer operações no banco de dados
const db=new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilizar o objeto de banco de dados, para nossos operações
db.serialize(()=>{
    //com comandos sql
    
    //1-criar uma tabela 
/*  db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2-inserir dados na tabela
        const query =`
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        "Papersider",
        "Guilherme Gemballa, jardim América",
        "Nº 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis e Papelão"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query,values,afterInsertData)

    //3-consultar os dados da tabela

    db.all(`SELECT * FROM places`, function(err,rows){
        if(err){
            return console.log(err)
        }
        console.log("Aqui estão seus registros: ")
        console.log(rows)
    })*/
    
    //deletar dados
    //4-deletar um dado da tabela*/
    db.run(`DELETE FROM places WHERE id = ?`, [39], function(err){
        if(err){
            return console.log(err)
        }
        console.log("Registro deletado com sucesso! ")
        
    })

})