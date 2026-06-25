function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "All",
    "Mobiles",
    "Accessories",
    "Earbuds",
    "Chargers",
  ];

  return (
    <div className="flex gap-2 mb-5 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;