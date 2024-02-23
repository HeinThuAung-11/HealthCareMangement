// eslint-disable-next-line react/prop-types
export const Banner = ({imageUrl, altText}) => {
    return (
        <div className="banner bg-gray-200 w-full">
            <img src={imageUrl} alt={altText} className="banner-image object-cover w-full h-[500px]"/>
        </div>
    );
}