import { readFile, writeFile } from "fs/promises";


export class userRepository  {
  async findOne (id: string){
    const contentFile = await readFile('user.json', 'utf-8')
    const user   = JSON.parse(contentFile)
    return user[id]
  }

  async findAll(){
    const contentFile = await readFile('user.json', 'utf-8')
    const user     = JSON.parse(contentFile)
    return user

  }

  async create(content: string){
    const contentFile =  await readFile('user.json','utf-8')
    const user = JSON.parse(contentFile)

    const id  = Math.floor(Math.random() * 999)
    user[id] = {
        id, content
    }
    await writeFile('user.json', JSON.stringify(user))
   
    

  }
}

