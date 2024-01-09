import './BikeParts.css'
const BikeParts = () => {
    return (
        <div className='bike'>
            <div className="bike-parts-container" data-aos="fade-right"
            data-aos-duration="1500">
                <div>
                    <span className='number'>01</span>
                    <span className='name'>COMFORT</span>
                </div>
                <img className="bike-part-size" src="https://cdn.shopify.com/s/files/1/0623/8561/9137/collections/collection-comfort_1024x1024.png?v=1662639945" alt="" />
                <p className='accessories'>view Comfort Accesories &nbsp; ➡</p>
            </div>
            <div className="bike-parts-container" data-aos="fade-right"
            data-aos-duration="2500">
                <div>
                    <span className='number'>02</span>
                    <span className='name'>DESIGN</span>
                </div>
                <img className="bike-part-size" src="https://cdn.shopify.com/s/files/1/0623/8561/9137/collections/collection-design_1024x1024.png?v=1662639943" alt="" />
                <p className='accessories'>view design Accesories &nbsp; ➡</p>
            </div>
            <div className="bike-parts-container" data-aos="fade-right"
            data-aos-duration="4500">
                <div>
                    <span className='number'>03</span>
                    <span className='name'>POWER</span>
                </div>
                <img className="bike-part-size" src="https://cdn.shopify.com/s/files/1/0623/8561/9137/collections/collection-power_1024x1024.png?v=1662639940" alt="" />
                <p className='accessories'>view power Accesories &nbsp; ➡</p>
            </div>
            <div className="bike-parts-container" data-aos="fade-right"
            data-aos-duration="5500">
                <div>
                    <span className='number'>04</span>
                    <span className='name'>APPAREL</span>
                </div>
                <img className="bike-part-size" src="https://cdn.shopify.com/s/files/1/0623/8561/9137/collections/collection-apparel_1024x1024.png?v=1662639938" alt="" />
                <p className='accessories'>view apparel Accesories &nbsp; ➡</p>
            </div>
            <div className="bike-parts-container" data-aos="fade-right"
            data-aos-duration="6500">
                <div className='inside-title'>
                    <span className='number'>05</span>
                    <span className='name'>STORAGE</span>
                </div>
                <img className="bike-part-size" src="https://cdn.shopify.com/s/files/1/0623/8561/9137/collections/collection-storage_1024x1024.png?v=1669997583" alt="" />
                <p className='accessories'>view storage Accesories &nbsp; ➡</p>
            </div>
        </div>
        
    )
}

export default BikeParts;