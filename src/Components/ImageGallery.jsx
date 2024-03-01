import React, { useEffect, useState } from 'react'
import '../App.css'

const images = [
    { "id": 1, "url": "food1.jpg", "tag": "food" },
    { "id": 2, "url": "car1.jpg", "tag": "car" },
    { "id": 3, "url": "bike1.jpg", "tag": "bike" },
    { "id": 4, "url": "car2.jpg", "tag": "car" },
    { "id": 5, "url": "bike2.jpg", "tag": "bike" },
    { "id": 6, "url": "car3.jpg", "tag": "car" },
    { "id": 7, "url": "food2.jpg", "tag": "food" },
    { "id": 8, "url": "food3.jpg", "tag": "food" },
    { "id": 9, "url": "bike3.jpg", "tag": "bike" },
    { "id": 10, "url": "food4.jpg", "tag": "food" },
    { "id": 11, "url": "car4.jpg", "tag": "car" },
    { "id": 12, "url": "bike4.jpg", "tag": "bike" },
    { "id": 13, "url": "food5.jpg", "tag": "food" },
    { "id": 14, "url": "car5.jpg", "tag": "car" },
    { "id": 15, "url": "car6.jpg", "tag": "car" },
    { "id": 16, "url": "bike5.jpg", "tag": "bike" },
    { "id": 17, "url": "food6.jpg", "tag": "food" },
    { "id": 18, "url": "bike6.jpg", "tag": "bike" },
    // { "id": 19, "url": "food7.jpg", "tag": "food" },
    // { "id": 20, "url": "car7.jpg", "tag": "car" }
]
const TagButton = ({name, handleSetTag, tagActive }) => {
    return (
        <button onClick={ () => handleSetTag(name)} className={`tag-button ${tagActive ? 'tag-active' : null}`}>
            {name.toUpperCase()}
        </button>
    )
}

const ImageGallery = () => {

    let [tag,setTag] = useState('all')
    let [filteredImages, setFilteredImages] = useState([])

    useEffect(()=>{
        tag === 'all' ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag))
    },[tag])
    return (
        <div  className="ImageGallery">
            <div className="image-btns">
                <TagButton name="all" handleSetTag={setTag}  tagActive={ tag === 'all' ? true : false} />
                <TagButton name="car" handleSetTag={setTag}  tagActive={ tag === 'car' ? true : false} />
                <TagButton name="food" handleSetTag={setTag} tagActive={ tag === 'food' ? true : false} />
                <TagButton name="bike" handleSetTag={setTag} tagActive={ tag === 'bike' ? true : false} />
            </div>
           <div className='gallery'>
            {filteredImages.map((image) => {
                    return(
                        <div key={image.id} className='image-card'>
                            <img src={`../Images/${image.url}`} alt="" className='image'/>
                        </div>
                    )
            })}
           </div>
        </div>
    )
}
export default ImageGallery