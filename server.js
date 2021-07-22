// CONNECTION TO DB

require("dotenv").config()

const connectDB = require('./connectDB')

connectDB();

// CREATING AN INSTANCE OF THE MODEL PERSON

let person = require('./personModel')

// QUERY INSERT DOCUMENT

let record = new person(
    {
        name: "Aymen Garroum",
        age: 37,
        favoriteFoods: ["makarouna", "kosksi"]
    }
)

const save_doc = async() => {
    try {   await record.save()
        console.log("Document ajouté avec succès")
    }
        catch(err) {
        console.log(`L'erreur suivante est survenue : ${err}`)
    }
}

save_doc()

// QUERY INSERT MANY POPULATED WITH AN ARRAY PASSED TO THE FUNCTION CREATE

const person_tab = [
    {name: "Hamma", age: 30, favoriteFoods: ["zlebia", "hergma"]},
    {name: "Hammadi", age: 20, favoriteFoods: ["pizza", "hamburger"]},
    {name: "Marouen", age: 25, favoriteFoods: ["jelbena", "caviar"]},
    {name: "Ines", age: 30, favoriteFoods: ["Foie gras", "salade de fruits"]},
    {name: "Mary clarence", age: 10, favoriteFoods: ["pasta", "tagliatelle"]},
    {name: "Mary machin", age: 15, favoriteFoods: ["moule", "fruits de mer"]},
    {name: "Oussama", age: 47, favoriteFoods: ["burritos"]},
    {name: "Housem", age: 41, favoriteFoods: ["burritos"]},
    {name: "Moncef", age: 47, favoriteFoods: ["burritos"]},
    {name: "Mostafa", age: 35, favoriteFoods: ["burritos"]}
]

const create_docs = async() => {
try {   await person.create(person_tab)
        console.log("Documents ajoutés avec succès")
    }
    catch(err) {
        console.log(`L'erreur suivante est survenue : ${err}`)
    }
}

create_docs()

//QUERY FIND BY NAME

const find_people = async() => {
    try {await person.find({name: /Ha/},(err,docs)=>{
        console.log(docs.map(el => {return el.name}))
    })}
    catch(err) {console.log(`L'erreur suivante est survenue : ${err}`)}
}

find_people()

//QUERY FIND BY FAVORITE FOODS

const find_filter_by_food = async() => {
    try {await person.findOne({favoriteFoods: /kosksi/}, (err, docs)=>{
        console.log(docs.name)
    })

    }catch(err){console.log(`L'erreur suivante est survenue : ${err}`)}
}

find_filter_by_food()

//QUERY FIND BY ID

const find_filter_by_id = async() => {
    try{await person.findById("60f57f8740309d315051533b", (err,docs)=>{
        console.log(docs.name)
    })

    }catch(err){console.log(`L'erreur suivante est survenue : ${err}`)}
}

find_filter_by_id()

// QUERY FIND AND UPDATE FAVORITE FOODS BY ID

const find_and_save = async() => {
    try{const found_person = await person.findById("60f57f8740309d315051533a", (err,docs) =>{return docs})
    found_person.favoriteFoods.push("hamburger")
    found_person.save()
    console.log("Hamburger ajouté avec succès") 

    }catch(err){console.log(`L'erreur suivante est survenue : ${err}`)}
}

find_and_save()

// QUERY FIND AND UPDATE AGE BY NAME

const update_age = async() => {
    try{await person.findOneAndUpdate({name: "Hamma"}, {age: 20}, {new: true}, (err, docs) => {
        console.log(docs)
    })
    }catch(err){console.log(`L'erreur suivante est survenue : ${err}`)}
}

update_age()

// QUERY FIND AND REMOVE BY ID

const remove_by_id = async() => {
    try{await person.findByIdAndRemove("60f57f8740309d315051533e", (err,docs)=>{
        console.log(`${docs.name} supprimé avec succès`)
    })

    }catch(err){console.log(`L'erreur suivante est survenue : ${err}`)}
}

remove_by_id()

// QUERY FIND BY NAME AND REMOVE MANY DOCUMENTS

const remove_many = async() => {
    try{await person.remove({name: /Mary/},(err,docs)=>{
        console.log(docs)
    })
    }catch(err){console.log(`L'erreur suivante est survenue : ${err}`)}
}

remove_many()

// QUERY FIND SORT LIMIT AND SELECT

const multi_query = async() => {
    try{await person.find({favoriteFoods: "burritos"})
                    .sort({name: 1})
                    .limit(2)
                    .select({name: 1, favoriteFoods: 1})
                    .exec((err, docs)=>{
                    console.log(docs)
    })
    }catch(err){console.log(`L'erreur suivante est survenue : ${err}`)}
}

multi_query()

























