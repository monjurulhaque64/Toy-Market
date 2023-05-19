import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

const images = [
    "https://freedesignfile.com/upload/2017/06/Baby-play-with-toys-HD-picture.jpg",
    "https://previews.123rf.com/images/oksun70/oksun701509/oksun70150900120/46041764-two-adorable-babies-kids-playing-with-educational-toys-toddlers-girl-and-boy-sitting-on-floor.jpg",
    "https://image.smythstoys.com/original/desktop/100364.jpg",
    "https://w0.peakpx.com/wallpaper/240/223/HD-wallpaper-cute-baby-boy-is-sitting-with-brown-toy-teddy-in-white-background-cute.jpg",
    "https://wallpapers.com/images/featured/g1544odr153rl808.jpg",
    "https://w0.peakpx.com/wallpaper/925/767/HD-wallpaper-teddy-bears-land-cute-girl-toy-copil-child-teddy-bear-baby-hat.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTku40JrM7p47qhiE5PAK9I6mNI7TxXbOCNMwz7OZep9X0Ms1DhnPGupJxe6o_cU1JwE_Q&usqp=CAU",
    "https://media.istockphoto.com/id/938197896/photo/asian-baby-sit-with-teddy-bear.jpg?b=1&s=170667a&w=0&k=20&c=R_MHqyep1wqxrSzwUWk3U4EBnBodEjIx2xBNP27HFKQ=",
]

const Gallery = () => {
    return (
        <div className='mb-10 mt-10 rounded-3xl'>
            <h1 className='text-center mb-10 text-4xl text-purple-500 font-bold'>Introducing our Adorable Little Stars: Meet Our Charming Baby Customers!</h1>
            <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
            <Masonry>
                {images.map((image, i) => (
                    <img
                        key={i}
                        src={image}
                        style={{ width: "100%", display: "block", }}
                        alt=""
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
        </div>
    );
};

export default Gallery;