import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from '../../scrollToTop'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const PostPreview = ({width,media,title,id}) => {
    
    return (
        
            <div className={`card  p-1 ${width}`} >
                <ScrollToTop />
                <Link className="text-decoration-none" to={`/${id}`}>
                <LazyLoadImage effect="blur"  src={media} className="card-img-top  "  alt="..."/>
                {/* src="http://www.pngmagic.com/product_images/youtube-thumbnail-background-free.jpg" data- */}
                <div className="card-body">
                    <div className="card-title">
                        <p className="card-text ">{title}</p>
                    </div>
                </div>
                </Link>
            </div>
        
    )
}

export default PostPreview
