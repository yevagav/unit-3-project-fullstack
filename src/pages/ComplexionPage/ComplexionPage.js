import {useState, useEffect} from 'react'


export default function ComplexionPage(props) {
    const [items, setItems] = useState([])

    const getItems = async () => {
        try {
            const response = await fetch('/api/items')
            const data = await response.json()
            setItems(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
        {
            items && items.length ? (
                <div>
                    {
                        items
                            .filter(item => item.category==1)
                            .map((item) => {
                                return (
                                    <main key={item._id}>
                                    <h1>{item.name}</h1>
                                    <img src={item.image} />
                                    <p>{item.price}</p>
                                    {/* <button onClick={item.url}>View Item</button> */}
                                    
                                    </main>                 
                                )
                            })
                    }
                </div>
            ):<h1></h1>
        }
    </>
)
}
