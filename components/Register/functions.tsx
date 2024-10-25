const data = {
    name: "Emmanuel",
    surname: "Enemaku",
    username: "rich",
    wallet_address: "0x526ajaas2kzdxas8msnvchdwh8",
    photo: "https://picsum.photos/200"
}
const submit = async () => {
    console.log("Jeff Bezos")
    const response = await fetch('https://backend-server-tvb6.onrender.com/api/users/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await response.json()
    console.log(result)
    console.log("Elon Musk")
}

const data2 = {
    user_id: 3015908552,
    jetton_address: "45545fgggc",
    content: "Elon Musk DDG and Gunna"
}


const submit2 = async () => {
    console.log("Jeff Bezos")
    const response = await fetch('https://backend-server-tvb6.onrender.com/api/posts/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data2)
    })
    const result = await response.json()
    console.log(result)
    console.log("Elon Musk")
}

const data3 = {
    user_id: 4154823444,
}
const submit3 = async () => {
    const response = await fetch('https://backend-server-tvb6.onrender.com/api/posts/50/like', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data2)
    })
    const result = await response.json()
}

const data4 = {
    "post_id": 50,
    "content": "Dont Worry About Us"
};
const submit4 = async () => {
    console.log("Jeff Bezos")
    const response = await fetch('https://backend-server-tvb6.onrender.com/api/posts/4154823444/comment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data4)
    })
    const result = await response.json()
    console.log(result)
    console.log("Elon Musk")
}

const jettonData = {
    "user_id": 4294967295,
    "jetton_name": "Sample Jetton",
    "jetton_address": "wdwqsqdwwd",
    "jetton_amm_address": "01xabcdef1234567890",
    "v": "Hex",
    "dev_address": "0x9876543210abcsdef",
    "total_ton_balance": 12000.0,
    "jetton_image": "https://picsum.photos/200",
    "jetton_description": "This is a good jetton",
    "jetton_ticker": "USDI/TON"
};

const submitJetton = async () => {
    console.log("Jeff Bezos")
    const response = await fetch('https://backend-server-tvb6.onrender.com/api/jettons/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jettonData)
    })
    const result = await response.json()
    console.log(result)
    console.log("Elon Musk")
}


const transactionData = {
    "jetton_address": "45545fgggcw",
    "transaction_hash": "0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
    "user_address": "0:user1234efgh5678ijkl9012mnop3456qrst7890uvwx5678yzab1234cdef5678",
    "jetton_price": 150.75,
    "total_supply": 1000000.00,
    "type": "sell"
};
const submitJettonTransaction = async () => {
    const response = await fetch('https://backend-server-tvb6.onrender.com/api/jettons/transactions', {
        method: "POST",
        body: JSON.stringify(transactionData),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    const result = await response.json()
    console.log(result)
}
