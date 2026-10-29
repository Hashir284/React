import { useState, useMemo, useCallback } from "react";

const productsData = [
    { id: 1, name: "iPhone 15", price: 250000, category: "Mobile" },
    { id: 2, name: "Samsung S24", price: 220000, category: "Mobile" },
    { id: 3, name: "Dell Laptop", price: 180000, category: "Laptop" },
    { id: 4, name: "HP Laptop", price: 150000, category: "Laptop" },
    { id: 5, name: "AirPods", price: 45000, category: "Accessories" },
    { id: 6, name: "Gaming Mouse", price: 8000, category: "Accessories" },
];

export default function Products() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("default");
    const [count, setCount] = useState(0);
    
    const searchFun = useCallback(() => {
        console.log("Filtering and sorting products...");
        
        let result = productsData.filter((product) => {
            const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());
            
            const matchesCategory =
            category === "All" || product.category === category;
            
            return matchesSearch && matchesCategory;
        });
        
        if (sort === "low-to-high") {
            result.sort((a, b) => a.price - b.price);
        }
        
        if (sort === "high-to-low") {
            result.sort((a, b) => b.price - a.price);
        }
        
        return result;
    }, [search, category, sort])

    const filteredProducts = useMemo(() => searchFun(), [searchFun]);

    return (
        <div>
            <h1>My Store</h1>

            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="All">All Categories</option>
                <option value="Mobile">Mobile</option>
                <option value="Laptop">Laptop</option>
                <option value="Accessories">Accessories</option>
            </select>

            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >
                <option value="default">Default Order</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
            </select>

            <button onClick={() => setCount(count + 1)}>
                Counter: {count}
            </button>

            <h2>Products</h2>

            {filteredProducts.length === 0 ? (
                <p>No products found.</p>
            ) : (
                filteredProducts.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Category: {product.category}</p>
                        <p>Price: Rs. {product.price.toLocaleString()}</p>
                    </div>
                ))
            )}
        </div>
    );
}