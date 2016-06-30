// Image List component
import React from 'react';
import ImageDetail from './imageDetail';

const ImageList = (props) => {
   const ValidImages = props.images.filter(image => !image.is_album);
   const RenderedImages = ValidImages.map(function(image){
     return <ImageDetail key={image.title} image={image} />
   });
   return (
   	  <ul className="media-list list-group">
      {RenderedImages}
      </ul>
   	)
};

// Export the component
export default ImageList;
