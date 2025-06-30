function ProductCard({ name, price }) {
    return (
        <div className="p-4 bg-white shadow-md rounded-md border mb-2">
            <h2 className="font-bold text-lg">{name}</h2>
            <p className="text-gray-600">{price}</p>
        </div>
    );
}

export default ProductCard;