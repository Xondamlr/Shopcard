const fs = require('fs')
const path = require('path')
const dir = path.join(__dirname, '..', 'data', 'card.json')

class Card {

    static async add(book) {
        let card = await Card.getCard()
        const idx = card.books.findIndex(item => item.id === book.id) // agar yo'q bo'sa -1

        // const condidate = card.phones[idx]

        if (idx === -1) {
            // demak kitob baza yo'q uni count = 1 qilib yangi object qilib qo'shamiz
            book.count = 1
            card.books.push(book)
           
        } else {
            // demak idx qandaydur index kalit (idx = 2) kitob bazada bor // faqat count ni +1
            book.count = card.books[idx].count + 1
            // card.count = book.count
            card.books[idx] = book
        }
        
        card.price = card.price + +book.price
        card.count += 1
      
        

        return new Promise((res, rej) => {
            fs.writeFile(dir, JSON.stringify(card), (err) => {
                if (err) rej(err)
                else res()
            })
        })
    }

    static async getCard() {
        return new Promise((res, rej) => {
            fs.readFile(dir, 'utf-8', (err, data) => {
                if (err) rej(err)
                else res(JSON.parse(data))
            })
        })
    }
}

module.exports = Card